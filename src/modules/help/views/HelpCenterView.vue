<script setup lang="ts">
/** Ajuda > Central de ajuda: os guias por tecnologia, os artigos da Groone no idioma da pessoa e o atendimento do gerente e do WhatsApp. */
import { computed, onMounted, ref } from 'vue'
import { ArrowRight, BookOpen, Search } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Input from '@/components/ui/Input.vue'
import { ApiError } from '@/lib/api'
import { errorText, lang, t } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import ArticleDialog from '@/modules/help/components/ArticleDialog.vue'
import GuideDialog from '@/modules/help/components/GuideDialog.vue'
import ManagerCard from '@/modules/help/components/ManagerCard.vue'
import WhatsappIcon from '@/modules/help/components/WhatsappIcon.vue'
import { ARTICLE_CATEGORIES, CATEGORY_LABEL, filterArticles, filterGuides, readingMinutes, whatsappLink } from '@/modules/help/rules'
import { helpService } from '@/modules/help/service'
import type { HelpCategory, HelpCenterItem, SupportContact } from '@/modules/help/types'

const items = ref<HelpCenterItem[] | null>(null)
const contact = ref<SupportContact | null>(null)
const loadError = ref<string | null>(null)
const query = ref('')
const category = ref<HelpCategory | 'all'>('all')
const guide = ref<HelpCenterItem | null>(null)
const article = ref<HelpCenterItem | null>(null)
const guideOpen = ref(false)
const articleOpen = ref(false)
const guides = computed(() => filterGuides(items.value ?? [], query.value))
const articles = computed(() => filterArticles(items.value ?? [], category.value, query.value))
const whatsapp = computed(() => contact.value?.whatsapp ?? null)
const helpLink = computed(() => whatsappLink(whatsapp.value, t('help.needHelp')))
const notFoundLink = computed(() => whatsappLink(whatsapp.value, t('help.notFoundMessage', { query: query.value })))
const chips = computed(() => [{ value: 'all' as const, label: t('help.cat.all') }, ...ARTICLE_CATEGORIES.map((value) => ({ value, label: t(CATEGORY_LABEL[value]) }))])
const buttonLink =
  'inline-flex h-9 items-center gap-2 rounded-md border bg-card px-4 text-[14px] font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'

/** Carrega os guias e artigos no idioma do painel e o contato do gerente. */
async function load() {
  loadError.value = null
  try {
    const [found, support] = await Promise.all([helpService.items(lang.value), helpService.contact()])
    items.value = found
    contact.value = support
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Abre o guia ou o artigo e conta a leitura (sem travar a tela se a contagem falhar). */
function openItem(item: HelpCenterItem) {
  if (item.kind === 'guide') {
    guide.value = item
    guideOpen.value = true
  } else {
    article.value = item
    articleOpen.value = true
  }
  helpService.read(item.id).catch(() => undefined)
}

/** Guarda o "ajudou?" do artigo aberto. */
function rate(helpful: boolean) {
  if (article.value) helpService.rate(article.value.id, helpful).catch(() => undefined)
}

onMounted(load)
</script>

<template>
  <PageHeader :title="t('help.title')" :sub="t('help.sub')">
    <template #actions>
      <a v-if="helpLink" :href="helpLink" target="_blank" rel="noopener noreferrer" :class="buttonLink"><WhatsappIcon />{{ t('help.whatsapp') }}</a>
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <template v-else>
      <div class="relative">
        <Search class="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
        <Input v-model="query" type="search" :aria-label="t('help.search')" :placeholder="t('help.search')" class="h-12 bg-card pl-12 text-[16px]" />
      </div>

      <section v-if="guides.length" class="grid gap-3">
        <h2 class="text-[18px] font-semibold tracking-tight">{{ t('help.guides') }}</h2>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <button v-for="item in guides" :key="item.id" type="button" class="group flex items-start gap-4 rounded-lg border bg-card p-5 text-left hover:bg-muted" @click="openItem(item)">
            <span class="grid size-10 shrink-0 place-items-center rounded-md border bg-background transition-colors group-hover:bg-foreground group-hover:text-background"><BookOpen class="size-5" aria-hidden="true" /></span>
            <span class="min-w-0">
              <span class="block text-[16px] font-semibold tracking-tight">{{ item.content.title }}</span>
              <span class="block text-[14px] text-muted-foreground">{{ item.content.summary }}</span>
              <span class="mt-2 inline-flex items-center gap-1 text-[13px] font-medium text-link">
                {{ t('help.stepsCount', { n: item.content.steps.length }) }}<ArrowRight class="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </span>
          </button>
        </div>
      </section>

      <h2 class="text-[18px] font-semibold tracking-tight">{{ t('help.articles') }}</h2>
      <div class="flex flex-wrap gap-2" role="radiogroup" :aria-label="t('help.categories')">
        <button
          v-for="chip in chips"
          :key="chip.value"
          type="button"
          role="radio"
          :aria-checked="category === chip.value"
          :class="cn('h-8 rounded-full border px-3 text-[13px] transition-colors', category === chip.value ? 'border-foreground bg-foreground text-background' : 'bg-card hover:bg-muted')"
          @click="category = chip.value"
        >
          {{ chip.label }}
        </button>
      </div>
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <template v-if="items === null">
          <div v-for="index in 3" :key="index" class="h-36 animate-pulse rounded-lg border bg-card" aria-hidden="true" />
        </template>
        <button v-for="item in articles" :key="item.id" type="button" class="group flex h-full flex-col items-start rounded-lg border bg-card p-5 text-left hover:bg-muted" @click="openItem(item)">
          <span class="flex items-center gap-2 text-[12px] font-medium text-muted-foreground"><BookOpen class="size-3.5" aria-hidden="true" />{{ t(CATEGORY_LABEL[item.category]) }} · {{ t('help.minutes', { n: readingMinutes(item.content.body) }) }}</span>
          <span class="mt-2 text-[16px] font-semibold tracking-tight">{{ item.content.title }}</span>
          <span class="mt-1 text-[14px] text-muted-foreground">{{ item.content.summary }}</span>
          <span class="mt-auto inline-flex items-center gap-1 pt-3 text-[13px] font-medium text-link">{{ t('help.read') }}<ArrowRight class="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" /></span>
        </button>
        <div v-if="items !== null && !articles.length" class="rounded-lg border bg-card p-8 text-center md:col-span-2 lg:col-span-3">
          <p class="font-medium">{{ query.trim() ? t('help.nothingFor', { query: query.trim() }) : t('help.noArticles') }}</p>
          <p class="mt-1 text-[14px] text-muted-foreground">{{ t('help.askWhatsapp') }}</p>
          <a v-if="notFoundLink" :href="notFoundLink" target="_blank" rel="noopener noreferrer" :class="[buttonLink, 'mt-4']"><WhatsappIcon />{{ t('help.whatsapp') }}</a>
        </div>
      </div>

      <ManagerCard :contact="contact" />
    </template>
  </PageBody>
  <GuideDialog v-model:open="guideOpen" :guide="guide" :whatsapp="whatsapp" />
  <ArticleDialog v-model:open="articleOpen" :article="article" @rate="rate" />
</template>
