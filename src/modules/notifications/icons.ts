/** O componente do lucide de cada ícone de notificação. */

import type { Component } from 'vue'
import { AlertTriangle, Bell, CalendarDays, ChartLine, CircleCheck, ClipboardList, DollarSign, Gift, Info, Megaphone, Star, Users, Wrench } from 'lucide-vue-next'
import type { NotificationIcon } from '@/modules/notifications/types'

export const ICON_COMPONENTS: Record<NotificationIcon, Component> = {
  bell: Bell,
  megaphone: Megaphone,
  info: Info,
  alert: AlertTriangle,
  check: CircleCheck,
  star: Star,
  gift: Gift,
  calendar: CalendarDays,
  wrench: Wrench,
  chart: ChartLine,
  dollar: DollarSign,
  users: Users,
  task: ClipboardList,
}
