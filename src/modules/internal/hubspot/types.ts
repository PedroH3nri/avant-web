/** Formatos da API do HubSpot no painel interno, iguais aos `dto.py` de `internal/hubspot` do avant-api. */

export type HubspotKind = 'contact' | 'company' | 'deal' | 'site' | 'metric' | 'commission'
export type HubspotRunState = 'pending' | 'running' | 'done' | 'failed'

export type HubspotKindStatus = { kind: HubspotKind; synced: number; failed: number; last_synced_at: string | null }

export type HubspotFailure = { kind: HubspotKind; avant_id: string; label: string; error: string; failed_at: string | null; hubspot_id: string | null }

export type HubspotRun = {
  id: string
  state: HubspotRunState
  requested_at: string
  started_at: string | null
  finished_at: string | null
  changed: number
  failed: number
  error: string | null
}

export type HubspotStatus = { configured: boolean; kinds: HubspotKindStatus[]; failures: HubspotFailure[]; last_run: HubspotRun | null }

export type HubspotActivityKind = 'note' | 'call' | 'meeting' | 'task'
export type HubspotActivity = { kind: HubspotActivityKind; title: string; happened_at: string | null }

export type HubspotCard = {
  kind: HubspotKind
  hubspot_id: string | null
  url: string | null
  owner: string | null
  stage: string | null
  facts: Record<string, string>
  activities: HubspotActivity[]
}

export type HubspotClientCards = { configured: boolean; contact: HubspotCard }
export type HubspotNetworkCards = { configured: boolean; company: HubspotCard; deal: HubspotCard | null }
export type HubspotSiteCards = { configured: boolean; site: HubspotCard }

export type HubspotTaskRule = 'network_error' | 'network_disconnected' | 'install' | 'alert' | 'detractor' | 'revenue_drop'
export type HubspotTaskDue = 'today' | 'one_business_day' | 'two_business_days' | 'one_week'
export type HubspotTaskState = 'pending' | 'open' | 'completed' | 'failed'

export type HubspotHealthProperty = { name: string; label: string; enabled: boolean }
export type HubspotTaskRuleSetting = { rule: HubspotTaskRule; enabled: boolean; due: HubspotTaskDue }
export type HubspotSettings = { properties: HubspotHealthProperty[]; rules: HubspotTaskRuleSetting[]; updated_at: string | null }
export type HubspotSettingsInput = { disabled_properties: string[]; rules: HubspotTaskRuleSetting[] }

export type HubspotTask = {
  id: string
  rule: HubspotTaskRule
  subject: string
  client_id: string
  client_name: string
  manager_name: string | null
  state: HubspotTaskState
  due_at: string
  created_at: string
  hubspot_id: string | null
  error: string | null
}

export type HubspotProspect = {
  hubspot_id: string
  email: string | null
  first_name: string
  last_name: string
  phone: string | null
  company: string | null
  stage: string | null
  owner: string | null
  created_at: string | null
  url: string
}
export type HubspotProspectPage = { configured: boolean; items: HubspotProspect[]; total: number; next_after: string | null }
