<script setup lang="ts">
/** Criar uma chave: nome, validade e permissões. Depois mostra o valor, uma única vez. */
import { computed, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import { Check, Copy } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import { copy } from '@/lib/account'
import { api, ApiError } from '@/lib/api'
import { errorText, pick, t, type Key } from '@/lib/i18n'
import type { ApiKey, ApiKeyCreated, Items, Permission } from '@/lib/types'
import { useSession } from '@/stores/session'

const open = defineModel<boolean>('open', { default: false })
const emit = defineEmits<{ created: [key: ApiKey] }>()
const session = useSession()

// Mesmas regras do avant-core: só o que a pessoa tem, e nunca criar outras chaves.
const NOT_FOR_KEYS = new Set(['api_keys.manage'])
const DAYS = [30, 90, 180, 365]

const catalog = ref<Permission[] | null>(null)
const name = ref('')
const days = ref('365')
const chosen = ref<Set<string>>(new Set())
const busy = ref(false)
const token = ref<string | null>(null)
const copied = ref(false)
const manual = ref(false)

watch(open, async (value) => {
  if (!value) return
  name.value = ''
  days.value = '365'
  chosen.value = new Set()
  token.value = null
  copied.value = manual.value = false
  if (catalog.value === null && session.can('roles.view')) {
    catalog.value = await api
      .get<Items<Permission>>('/permissions')
      .then((page) => page.items)
      .catch(() => null)
  }
})

/** Com o catálogo, os nomes traduzidos; sem ele (sem roles.view), as chaves das permissões da pessoa. */
const groups = computed(() => {
  const list: Permission[] = catalog.value
    ? catalog.value.filter((permission) => session.can(permission.key))
    : (session.me?.permissions ?? []).filter((permission) => !permission.includes('*')).map((key) => ({ key, group: key.split('.')[0]!, name: {} }))
  const by = new Map<string, Permission[]>()
  for (const permission of list.filter((permission) => !NOT_FOR_KEYS.has(permission.key))) by.set(permission.group, [...(by.get(permission.group) ?? []), permission])
  return [...by.entries()]
})
/** Nome do grupo de permissões no idioma atual. */
const groupLabel = (group: string) => t(`perm.group.${group}` as Key)
const options = DAYS.map((days) => ({
  value: String(days),
  label: days === 365 ? t('key.year') : t('key.days', { n: days }),
}))
const ready = computed(() => name.value.trim().length > 0 && chosen.value.size > 0)

/** Marca ou desmarca uma permissão da chave. */
function toggle(key: string, on: boolean) {
  const next = new Set(chosen.value)
  if (on) next.add(key)
  else next.delete(key)
  chosen.value = next
}

/** Cria a chave e mostra o token, que só aparece agora. */
async function create() {
  if (!ready.value) return
  busy.value = true
  try {
    const key = await api.post<ApiKeyCreated>('/api-keys', {
      name: name.value.trim(),
      permissions: [...chosen.value].sort(),
      expires_in_days: Number(days.value),
    })
    token.value = key.token
    const { token: _secret, ...rest } = key
    emit('created', rest)
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}

/** Copia o token para a área de transferência. */
async function copyToken() {
  if (!token.value) return
  if (await copy(token.value)) {
    copied.value = true
    setTimeout(() => (copied.value = false), 1600)
    return
  }
  const element = document.getElementById('key-token')
  if (element) window.getSelection()?.selectAllChildren(element)
  manual.value = true
}
</script>

<template>
  <Dialog
    v-model:open="open"
    :title="token ? t('key.createdTitle') : t('key.create')"
    :desc="token ? t('key.createdDesc') : undefined"
    class="max-w-[600px]"
  >
    <div v-if="token" class="grid gap-3">
      <div class="flex items-center gap-2">
        <code id="key-token" class="min-w-0 flex-1 break-all rounded-md border bg-muted px-3 py-2.5 font-mono text-[13px]">{{ token }}</code>
        <Button variant="outline" size="icon" :aria-label="t('common.copy')" @click="copyToken"><component :is="copied ? Check : Copy" /></Button>
      </div>
      <p v-if="manual" class="text-[13px] text-muted-foreground" role="status">
        {{ t('common.copyManual') }}
      </p>
      <p class="text-[13px] text-muted-foreground">
        {{ t('key.usage') }}
        <code class="font-mono text-foreground">Authorization: Bearer avk_…</code>
      </p>
    </div>
    <form v-else id="key-form" class="grid gap-5" @submit.prevent="create">
      <div class="grid items-start gap-4 sm:grid-cols-[1fr_160px]">
        <Field id="key-name" :label="t('key.name')" :hint="t('key.nameHint')">
          <Input id="key-name" v-model="name" maxlength="100" />
        </Field>
        <Field id="key-days" :label="t('key.validity')">
          <NativeSelect id="key-days" v-model="days" :options="options" />
        </Field>
      </div>
      <fieldset class="grid gap-4">
        <legend class="mb-1 text-[13px] font-medium text-muted-foreground">
          {{ t('key.permsTitle') }}
        </legend>
        <p class="-mt-2 text-[13px] text-muted-foreground">
          {{ t('key.permsHint') }}
        </p>
        <div v-for="[g, perms] in groups" :key="g" class="grid gap-2">
          <h3 class="text-[13px] font-medium">{{ groupLabel(g) }}</h3>
          <Checkbox
            v-for="perm in perms"
            :id="`key-perm-${perm.key}`"
            :key="perm.key"
            :label="pick(perm.name) || perm.key"
            :hint="perm.key"
            :model-value="chosen.has(perm.key)"
            @update:model-value="(on: boolean) => toggle(perm.key, on)"
          />
        </div>
      </fieldset>
    </form>
    <template #footer>
      <Button v-if="token" @click="open = false">{{ t('rec.done') }}</Button>
      <template v-else>
        <Button variant="outline" @click="open = false">{{ t('common.cancel') }}</Button>
        <Button type="submit" form="key-form" :loading="busy" :disabled="!ready">{{ t('key.create') }}</Button>
      </template>
    </template>
  </Dialog>
</template>
