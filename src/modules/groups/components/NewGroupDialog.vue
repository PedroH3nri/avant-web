<script setup lang="ts">
/** Diálogo Novo grupo: nome, descrição e pessoas (pelo menos uma, cada uma em um grupo só). */
import { computed, ref, watch } from 'vue'
import { Search } from 'lucide-vue-next'
import Avatar from '@/components/ui/Avatar.vue'
import Button from '@/components/ui/Button.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import { ApiError } from '@/lib/api'
import { errorText, pick, t } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { groupOf, nameTaken } from '@/modules/groups/rules'
import { groupService } from '@/modules/groups/service'
import type { Group } from '@/modules/groups/types'
import type { Member } from '@/modules/team/types'

const open = defineModel<boolean>('open', { default: false })
const props = defineProps<{ members: Member[]; groups: Group[] }>()
const emit = defineEmits<{ created: [group: Group] }>()

const name = ref('')
const description = ref('')
const picked = ref<string[]>([])
const search = ref('')
const busy = ref(false)
const problem = ref('')

const people = computed(() => {
  const needle = search.value.trim().toLowerCase()
  return props.members.filter((member) => `${member.user.name} ${member.user.email}`.toLowerCase().includes(needle))
})
const duplicate = computed(() => nameTaken(props.groups, name.value))
const ready = computed(() => name.value.trim() !== '' && !duplicate.value && picked.value.length > 0)

watch(open, (isOpen) => {
  if (!isOpen) return
  name.value = ''
  description.value = ''
  picked.value = []
  search.value = ''
  problem.value = ''
})

/** Marca ou desmarca a pessoa na lista. */
function toggle(membershipId: string) {
  picked.value = picked.value.includes(membershipId) ? picked.value.filter((chosen) => chosen !== membershipId) : [...picked.value, membershipId]
}

/** Cria o grupo e avisa a tela; o erro da API aparece no rodapé. */
async function create() {
  if (!ready.value) return
  busy.value = true
  problem.value = ''
  try {
    const group = await groupService.create({ name: name.value.trim(), description: description.value.trim() || null, membership_ids: picked.value })
    emit('created', group)
    open.value = false
  } catch (error) {
    problem.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <Dialog v-model:open="open" :title="t('groups.new')" :desc="t('groups.newDesc')" class="max-w-[640px]">
    <form id="new-group" class="grid gap-5" novalidate @submit.prevent="create">
      <div class="grid gap-4 sm:grid-cols-2">
        <Field id="group-name" :label="t('groups.name')" :error="duplicate && t('groups.nameTaken')">
          <Input id="group-name" v-model="name" :placeholder="t('groups.namePlaceholder')" maxlength="80" :invalid="duplicate" />
        </Field>
        <Field id="group-description" :label="t('groups.description')">
          <Input id="group-description" v-model="description" :placeholder="t('groups.descriptionPlaceholder')" maxlength="280" />
        </Field>
      </div>
      <div class="grid gap-2">
        <div class="flex items-baseline justify-between gap-3">
          <span class="text-[13px] font-medium text-muted-foreground">{{ t('groups.people') }}</span>
          <span :class="cn('text-[13px] tnum', picked.length === 0 ? 'text-muted-foreground' : 'text-foreground')">{{ t('groups.picked', { n: picked.length }) }}</span>
        </div>
        <div class="relative">
          <Search class="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <Input v-model="search" :aria-label="t('groups.searchPeople')" class="h-9 pl-9" :placeholder="t('groups.searchPeople')" />
        </div>
        <ul class="max-h-[30dvh] divide-y overflow-y-auto rounded-md border">
          <li v-if="people.length === 0" class="px-3 py-2.5 text-[14px] text-muted-foreground">{{ t('groups.noPeople') }}</li>
          <li v-for="member in people" :key="member.id">
            <label
              :class="
                cn('flex items-center gap-3 px-3 py-2.5 text-[14px]', groupOf(groups, member.id) ? 'cursor-not-allowed opacity-60' : 'cursor-pointer hover:bg-muted')
              "
            >
              <input
                type="checkbox"
                class="size-4 accent-[hsl(var(--foreground))]"
                :disabled="!!groupOf(groups, member.id)"
                :checked="picked.includes(member.id)"
                @change="toggle(member.id)"
              />
              <Avatar :name="member.user.name" :size="28" />
              <span class="min-w-0 flex-1">
                <span class="block truncate font-medium">{{ member.user.name }}</span>
                <span class="block truncate text-[13px] text-muted-foreground">{{ member.is_owner ? t('team.owner') : pick(member.role?.name) }}</span>
              </span>
              <span v-if="groupOf(groups, member.id)" class="whitespace-nowrap text-[13px] text-muted-foreground">{{
                t('groups.inGroup', { name: groupOf(groups, member.id)!.name })
              }}</span>
            </label>
          </li>
        </ul>
        <p class="text-[13px] text-muted-foreground">{{ t('groups.pendingHint') }}</p>
      </div>
    </form>
    <template #footer>
      <p class="mr-auto self-center text-[13px]" :class="problem ? 'text-bad' : 'text-muted-foreground'" :role="problem ? 'alert' : undefined">
        {{ problem || (picked.length === 0 ? t('groups.pickOne') : t('groups.ready')) }}
      </p>
      <Button variant="outline" @click="open = false">{{ t('common.cancel') }}</Button>
      <Button form="new-group" type="submit" :loading="busy" :disabled="!ready">{{ t('groups.create') }}</Button>
    </template>
  </Dialog>
</template>
