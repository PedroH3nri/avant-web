import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    public?: boolean
    guestOnly?: boolean
    permission?: string
    /** A tela abre com qualquer uma destas permissões. */
    anyPermission?: string[]
    internal?: boolean // painel interno da Groone
  }
}
