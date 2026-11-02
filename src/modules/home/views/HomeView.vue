<script setup lang="ts">
/** Início: o dashboard da pessoa; quem não vê relatórios fica com a situação da conta. */
import { computed } from 'vue'
import Card from '@/components/ui/Card.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import { t } from '@/lib/i18n'
import DashboardsView from '@/modules/dashboards/views/DashboardsView.vue'
import AccountStatus from '@/modules/home/components/AccountStatus.vue'
import { useSession } from '@/stores/session'

const session = useSession()
const firstName = computed(() => session.me?.user.name.split(' ')[0] ?? '')
const greeting = computed(() => {
  const hour = new Date().getHours()
  const key = hour < 12 ? 'home.morning' : hour < 18 ? 'home.afternoon' : 'home.evening'
  return t(key, { name: firstName.value })
})
</script>

<template>
  <DashboardsView v-if="session.company && session.can('reports.view')" />
  <template v-else>
    <PageHeader :title="greeting" :sub="session.company ? t('home.sub', { company: session.company.name }) : undefined" />
    <PageBody>
      <Card v-if="!session.company" :title="t('home.noCompany')" :desc="t('home.noCompanySub')" />
      <AccountStatus v-else />
    </PageBody>
  </template>
</template>
