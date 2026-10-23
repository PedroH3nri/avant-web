import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    public?: boolean
    guestOnly?: boolean
    permission?: string
    internal?: boolean // painel interno da Groone
  }
}
