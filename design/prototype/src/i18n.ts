export type Lang = 'pt' | 'en' | 'es'

const dict = {
  'nav.home': ['Início', 'Home', 'Inicio'],
  'nav.performance': ['Desempenho', 'Performance', 'Rendimiento'],
  'nav.team': ['Equipe', 'Team', 'Equipo'],
  'nav.networks': ['Networks do GAM', 'GAM networks', 'Networks de GAM'],
  'nav.settings': ['Configurações', 'Settings', 'Configuración'],
  'nav.internal': ['Painel interno Groone', 'Groone internal panel', 'Panel interno Groone'],
  'nav.back': ['Voltar ao painel do cliente', 'Back to client panel', 'Volver al panel del cliente'],
  'nav.soon': ['Em breve', 'Soon', 'Pronto'],
  'nav.metrics': ['Métricas', 'Metrics', 'Métricas'],
  'nav.dashboards': ['Dashboards', 'Dashboards', 'Dashboards'],
  'top.logout': ['Sair', 'Sign out', 'Salir'],
  'top.profile': ['Meu perfil', 'My profile', 'Mi perfil'],
  'top.companies': ['Suas Empresas', 'Your companies', 'Tus empresas'],

  'login.title': ['Entrar no Avant', 'Sign in to Avant', 'Entrar en Avant'],
  'login.sub': ['Use o e-mail do seu convite.', 'Use the email from your invite.', 'Usa el correo de tu invitación.'],
  'login.email': ['E-mail', 'Email', 'Correo'],
  'login.password': ['Senha', 'Password', 'Contraseña'],
  'login.submit': ['Entrar', 'Sign in', 'Entrar'],
  'login.google': ['Entrar com Google', 'Sign in with Google', 'Entrar con Google'],
  'login.forgot': ['Esqueci a senha', 'Forgot password', 'Olvidé la contraseña'],
  'login.or': ['ou', 'or', 'o'],
  'login.noaccount': ['Ainda sem acesso? O acesso é por convite da sua Empresa ou da equipe Groone.', 'No access yet? Access is by invite from your company or the Groone team.', '¿Aún sin acceso? El acceso es por invitación de tu empresa o del equipo Groone.'],
  'auth.tag': ['A operação do seu AdSense e Ad Manager, com cada pessoa da equipe no lugar certo.', 'Your AdSense and Ad Manager operation, with every teammate in the right place.', 'La operación de tu AdSense y Ad Manager, con cada persona del equipo en su lugar.'],

  'invite.title': ['Aceitar convite', 'Accept invite', 'Aceptar invitación'],
  'invite.name': ['Seu nome', 'Your name', 'Tu nombre'],
  'invite.pw2': ['Repita a senha', 'Repeat password', 'Repite la contraseña'],
  'invite.submit': ['Aceitar e entrar', 'Accept and sign in', 'Aceptar y entrar'],
  'invite.google': ['Depois de aceitar, você também pode entrar com Google usando este e-mail.', 'After accepting you can also sign in with Google using this email.', 'Después de aceptar también puedes entrar con Google usando este correo.'],

  'company.title': ['Crie sua Empresa', 'Create your company', 'Crea tu empresa'],
  'company.sub': ['É aqui que sua equipe, suas networks e seus sites vão morar. Cada cliente tem uma Empresa.', 'This is where your team, networks and sites live. Each client has one company.', 'Aquí vivirán tu equipo, tus networks y tus sitios. Cada cliente tiene una empresa.'],
  'company.name': ['Nome da Empresa', 'Company name', 'Nombre de la empresa'],
  'company.site': ['Site principal', 'Main site', 'Sitio principal'],
  'company.lang': ['Idioma padrão', 'Default language', 'Idioma predeterminado'],
  'company.submit': ['Criar Empresa', 'Create company', 'Crear empresa'],

  'home.title': ['Bom dia, Pedro', 'Good morning, Pedro', 'Buenos días, Pedro'],
  'home.sub': ['O que falta para a Blog Exemplo ficar redonda.', 'What is left to get Blog Exemplo fully set up.', 'Lo que falta para dejar Blog Exemplo lista.'],

  'team.title': ['Equipe', 'Team', 'Equipo'],
  'team.sub': ['Quem acessa a Blog Exemplo e com qual papel.', 'Who can access Blog Exemplo and with which role.', 'Quién accede a Blog Exemplo y con qué rol.'],
  'team.invite': ['Convidar pessoa', 'Invite person', 'Invitar persona'],
  'team.members': ['Membros', 'Members', 'Miembros'],
  'team.pending': ['Convites pendentes', 'Pending invites', 'Invitaciones pendientes'],
  'team.roles': ['Papéis', 'Roles', 'Roles'],
  'team.person': ['Pessoa', 'Person', 'Persona'],
  'team.role': ['Papel', 'Role', 'Rol'],
  'team.since': ['Desde', 'Since', 'Desde'],
  'team.seats': ['vagas de funcionários', 'staff seats', 'plazas de personal'],
  'team.seatsNote': ['Limite definido pela Groone. Convites pendentes ocupam vaga.', 'Limit set by Groone. Pending invites take a seat.', 'Límite definido por Groone. Las invitaciones pendientes ocupan plaza.'],
  'team.send': ['Enviar convite', 'Send invite', 'Enviar invitación'],
  'team.cancel': ['Cancelar', 'Cancel', 'Cancelar'],

  'net.title': ['Networks do GAM', 'GAM networks', 'Networks de GAM'],
  'net.sub': ['Networks do Google Ad Manager ligadas à Empresa e os sites importados delas.', 'Google Ad Manager networks linked to the company and the sites imported from them.', 'Networks de Google Ad Manager vinculadas a la empresa y sus sitios importados.'],
  'net.connect': ['Conectar network', 'Connect network', 'Conectar network'],
  'net.reimport': ['Reimportar sites', 'Re-import sites', 'Reimportar sitios'],
  'net.sites': ['Sites importados', 'Imported sites', 'Sitios importados'],

  'wiz.title': ['Conectar network', 'Connect network', 'Conectar network'],
  'wiz.sub': ['Para networks sem contrato MCM com a Groone. Quem aceita o contrato MCM é conectado automaticamente.', 'For networks without an MCM contract with Groone. Networks that accept MCM connect automatically.', 'Para networks sin contrato MCM con Groone. Quien acepta el MCM se conecta automáticamente.'],
  'wiz.test': ['Testar conexão', 'Test connection', 'Probar conexión'],

  'set.title': ['Configurações', 'Settings', 'Configuración'],
  'set.sub': ['Dados da Empresa, aparência do painel e idioma padrão.', 'Company details, panel appearance and default language.', 'Datos de la empresa, apariencia del panel e idioma predeterminado.'],
  'set.save': ['Salvar alterações', 'Save changes', 'Guardar cambios'],

  'int.title': ['Clientes', 'Clients', 'Clientes'],
  'int.sub': ['Todos os clientes, da rede Groone e de fora dela. Só a equipe Groone vê esta área.', 'All clients, inside and outside the Groone network. Only the Groone team sees this area.', 'Todos los clientes, de la red Groone y de fuera. Solo el equipo Groone ve esta área.'],
  'int.new': ['Novo cliente', 'New client', 'Nuevo cliente'],
} as const

export type Key = keyof typeof dict
const idx: Record<Lang, number> = { pt: 0, en: 1, es: 2 }
export const translate = (lang: Lang, k: Key) => dict[k][idx[lang]]
