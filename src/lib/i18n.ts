/**
 * Textos do painel em PT, EN e ES. Toda string da tela passa por aqui (DESIGN.md).
 * ``t('team.seats', { n: 3 })`` troca ``{n}`` pelo valor.
 */

import { computed, ref, watch } from 'vue'
import type { Lang, Localized } from './types'

const dict = {
  // Navegação e topo
  'nav.home': ['Início', 'Home', 'Inicio'],
  'nav.team': ['Equipe', 'Team', 'Equipo'],
  'nav.networks': ['Networks do GAM', 'GAM networks', 'Networks de GAM'],
  'nav.sites': ['Sites', 'Sites', 'Sitios'],
  'nav.settings': ['Configurações', 'Settings', 'Configuración'],
  'nav.account': ['Minha conta', 'My account', 'Mi cuenta'],
  'nav.internal': ['Painel interno Groone', 'Groone internal panel', 'Panel interno Groone'],
  'nav.groupClients': ['Clientes', 'Clients', 'Clientes'],
  'nav.groupInternal': ['Empresa (interna)', 'Company (internal)', 'Empresa (interna)'],
  'nav.roles': ['Papéis e permissões', 'Roles and permissions', 'Roles y permisos'],
  'nav.menu': ['Abrir menu', 'Open menu', 'Abrir menú'],
  'nav.main': ['Menu principal', 'Main menu', 'Menú principal'],
  'top.logout': ['Sair', 'Sign out', 'Salir'],
  'top.companies': ['Suas Empresas', 'Your companies', 'Tus empresas'],
  'top.network': ['Rede Groone', 'Groone network', 'Red Groone'],
  'top.lang': ['Idioma', 'Language', 'Idioma'],

  // Entrar
  'auth.tag': [
    'A operação do seu AdSense e Ad Manager, com cada pessoa da equipe no lugar certo.',
    'Your AdSense and Ad Manager operation, with every teammate in the right place.',
    'La operación de tu AdSense y Ad Manager, con cada persona del equipo en su lugar.',
  ],
  'login.title': ['Entrar no Avant', 'Sign in to Avant', 'Entrar en Avant'],
  'login.email': ['E-mail', 'Email', 'Correo'],
  'login.password': ['Senha', 'Password', 'Contraseña'],
  'login.submit': ['Entrar', 'Sign in', 'Entrar'],
  'login.google': ['Entrar com Google', 'Sign in with Google', 'Entrar con Google'],
  'login.forgot': ['Esqueci a senha', 'Forgot password', 'Olvidé la contraseña'],
  'login.or': ['ou', 'or', 'o'],
  'login.noaccount': [
    'Ainda sem acesso? O acesso é por convite da sua Empresa ou da equipe Groone.',
    'No access yet? Access is by invite from your company or the Groone team.',
    '¿Aún sin acceso? El acceso es por invitación de tu empresa o del equipo Groone.',
  ],
  'mfa.title': ['Código de verificação', 'Verification code', 'Código de verificación'],
  'mfa.sub': [
    'Digite o código de 6 dígitos do seu app autenticador ou um código de recuperação.',
    'Enter the 6-digit code from your authenticator app or a recovery code.',
    'Escribe el código de 6 dígitos de tu app autenticadora o un código de recuperación.',
  ],
  'mfa.code': ['Código', 'Code', 'Código'],
  'mfa.submit': ['Verificar', 'Verify', 'Verificar'],
  'mfa.back': ['Entrar com outra conta', 'Use another account', 'Usar otra cuenta'],
  'forgot.title': ['Redefinir a senha', 'Reset your password', 'Restablecer la contraseña'],
  'forgot.sub': [
    'Mandamos um link para o e-mail da sua conta. Ele vale por 1 hora.',
    'We will send a link to your account email. It is valid for 1 hour.',
    'Enviaremos un enlace al correo de tu cuenta. Vale por 1 hora.',
  ],
  'forgot.submit': ['Enviar link', 'Send link', 'Enviar enlace'],
  'forgot.sent': [
    'Se houver uma conta com {email}, o link chega em alguns minutos.',
    'If there is an account for {email}, the link arrives in a few minutes.',
    'Si hay una cuenta con {email}, el enlace llega en unos minutos.',
  ],
  'forgot.back': ['Voltar para o login', 'Back to sign in', 'Volver al inicio de sesión'],
  'reset.title': ['Escolha uma nova senha', 'Choose a new password', 'Elige una nueva contraseña'],
  'reset.sub': [
    'Depois de salvar, todas as sessões abertas são encerradas e você entra de novo.',
    'After saving, every open session ends and you sign in again.',
    'Después de guardar, se cierran todas las sesiones y vuelves a entrar.',
  ],
  'reset.mfa': [
    'Código do 2FA (se estiver ligado)',
    '2FA code (if enabled)',
    'Código 2FA (si está activado)',
  ],
  'reset.submit': ['Salvar nova senha', 'Save new password', 'Guardar nueva contraseña'],
  'reset.done': ['Senha trocada. Entre com a nova senha.', 'Password changed. Sign in with it.', 'Contraseña cambiada. Entra con la nueva.'],

  // Convite e criação da Empresa
  'invite.title': ['Entrar na {company}', 'Join {company}', 'Entrar en {company}'],
  'invite.titleOwner': ['Crie sua Empresa no Avant', 'Create your company on Avant', 'Crea tu empresa en Avant'],
  'invite.as': [
    'Convite para {email} como {role}. Válido até {date}.',
    'Invite for {email} as {role}. Valid until {date}.',
    'Invitación para {email} como {role}. Válida hasta {date}.',
  ],
  'invite.owner': [
    'A Groone convidou {email} para criar a Empresa. Válido até {date}.',
    'Groone invited {email} to create the company. Valid until {date}.',
    'Groone invitó a {email} a crear la empresa. Válida hasta {date}.',
  ],
  'invite.name': ['Seu nome', 'Your name', 'Tu nombre'],
  'invite.pw2': ['Repita a senha', 'Repeat password', 'Repite la contraseña'],
  'invite.pwHint': ['Pelo menos 10 caracteres.', 'At least 10 characters.', 'Al menos 10 caracteres.'],
  'invite.pwShort': [
    'A senha tem {n} caracteres. Use pelo menos 10.',
    'The password has {n} characters. Use at least 10.',
    'La contraseña tiene {n} caracteres. Usa al menos 10.',
  ],
  'invite.pwMismatch': ['As senhas não são iguais.', 'Passwords do not match.', 'Las contraseñas no coinciden.'],
  'invite.submit': ['Aceitar e entrar', 'Accept and sign in', 'Aceptar y entrar'],
  'invite.existing': [
    'Já existe uma conta com este e-mail. Entre com ela para aceitar o convite.',
    'There is already an account with this email. Sign in to accept the invite.',
    'Ya existe una cuenta con este correo. Entra con ella para aceptar la invitación.',
  ],
  'invite.acceptLogged': ['Aceitar convite', 'Accept invite', 'Aceptar invitación'],
  'invite.google': [
    'Depois de aceitar, você também pode entrar com Google usando este e-mail.',
    'After accepting you can also sign in with Google using this email.',
    'Después de aceptar también puedes entrar con Google usando este correo.',
  ],
  'invite.gone': ['Este convite não vale mais', 'This invite is no longer valid', 'Esta invitación ya no es válida'],
  'invite.goneSub': [
    'Ele já foi usado, cancelado ou venceu. Peça um novo convite a quem convidou você.',
    'It was already used, canceled or expired. Ask whoever invited you for a new one.',
    'Ya se usó, se canceló o venció. Pide una nueva a quien te invitó.',
  ],
  'invite.loggedAs': [
    'Você está logado como {email}.',
    'You are signed in as {email}.',
    'Estás conectado como {email}.',
  ],
  'invite.signIn': ['Entrar para aceitar', 'Sign in to accept', 'Entrar para aceptar'],
  'invite.switch': ['Entrar com outra conta', 'Use another account', 'Usar otra cuenta'],
  'company.name': ['Nome da Empresa', 'Company name', 'Nombre de la empresa'],
  'company.nameHint': [
    'Aparece no seletor de Empresas, nos convites e nos e-mails.',
    'Shown in the company switcher, invites and emails.',
    'Aparece en el selector de empresas, las invitaciones y los correos.',
  ],

  // Início
  'home.morning': ['Bom dia, {name}', 'Good morning, {name}', 'Buenos días, {name}'],
  'home.afternoon': ['Boa tarde, {name}', 'Good afternoon, {name}', 'Buenas tardes, {name}'],
  'home.evening': ['Boa noite, {name}', 'Good evening, {name}', 'Buenas noches, {name}'],
  'home.sub': ['O que está acontecendo na {company}.', 'What is going on at {company}.', 'Lo que pasa en {company}.'],
  'home.noNetworks': [
    'Nenhuma network do Google Ad Manager conectada ainda.',
    'No Google Ad Manager network connected yet.',
    'Aún no hay networks de Google Ad Manager conectadas.',
  ],
  'home.metricsSoon': [
    'Receita e métricas do Ad Manager chegam na próxima fase do Avant.',
    'Ad Manager revenue and metrics arrive in the next Avant phase.',
    'Los ingresos y métricas de Ad Manager llegan en la próxima fase de Avant.',
  ],
  'home.seatsOf': ['{used} de {limit} vagas', '{used} of {limit} seats', '{used} de {limit} plazas'],
  'home.seeTeam': ['Ver equipe', 'See team', 'Ver equipo'],
  'home.lost': ['{name} está sem acesso.', '{name} has no access.', '{name} no tiene acceso.'],
  'home.lostSub': [
    'A conta de serviço da Groone deixou de ser administradora dessa network.',
    'The Groone service account is no longer an administrator of this network.',
    'La cuenta de servicio de Groone dejó de ser administradora de esta network.',
  ],
  'home.reconnect': ['Reconectar', 'Reconnect', 'Reconectar'],
  'home.noCompany': ['Você ainda não está em nenhuma Empresa', 'You are not in any company yet', 'Aún no estás en ninguna empresa'],
  'home.noCompanySub': [
    'Quando alguém convidar você, a Empresa aparece aqui.',
    'When someone invites you, the company shows up here.',
    'Cuando alguien te invite, la empresa aparecerá aquí.',
  ],

  // Networks (resumo)
  'net.title': ['Networks do GAM', 'GAM networks', 'Networks de GAM'],
  'net.col.network': ['Network', 'Network', 'Network'],
  'net.col.status': ['Status', 'Status', 'Estado'],
  'net.col.sites': ['Sites', 'Sites', 'Sitios'],
  'net.col.checked': ['Última checagem', 'Last check', 'Última revisión'],
  'net.status.pending': ['Testando conexão', 'Testing connection', 'Probando conexión'],
  'net.status.connected': ['Conectada', 'Connected', 'Conectada'],
  'net.status.error': ['Sem acesso', 'No access', 'Sin acceso'],
  'net.status.disconnected': ['Desconectada', 'Disconnected', 'Desconectada'],

  // Configurações
  'set.title': ['Configurações', 'Settings', 'Configuración'],
  'set.sub': [
    'Dados da Empresa, aparência do painel e idioma.',
    'Company details, panel appearance and language.',
    'Datos de la empresa, apariencia del panel e idioma.',
  ],
  'set.general': ['Geral', 'General', 'General'],
  'set.appearance': ['Aparência', 'Appearance', 'Apariencia'],
  'set.language': ['Idioma', 'Language', 'Idioma'],
  'set.nameTitle': ['Nome da Empresa', 'Company name', 'Nombre de la empresa'],
  'set.nameNote': ['Use de 2 a 120 caracteres.', 'Use 2 to 120 characters.', 'Usa de 2 a 120 caracteres.'],
  'set.nameEmpty': ['Informe o nome da Empresa.', 'Enter the company name.', 'Escribe el nombre de la empresa.'],
  'set.accent': ['Cor do sistema', 'System color', 'Color del sistema'],
  'set.accentDesc': [
    'Usada nos botões principais e nas vagas da equipe. Vale para todos da Empresa.',
    'Used on primary buttons and team seats. Applies to everyone in the company.',
    'Se usa en los botones principales y las plazas del equipo. Vale para toda la empresa.',
  ],
  'set.accentNote': [
    'Quem estiver no painel vê a mudança na próxima vez que abrir.',
    'People in the panel see the change next time they open it.',
    'Quien esté en el panel verá el cambio la próxima vez que lo abra.',
  ],
  'set.accentReadonly': [
    'Só quem gerencia a Empresa troca a cor.',
    'Only company managers can change the color.',
    'Solo quien gestiona la empresa cambia el color.',
  ],
  'set.theme': ['Tema', 'Theme', 'Tema'],
  'set.themeDesc': ['Só para você, neste navegador.', 'Just for you, in this browser.', 'Solo para ti, en este navegador.'],
  'set.theme.light': ['Claro', 'Light', 'Claro'],
  'set.theme.dark': ['Escuro', 'Dark', 'Oscuro'],
  'set.theme.system': ['Sistema', 'System', 'Sistema'],
  'set.langDesc': [
    'O idioma do painel para você. Os e-mails seguem o idioma da sua conta.',
    'The panel language for you. Emails follow your account language.',
    'El idioma del panel para ti. Los correos siguen el idioma de tu cuenta.',
  ],
  'accent.default': ['Padrão', 'Default', 'Predeterminado'],
  'accent.blue': ['Azul', 'Blue', 'Azul'],
  'accent.green': ['Verde', 'Green', 'Verde'],
  'accent.purple': ['Roxo', 'Purple', 'Morado'],
  'accent.orange': ['Laranja', 'Orange', 'Naranja'],

  // Equipe
  'team.title': ['Equipe', 'Team', 'Equipo'],
  'team.sub': ['Quem acessa a {company} e com qual papel.', 'Who can access {company} and with which role.', 'Quién accede a {company} y con qué rol.'],
  'team.invite': ['Convidar pessoa', 'Invite person', 'Invitar persona'],
  'team.inviteDesc': [
    'A pessoa recebe um e-mail com o link do convite. O convite vale por 1 dia e ocupa uma vaga até ser aceito ou cancelado.',
    'The person gets an email with the invite link. The invite is valid for 1 day and takes a seat until accepted or canceled.',
    'La persona recibe un correo con el enlace. La invitación vale 1 día y ocupa una plaza hasta que se acepte o cancele.',
  ],
  'team.afterInvite': ['Depois deste convite: {n} de {limit} vagas.', 'After this invite: {n} of {limit} seats.', 'Después de esta invitación: {n} de {limit} plazas.'],
  'team.full': [
    'Todas as vagas estão ocupadas. Cancele um convite ou peça mais vagas à Groone.',
    'All seats are taken. Cancel an invite or ask Groone for more seats.',
    'Todas las plazas están ocupadas. Cancela una invitación o pide más a Groone.',
  ],
  'team.dupe': [
    'Essa pessoa já está na equipe ou tem um convite pendente.',
    'This person is already on the team or has a pending invite.',
    'Esta persona ya está en el equipo o tiene una invitación pendiente.',
  ],
  'team.send': ['Enviar convite', 'Send invite', 'Enviar invitación'],
  'team.sent': ['Convite enviado para {email}', 'Invite sent to {email}', 'Invitación enviada a {email}'],
  'team.sentSub': ['Vale por 1 dia.', 'Valid for 1 day.', 'Vale por 1 día.'],
  'team.seats': ['Vagas de funcionários', 'Staff seats', 'Plazas de personal'],
  'team.seatsActive': ['{n} ocupadas por pessoas, contando o dono', '{n} taken by people, including the owner', '{n} ocupadas por personas, contando al dueño'],
  'team.seatsPending': ['{n} por convites pendentes', '{n} by pending invites', '{n} por invitaciones pendientes'],
  'team.seatsFree': ['{n} livres', '{n} free', '{n} libres'],
  'team.seatsNote': [
    'Limite definido pela Groone. Convites pendentes ocupam vaga.',
    'Limit set by Groone. Pending invites take a seat.',
    'Límite definido por Groone. Las invitaciones pendientes ocupan plaza.',
  ],
  'team.members': ['Membros', 'Members', 'Miembros'],
  'team.pending': ['Convites pendentes', 'Pending invites', 'Invitaciones pendientes'],
  'team.roles': ['Papéis', 'Roles', 'Roles'],
  'team.filter': ['Filtrar…', 'Filter…', 'Filtrar…'],
  'team.filterLabel': ['Filtrar membros', 'Filter members', 'Filtrar miembros'],
  'team.noMatch': ['Ninguém na equipe combina com “{q}”.', 'Nobody on the team matches “{q}”.', 'Nadie del equipo coincide con “{q}”.'],
  'team.clearFilter': ['Limpar filtro', 'Clear filter', 'Limpiar filtro'],
  'team.person': ['Pessoa', 'Person', 'Persona'],
  'team.role': ['Papel', 'Role', 'Rol'],
  'team.since': ['Desde', 'Since', 'Desde'],
  'team.status': ['Status', 'Status', 'Estado'],
  'team.actions': ['Ações', 'Actions', 'Acciones'],
  'team.actionsFor': ['Ações para {name}', 'Actions for {name}', 'Acciones para {name}'],
  'team.owner': ['Dono', 'Owner', 'Dueño'],
  'team.ownerLock': [
    'O dono só muda pelo painel interno da Groone',
    'The owner only changes through the Groone internal panel',
    'El dueño solo cambia desde el panel interno de Groone',
  ],
  'team.you': ['você', 'you', 'tú'],
  'team.active': ['Ativo', 'Active', 'Activo'],
  'team.suspended': ['Suspenso', 'Suspended', 'Suspendido'],
  'team.changeRole': ['Alterar papel', 'Change role', 'Cambiar rol'],
  'team.changeRoleDesc': [
    'O papel novo vale na próxima ação de {name}.',
    'The new role applies on {name}\'s next action.',
    'El rol nuevo vale en la próxima acción de {name}.',
  ],
  'team.suspend': ['Suspender acesso', 'Suspend access', 'Suspender acceso'],
  'team.reactivate': ['Reativar acesso', 'Reactivate access', 'Reactivar acceso'],
  'team.remove': ['Remover da equipe', 'Remove from team', 'Quitar del equipo'],
  'team.removeTitle': ['Remover {name}?', 'Remove {name}?', '¿Quitar a {name}?'],
  'team.removeDesc': [
    '{name} perde o acesso na hora, as chaves de API dessa pessoa são revogadas e uma vaga é liberada. Para voltar, precisa de um convite novo.',
    '{name} loses access right away, their API keys are revoked and a seat is freed. Coming back needs a new invite.',
    '{name} pierde el acceso al instante, sus claves de API se revocan y se libera una plaza. Para volver necesita una invitación nueva.',
  ],
  'team.removed': ['{name} saiu da equipe', '{name} left the team', '{name} salió del equipo'],
  'team.removedSub': ['Uma vaga foi liberada.', 'A seat was freed.', 'Se liberó una plaza.'],
  'team.updated': ['Equipe atualizada', 'Team updated', 'Equipo actualizado'],
  'team.noInvites': ['Nenhum convite esperando resposta', 'No invites waiting for an answer', 'Ninguna invitación esperando respuesta'],
  'team.noInvitesSub': [
    'Os convites que você enviar aparecem aqui até serem aceitos.',
    'Invites you send show up here until accepted.',
    'Las invitaciones que envíes aparecen aquí hasta que se acepten.',
  ],
  'team.validity': ['Validade', 'Validity', 'Validez'],
  'team.expiresIn': ['Vence {when}', 'Expires {when}', 'Vence {when}'],
  'team.resend': ['Reenviar', 'Resend', 'Reenviar'],
  'team.resent': ['Convite reenviado para {email}', 'Invite resent to {email}', 'Invitación reenviada a {email}'],
  'team.cancelInvite': ['Cancelar', 'Cancel', 'Cancelar'],
  'team.canceled': ['Convite para {email} cancelado', 'Invite to {email} canceled', 'Invitación a {email} cancelada'],
  'roles.title': ['Papéis e permissões', 'Roles and permissions', 'Roles y permisos'],
  'roles.sub': [
    'O papel de cada pessoa da {company} e o que cada papel pode fazer.',
    "Each person's role at {company} and what each role can do.",
    'El rol de cada persona de {company} y lo que puede hacer cada rol.',
  ],
  'roles.assign': ['Atribuição de papéis', 'Role assignment', 'Asignación de roles'],
  'roles.assignDesc': [
    'Troque o papel de uma pessoa aqui. Para dar ou tirar uma permissão só dela, abra as permissões diretas.',
    "Change a person's role here. To grant or remove a permission for just them, open their direct permissions.",
    'Cambia el rol de una persona aquí. Para dar o quitar un permiso solo a ella, abre sus permisos directos.',
  ],
  'roles.rolesDesc': [
    'Cada papel reúne permissões. Os predefinidos valem para todas as Empresas; crie os seus a partir do catálogo.',
    'Each role groups permissions. Predefined ones apply to every company; create your own from the catalog.',
    'Cada rol agrupa permisos. Los predefinidos valen para todas las empresas; crea los tuyos a partir del catálogo.',
  ],
  'roles.roleFor': ['Papel de {name}', 'Role of {name}', 'Rol de {name}'],
  'roles.direct': ['Ajustar', 'Adjust', 'Ajustar'],
  'roles.assigned': ['{name} agora tem o novo papel', '{name} now has the new role', '{name} ahora tiene el nuevo rol'],
  'roles.noMembers': ['Ninguém na equipe ainda.', 'No one on the team yet.', 'Nadie en el equipo todavía.'],
  'role.kind': ['Tipo', 'Type', 'Tipo'],
  'role.system': ['Predefinido', 'Predefined', 'Predefinido'],
  'role.custom': ['Personalizado', 'Custom', 'Personalizado'],
  'role.can': ['O que pode fazer', 'What it can do', 'Qué puede hacer'],
  'role.people': ['Pessoas', 'People', 'Personas'],
  'role.sites': ['Sites', 'Sites', 'Sitios'],
  'role.scope.all': ['Todos os sites', 'All sites', 'Todos los sitios'],
  'role.scope.assigned': ['Só os sites atribuídos', 'Only assigned sites', 'Solo los sitios asignados'],
  'role.perms': ['{n} permissões', '{n} permissions', '{n} permisos'],
  'role.allPerms': ['Todas as permissões', 'All permissions', 'Todos los permisos'],
  'role.create': ['Criar papel', 'Create role', 'Crear rol'],
  'role.edit': ['Editar papel', 'Edit role', 'Editar rol'],
  'role.delete': ['Apagar papel', 'Delete role', 'Borrar rol'],
  'role.deleteTitle': ['Apagar o papel {name}?', 'Delete the role {name}?', '¿Borrar el rol {name}?'],
  'role.deleteDesc': [
    'Só dá para apagar um papel que ninguém usa. Isso não pode ser desfeito.',
    'Only a role nobody uses can be deleted. This cannot be undone.',
    'Solo se puede borrar un rol que nadie use. No se puede deshacer.',
  ],
  'role.name': ['Nome do papel', 'Role name', 'Nombre del rol'],
  'role.scopeTitle': ['Sites que a pessoa vê', 'Sites the person sees', 'Sitios que ve la persona'],
  'role.scopeAssignedHint': [
    'Os sites de cada pessoa são escolhidos na página dela.',
    'Each person\'s sites are chosen on their page.',
    'Los sitios de cada persona se eligen en su página.',
  ],
  'role.permsTitle': ['Permissões', 'Permissions', 'Permisos'],
  'role.permsHint': [
    'Você só pode dar permissões que você mesmo tem.',
    'You can only give permissions you have yourself.',
    'Solo puedes dar permisos que tú mismo tienes.',
  ],
  'role.saved': ['Papel salvo', 'Role saved', 'Rol guardado'],
  'role.deleted': ['Papel apagado', 'Role deleted', 'Rol borrado'],
  'role.readonly': ['Papéis predefinidos não mudam.', 'Predefined roles do not change.', 'Los roles predefinidos no cambian.'],
  'perm.group.company': ['Empresa', 'Company', 'Empresa'],
  'perm.group.team': ['Equipe', 'Team', 'Equipo'],
  'perm.group.roles': ['Papéis e permissões', 'Roles and permissions', 'Roles y permisos'],
  'perm.group.network': ['Networks do GAM', 'GAM networks', 'Networks de GAM'],
  'perm.group.sites': ['Sites', 'Sites', 'Sitios'],
  'perm.group.reports': ['Relatórios', 'Reports', 'Informes'],
  'perm.group.audit': ['Histórico', 'History', 'Historial'],
  'perm.group.api': ['API', 'API', 'API'],
  'common.confirm': ['Confirmar', 'Confirm', 'Confirmar'],
  'common.close': ['Fechar', 'Close', 'Cerrar'],
  'common.create': ['Criar', 'Create', 'Crear'],
  'common.edit': ['Editar', 'Edit', 'Editar'],
  'common.delete': ['Apagar', 'Delete', 'Borrar'],
  'common.remove': ['Remover', 'Remove', 'Quitar'],

  'member.back': ['Equipe', 'Team', 'Equipo'],
  'member.notFound': ['Essa pessoa não está na equipe.', 'This person is not on the team.', 'Esta persona no está en el equipo.'],
  'member.access': ['Acesso', 'Access', 'Acceso'],
  'member.accessDesc': [
    'Papel e status mudam na lista da equipe.',
    'Role and status change on the team list.',
    'El rol y el estado cambian en la lista del equipo.',
  ],
  'member.sites': ['Sites atribuídos', 'Assigned sites', 'Sitios asignados'],
  'member.sitesDesc': [
    'Com o papel {role}, a pessoa vê só os sites marcados aqui.',
    'With the {role} role, the person only sees the sites checked here.',
    'Con el rol {role}, la persona solo ve los sitios marcados aquí.',
  ],
  'member.sitesAll': [
    'O papel {role} vê todos os sites da Empresa, sem precisar atribuir.',
    'The {role} role sees every company site, no assignment needed.',
    'El rol {role} ve todos los sitios de la empresa, sin asignar.',
  ],
  'member.sitesOwner': ['O dono vê todos os sites.', 'The owner sees every site.', 'El dueño ve todos los sitios.'],
  'member.noSites': [
    'Nenhum site importado ainda. Os sites chegam com a network do GAM.',
    'No sites imported yet. Sites arrive with the GAM network.',
    'Aún no hay sitios importados. Llegan con la network de GAM.',
  ],
  'member.sitesCount': ['{n} de {total} marcados', '{n} of {total} checked', '{n} de {total} marcados'],
  'member.selectAll': ['Marcar todos', 'Check all', 'Marcar todos'],
  'member.selectNone': ['Desmarcar todos', 'Uncheck all', 'Desmarcar todos'],
  'member.sitesSaved': ['Sites atualizados', 'Sites updated', 'Sitios actualizados'],
  'member.direct': ['Permissões diretas', 'Direct permissions', 'Permisos directos'],
  'member.directDesc': [
    'Somam ou tiram permissões do papel só para esta pessoa. Com validade, somem sozinhas na data.',
    'Add or remove role permissions for this person only. With an expiry, they go away on that date.',
    'Suman o quitan permisos del rol solo para esta persona. Con vencimiento, desaparecen solas en la fecha.',
  ],
  'member.noDirect': ['Nenhuma permissão direta.', 'No direct permissions.', 'Ningún permiso directo.'],
  'member.add': ['Adicionar permissão', 'Add permission', 'Agregar permiso'],
  'member.permission': ['Permissão', 'Permission', 'Permiso'],
  'member.effect': ['Efeito', 'Effect', 'Efecto'],
  'member.allow': ['Dar', 'Grant', 'Dar'],
  'member.deny': ['Tirar', 'Revoke', 'Quitar'],
  'member.until': ['Até', 'Until', 'Hasta'],
  'member.forever': ['Sem validade', 'No expiry', 'Sin vencimiento'],
  'member.directSaved': ['Permissões salvas', 'Permissions saved', 'Permisos guardados'],
  'member.directReadonly': [
    'Só quem tem a permissão de dar permissões muda esta lista.',
    'Only people allowed to grant permissions change this list.',
    'Solo quien puede dar permisos cambia esta lista.',
  ],
  'member.removeRow': ['Tirar da lista', 'Remove from list', 'Quitar de la lista'],
  'member.pastDate': ['A data precisa ser no futuro.', 'The date must be in the future.', 'La fecha tiene que ser futura.'],
  'member.duplicate': ['Permissão repetida na lista.', 'Permission repeated in the list.', 'Permiso repetido en la lista.'],

  // Networks
  'net.sub': [
    'As networks do Google Ad Manager que a Groone lê para trazer sites, ad units e, em breve, métricas.',
    'The Google Ad Manager networks Groone reads to bring sites, ad units and, soon, metrics.',
    'Las networks de Google Ad Manager que Groone lee para traer sitios, ad units y, pronto, métricas.',
  ],
  'net.connect': ['Conectar network', 'Connect network', 'Conectar network'],
  'net.col.code': ['Network code', 'Network code', 'Network code'],
  'net.col.type': ['Conexão', 'Connection', 'Conexión'],
  'net.type.mcm': ['MCM da Groone', 'Groone MCM', 'MCM de Groone'],
  'net.type.service_account': ['Conta de serviço', 'Service account', 'Cuenta de servicio'],
  'net.retest': ['Testar de novo', 'Test again', 'Probar de nuevo'],
  'net.reimport': ['Reimportar sites', 'Reimport sites', 'Reimportar sitios'],
  'net.reimportQueued': [
    'Reimportação pedida. Os sites atualizam em alguns minutos.',
    'Reimport requested. Sites update in a few minutes.',
    'Reimportación pedida. Los sitios se actualizan en unos minutos.',
  ],
  'net.history': ['Histórico de importações', 'Import history', 'Historial de importaciones'],
  'net.historyEmpty': ['Nenhuma importação ainda.', 'No imports yet.', 'Aún no hay importaciones.'],
  'net.disconnect': ['Desconectar', 'Disconnect', 'Desconectar'],
  'net.disconnectTitle': ['Desconectar {name}?', 'Disconnect {name}?', '¿Desconectar {name}?'],
  'net.disconnectDesc': [
    'A Groone para de ler essa network. Sites e ad units ficam arquivados no Avant. Para voltar, conecte de novo.',
    'Groone stops reading this network. Sites and ad units stay archived in Avant. To come back, connect again.',
    'Groone deja de leer esta network. Sitios y ad units quedan archivados en Avant. Para volver, conecta de nuevo.',
  ],
  'net.disconnected': ['{name} foi desconectada', '{name} was disconnected', '{name} fue desconectada'],
  'net.empty': ['Nenhuma network conectada', 'No network connected', 'Ninguna network conectada'],
  'net.emptySub': [
    'Quem aceitou o convite de MCM da Groone aparece aqui sozinho. Para uma network sua, use Conectar network.',
    'If you accepted the Groone MCM invite, it shows up here on its own. For your own network, use Connect network.',
    'Si aceptaste la invitación MCM de Groone, aparece aquí sola. Para una network tuya, usa Conectar network.',
  ],
  'net.lostRetest': [
    'Adicione de novo a conta de serviço como administradora no Ad Manager e teste a conexão.',
    'Add the service account as an administrator in Ad Manager again and test the connection.',
    'Vuelve a agregar la cuenta de servicio como administradora en Ad Manager y prueba la conexión.',
  ],
  'net.run.test': ['Teste de acesso', 'Access test', 'Prueba de acceso'],
  'net.run.sites': ['Sites', 'Sites', 'Sitios'],
  'net.run.ad_units': ['Ad units', 'Ad units', 'Ad units'],
  'net.run.running': ['Rodando', 'Running', 'En curso'],
  'net.run.ok': ['Concluída', 'Done', 'Completada'],
  'net.run.failed': ['Falhou', 'Failed', 'Falló'],
  'net.run.counts': ['{created} novos, {updated} atualizados, {archived} arquivados', '{created} new, {updated} updated, {archived} archived', '{created} nuevos, {updated} actualizados, {archived} archivados'],
  'net.testing': ['Testando conexão', 'Testing connection', 'Probando conexión'],

  // Conectar network
  'wiz.title': ['Conectar uma network', 'Connect a network', 'Conectar una network'],
  'wiz.sub': [
    'Para uma network sua, fora do MCM da Groone. Leva uns 2 minutos.',
    'For your own network, outside the Groone MCM. Takes about 2 minutes.',
    'Para una network tuya, fuera del MCM de Groone. Toma unos 2 minutos.',
  ],
  'wiz.s1': ['Copie o e-mail da conta de serviço da Groone', 'Copy the Groone service account email', 'Copia el correo de la cuenta de servicio de Groone'],
  'wiz.s1Sub': [
    'Uma conta só da Groone, usada para ler a sua network. Ela não tem acesso à sua conta do Google.',
    'A Groone-only account used to read your network. It has no access to your Google account.',
    'Una cuenta solo de Groone, usada para leer tu network. No tiene acceso a tu cuenta de Google.',
  ],
  'wiz.copy': ['Copiar', 'Copy', 'Copiar'],
  'wiz.copied': ['Copiado', 'Copied', 'Copiado'],
  'wiz.copyLabel': ['Copiar e-mail da conta de serviço', 'Copy service account email', 'Copiar correo de la cuenta de servicio'],
  'wiz.copyManual': ['E-mail selecionado. Copie com Ctrl+C.', 'Email selected. Copy with Ctrl+C.', 'Correo seleccionado. Copia con Ctrl+C.'],
  'wiz.s2': ['Adicione como administrador no Google Ad Manager', 'Add it as an administrator in Google Ad Manager', 'Agrégala como administradora en Google Ad Manager'],
  'wiz.s2Sub': [
    'No Ad Manager, abra Administrador › Acesso e autorização › Usuários › Novo usuário. Cole o e-mail e escolha o papel Administrador.',
    'In Ad Manager, open Admin › Access & authorization › Users › New user. Paste the email and pick the Administrator role.',
    'En Ad Manager, abre Administrador › Acceso y autorización › Usuarios › Nuevo usuario. Pega el correo y elige el rol Administrador.',
  ],
  'wiz.s3': ['Informe o network code e teste', 'Enter the network code and test', 'Escribe el network code y prueba'],
  'wiz.s3Sub': [
    'O network code fica no topo do Ad Manager, ao lado do nome da network.',
    'The network code is at the top of Ad Manager, next to the network name.',
    'El network code está arriba en Ad Manager, junto al nombre de la network.',
  ],
  'wiz.codeError': ['O network code tem só números, de 4 a 20 dígitos.', 'The network code is digits only, 4 to 20 of them.', 'El network code tiene solo números, de 4 a 20 dígitos.'],
  'wiz.test': ['Testar conexão', 'Test connection', 'Probar conexión'],
  'wiz.result': ['Resultado do teste', 'Test result', 'Resultado de la prueba'],
  'wiz.resultEmpty': [
    'Depois de adicionar a conta de serviço, clique em Testar conexão. Sites e ad units chegam sozinhos quando tudo der certo.',
    'After adding the service account, click Test connection. Sites and ad units arrive on their own when it works.',
    'Después de agregar la cuenta de servicio, haz clic en Probar conexión. Sitios y ad units llegan solos cuando todo sale bien.',
  ],
  'wiz.c1': ['Network {code} encontrada no Ad Manager', 'Network {code} found in Ad Manager', 'Network {code} encontrada en Ad Manager'],
  'wiz.c2': ['Conta de serviço da Groone é administradora', 'Groone service account is an administrator', 'La cuenta de servicio de Groone es administradora'],
  'wiz.c3': ['Sites e ad units importados', 'Sites and ad units imported', 'Sitios y ad units importados'],
  'wiz.c3Done': ['{sites} sites e {units} ad units.', '{sites} sites and {units} ad units.', '{sites} sitios y {units} ad units.'],
  'wiz.slow': [
    'Está demorando mais que o normal. Pode sair desta tela: o resultado aparece em Networks do GAM.',
    'This is taking longer than usual. You can leave: the result shows up in GAM networks.',
    'Está tardando más de lo normal. Puedes salir: el resultado aparece en Networks de GAM.',
  ],
  'wiz.see': ['Ver networks', 'See networks', 'Ver networks'],
  'wiz.retry': ['Testar de novo', 'Test again', 'Probar de nuevo'],

  // Sites
  'sites.title': ['Sites', 'Sites', 'Sitios'],
  'sites.sub': [
    'Os sites e ad units que chegam das networks do GAM, mais os cadastrados à mão. A importação roda sozinha a cada 6 horas.',
    'The sites and ad units that come from GAM networks, plus the ones added by hand. Import runs on its own every 6 hours.',
    'Los sitios y ad units que llegan de las networks de GAM, más los registrados a mano. La importación corre sola cada 6 horas.',
  ],
  'sites.tab.sites': ['Sites', 'Sites', 'Sitios'],
  'sites.tab.unlinked': ['Ad units sem site', 'Ad units without a site', 'Ad units sin sitio'],
  'sites.search': ['Buscar domínio…', 'Search domain…', 'Buscar dominio…'],
  'sites.searchLabel': ['Buscar site pelo domínio', 'Search site by domain', 'Buscar sitio por dominio'],
  'sites.allNetworks': ['Todas as networks', 'All networks', 'Todas las networks'],
  'sites.archived': ['Mostrar arquivados', 'Show archived', 'Mostrar archivados'],
  'sites.col.site': ['Site', 'Site', 'Sitio'],
  'sites.col.network': ['Network', 'Network', 'Network'],
  'sites.col.approval': ['Aprovação no Ad Manager', 'Ad Manager approval', 'Aprobación en Ad Manager'],
  'sites.col.units': ['Ad units', 'Ad units', 'Ad units'],
  'sites.col.synced': ['Importado', 'Imported', 'Importado'],
  'sites.approval.APPROVED': ['Aprovado', 'Approved', 'Aprobado'],
  'sites.approval.DISAPPROVED': ['Reprovado pelo Google', 'Disapproved by Google', 'Rechazado por Google'],
  'sites.approval.DRAFT': ['Rascunho', 'Draft', 'Borrador'],
  'sites.approval.review': ['Em análise pelo Google', 'Under Google review', 'En revisión por Google'],
  'sites.approval.none': ['Sem informação', 'No information', 'Sin información'],
  'sites.archivedBadge': ['Arquivado', 'Archived', 'Archivado'],
  'sites.empty': ['Nenhum site ainda', 'No sites yet', 'Aún no hay sitios'],
  'sites.emptySub': [
    'Os sites aparecem aqui depois que uma network do GAM conecta e a importação roda.',
    'Sites show up here after a GAM network connects and the import runs.',
    'Los sitios aparecen aquí después de que una network de GAM se conecta y corre la importación.',
  ],
  'sites.emptyAssigned': [
    'Nenhum site foi atribuído a você. Peça a quem gerencia a equipe.',
    'No site has been assigned to you. Ask your team manager.',
    'No se te asignó ningún sitio. Pídelo a quien gestiona el equipo.',
  ],
  'sites.add': ['Adicionar site', 'Add site', 'Agregar sitio'],
  'sites.addDesc': [
    'Cadastre pelo domínio. O site fica aguardando o GAM e se junta sozinho ao site com o mesmo domínio na próxima importação.',
    'Add it by domain. The site waits for GAM and merges on its own with the site of the same domain on the next import.',
    'Regístralo por el dominio. El sitio queda esperando a GAM y se une solo al sitio con el mismo dominio en la próxima importación.',
  ],
  'sites.domain': ['Domínio', 'Domain', 'Dominio'],
  'sites.added': ['{domain} cadastrado, aguardando o GAM', '{domain} added, waiting for GAM', '{domain} registrado, esperando a GAM'],
  'sites.awaiting': ['Aguardando GAM', 'Waiting for GAM', 'Esperando a GAM'],
  'site.awaitingDesc': [
    'Este site foi cadastrado à mão. Quando a importação do GAM trouxer um site com o mesmo domínio, os dois viram um só e os ad units aparecem aqui.',
    'This site was added by hand. When the GAM import brings a site with the same domain, they become one and the ad units show up here.',
    'Este sitio se registró a mano. Cuando la importación de GAM traiga un sitio con el mismo dominio, se vuelven uno y los ad units aparecen aquí.',
  ],
  'site.remove': ['Remover site', 'Remove site', 'Quitar sitio'],
  'site.removeTitle': ['Remover {domain}?', 'Remove {domain}?', '¿Quitar {domain}?'],
  'site.removeDesc': [
    'O cadastro sai do Avant, junto com as atribuições. Você pode cadastrar de novo depois.',
    'The entry leaves Avant, along with its assignments. You can add it again later.',
    'El registro sale de Avant, junto con las asignaciones. Puedes registrarlo de nuevo después.',
  ],
  'site.removed': ['{domain} removido', '{domain} removed', '{domain} quitado'],
  'sites.noMatch': ['Nenhum site combina com o filtro.', 'No site matches the filter.', 'Ningún sitio coincide con el filtro.'],
  'sites.unlinkedSub': [
    'Ad units que a importação não conseguiu ligar a um site pelo nome. Ligue à mão para entrarem nas métricas do site certo.',
    'Ad units the import could not match to a site by name. Link them by hand so they count for the right site.',
    'Ad units que la importación no pudo vincular a un sitio por el nombre. Vincúlalos a mano para que cuenten en el sitio correcto.',
  ],
  'sites.unlinkedEmpty': ['Todos os ad units estão ligados a um site.', 'Every ad unit is linked to a site.', 'Todos los ad units están vinculados a un sitio.'],
  'sites.linkTo': ['Ligar a um site', 'Link to a site', 'Vincular a un sitio'],
  'sites.choose': ['Escolha o site', 'Choose the site', 'Elige el sitio'],
  'sites.linked': ['{unit} ligado a {site}', '{unit} linked to {site}', '{unit} vinculado a {site}'],
  'site.back': ['Sites', 'Sites', 'Sitios'],
  'site.notFound': ['Este site não existe ou não está atribuído a você.', 'This site does not exist or is not assigned to you.', 'Este sitio no existe o no está asignado a ti.'],
  'site.units': ['Ad units', 'Ad units', 'Ad units'],
  'site.unitsDesc': [
    'A importação liga cada ad unit ao site pelo nome. O que foi ligado à mão não muda na próxima importação.',
    'The import links each ad unit to its site by name. What was linked by hand stays on the next import.',
    'La importación vincula cada ad unit al sitio por el nombre. Lo vinculado a mano no cambia en la próxima importación.',
  ],
  'site.noUnits': ['Nenhum ad unit ligado a este site.', 'No ad unit linked to this site.', 'Ningún ad unit vinculado a este sitio.'],
  'site.manual': ['Ligado à mão', 'Linked by hand', 'Vinculado a mano'],
  'site.move': ['Ligar a outro site', 'Link to another site', 'Vincular a otro sitio'],
  'site.unlink': ['Desligar deste site', 'Unlink from this site', 'Desvincular de este sitio'],
  'site.auto': ['Voltar ao automático', 'Back to automatic', 'Volver a automático'],
  'site.autoDone': ['Na próxima importação, {unit} volta a ser ligado pelo nome.', 'On the next import, {unit} is linked by name again.', 'En la próxima importación, {unit} vuelve a vincularse por el nombre.'],
  'site.unlinked': ['{unit} desligado do site', '{unit} unlinked from the site', '{unit} desvinculado del sitio'],
  'site.childrenNote': ['Os ad units filhos vão junto.', 'Child ad units go along.', 'Los ad units hijos van juntos.'],
  'site.people': ['Quem vê este site', 'Who sees this site', 'Quién ve este sitio'],
  'site.peopleDesc': [
    'Pessoas com papel de todos os sites e as que receberam este site na página delas.',
    'People with an all-sites role and those given this site on their page.',
    'Personas con rol de todos los sitios y las que recibieron este sitio en su página.',
  ],
  'site.via.all': ['Todos os sites pelo papel', 'All sites by role', 'Todos los sitios por rol'],
  'site.via.assigned': ['Atribuído', 'Assigned', 'Asignado'],
  'site.code': ['Código', 'Code', 'Código'],

  // Comum
  'common.save': ['Salvar', 'Save', 'Guardar'],
  'common.saved': ['Salvo', 'Saved', 'Guardado'],
  'common.cancel': ['Cancelar', 'Cancel', 'Cancelar'],
  'common.loading': ['Carregando…', 'Loading…', 'Cargando…'],
  'common.retry': ['Tentar de novo', 'Try again', 'Intentar de nuevo'],
  'common.never': ['Nunca', 'Never', 'Nunca'],
  'common.notFound': ['Página não encontrada', 'Page not found', 'Página no encontrada'],
  'common.notFoundSub': [
    'O endereço pode estar errado ou a página não existe mais.',
    'The address may be wrong or the page no longer exists.',
    'La dirección puede estar mal o la página ya no existe.',
  ],
  'common.goHome': ['Ir para o início', 'Go home', 'Ir al inicio'],
  'common.loadFailed': ['Não deu para carregar.', 'Could not load.', 'No se pudo cargar.'],

  // Minha conta
  'acc.title': ['Minha conta', 'My account', 'Mi cuenta'],
  'acc.sub': [
    'Sua senha, o 2FA, o login com Google, onde você está conectado e as suas chaves de API.',
    'Your password, 2FA, Google sign-in, where you are signed in and your API keys.',
    'Tu contraseña, el 2FA, el inicio con Google, dónde tienes sesión y tus claves de API.',
  ],
  'acc.security': ['Segurança', 'Security', 'Seguridad'],
  'acc.access': ['Acesso', 'Access', 'Acceso'],
  'acc.setupTitle': ['Configure o 2FA para continuar', 'Set up 2FA to continue', 'Configura el 2FA para continuar'],
  'acc.setupBody': [
    'A equipe Groone usa o painel sempre com o 2FA. Ative abaixo e o resto do painel aparece.',
    'The Groone team always uses the panel with 2FA. Turn it on below and the rest of the panel shows up.',
    'El equipo de Groone usa el panel siempre con 2FA. Actívalo abajo y aparecerá el resto del panel.',
  ],
  'pw.title': ['Senha', 'Password', 'Contraseña'],
  'pw.desc': [
    'Ao trocar, você continua conectado aqui e as outras sessões são encerradas.',
    'When you change it, you stay signed in here and other sessions are ended.',
    'Al cambiarla, sigues con sesión aquí y las demás sesiones se cierran.',
  ],
  'pw.current': ['Senha atual', 'Current password', 'Contraseña actual'],
  'pw.new': ['Nova senha', 'New password', 'Nueva contraseña'],
  'pw.wrong': ['Senha atual incorreta.', 'Current password is wrong.', 'Contraseña actual incorrecta.'],
  'pw.submit': ['Trocar senha', 'Change password', 'Cambiar contraseña'],
  'pw.done': [
    'Senha trocada. As outras sessões foram encerradas.',
    'Password changed. Other sessions were ended.',
    'Contraseña cambiada. Las demás sesiones se cerraron.',
  ],
  'mfa2.title': ['Verificação em duas etapas (2FA)', 'Two-step verification (2FA)', 'Verificación en dos pasos (2FA)'],
  'mfa2.descOff': [
    'Além da senha, o login pede um código do app autenticador (Google Authenticator, 1Password, Authy).',
    'Besides the password, sign-in asks for a code from an authenticator app (Google Authenticator, 1Password, Authy).',
    'Además de la contraseña, el inicio pide un código de una app autenticadora (Google Authenticator, 1Password, Authy).',
  ],
  'mfa2.descOn': [
    'Ativo. O login pede o código do app depois da senha.',
    'On. Sign-in asks for the app code after the password.',
    'Activo. El inicio pide el código de la app después de la contraseña.',
  ],
  'mfa2.on': ['Ativo', 'On', 'Activo'],
  'mfa2.off': ['Desligado', 'Off', 'Desactivado'],
  'mfa2.enable': ['Ativar 2FA', 'Turn on 2FA', 'Activar 2FA'],
  'mfa2.disable': ['Desligar 2FA', 'Turn off 2FA', 'Desactivar 2FA'],
  'mfa2.newCodes': ['Gerar novos códigos de recuperação', 'Generate new recovery codes', 'Generar nuevos códigos de recuperación'],
  'mfa2.staffNote': [
    'Na equipe Groone o 2FA não pode ser desligado.',
    'On the Groone team, 2FA cannot be turned off.',
    'En el equipo de Groone el 2FA no se puede desactivar.',
  ],
  'mfa2.step1': ['1. Leia o QR code no app autenticador', '1. Scan the QR code with the authenticator app', '1. Escanea el código QR con la app autenticadora'],
  'mfa2.qrAlt': ['QR code para o app autenticador', 'QR code for the authenticator app', 'Código QR para la app autenticadora'],
  'mfa2.manual': ['Sem câmera? Digite esta chave no app:', 'No camera? Type this key in the app:', '¿Sin cámara? Escribe esta clave en la app:'],
  'mfa2.step2': ['2. Digite o código de 6 dígitos que o app mostra', '2. Enter the 6-digit code the app shows', '2. Escribe el código de 6 dígitos que muestra la app'],
  'mfa2.confirm': ['Ativar', 'Turn on', 'Activar'],
  'mfa2.enabled': ['2FA ativado.', '2FA turned on.', '2FA activado.'],
  'mfa2.disabled': ['2FA desligado.', '2FA turned off.', '2FA desactivado.'],
  'mfa2.codeAsk': [
    'Digite um código do app ou um código de recuperação.',
    'Enter an app code or a recovery code.',
    'Escribe un código de la app o un código de recuperación.',
  ],
  'mfa2.disableDesc': [
    'O login volta a pedir só a senha. Os códigos de recuperação deixam de valer.',
    'Sign-in will ask only for the password again. Recovery codes stop working.',
    'El inicio volverá a pedir solo la contraseña. Los códigos de recuperación dejan de valer.',
  ],
  'mfa2.newCodesDesc': [
    'Os códigos antigos deixam de valer assim que os novos aparecem.',
    'Old codes stop working as soon as the new ones appear.',
    'Los códigos antiguos dejan de valer en cuanto aparecen los nuevos.',
  ],
  'mfa2.generate': ['Gerar', 'Generate', 'Generar'],
  'rec.title': ['Guarde seus códigos de recuperação', 'Save your recovery codes', 'Guarda tus códigos de recuperación'],
  'rec.desc': [
    'Cada código entra uma vez, se você perder o celular. Eles não aparecem de novo: baixe ou copie agora.',
    'Each code works once, if you lose your phone. They will not be shown again: download or copy them now.',
    'Cada código sirve una vez, si pierdes el móvil. No se mostrarán de nuevo: descárgalos o cópialos ahora.',
  ],
  'rec.download': ['Baixar .txt', 'Download .txt', 'Descargar .txt'],
  'rec.fileTitle': ['Avant: códigos de recuperação de {email}', 'Avant: recovery codes for {email}', 'Avant: códigos de recuperación de {email}'],
  'rec.done': ['Já guardei', 'I saved them', 'Ya los guardé'],
  'g.title': ['Login com Google', 'Google sign-in', 'Inicio con Google'],
  'g.descOff': [
    'Ligue a sua conta Google com o mesmo e-mail ({email}) para entrar sem digitar a senha.',
    'Link your Google account with the same email ({email}) to sign in without typing the password.',
    'Vincula tu cuenta de Google con el mismo correo ({email}) para entrar sin escribir la contraseña.',
  ],
  'g.descOn': [
    'Ligado. Você pode entrar com o Google ou com e-mail e senha.',
    'Linked. You can sign in with Google or with email and password.',
    'Vinculado. Puedes entrar con Google o con correo y contraseña.',
  ],
  'g.unavailable': [
    'O login com Google ainda não está disponível.',
    'Google sign-in is not available yet.',
    'El inicio con Google aún no está disponible.',
  ],
  'g.linked': ['Ligado', 'Linked', 'Vinculado'],
  'g.link': ['Ligar conta Google', 'Link Google account', 'Vincular cuenta de Google'],
  'g.unlink': ['Desligar', 'Unlink', 'Desvincular'],
  'g.unlinkTitle': ['Desligar o Google?', 'Unlink Google?', '¿Desvincular Google?'],
  'g.unlinkDesc': [
    'Você passa a entrar só com e-mail e senha. Dá para ligar de novo quando quiser.',
    'You will sign in only with email and password. You can link it again anytime.',
    'Entrarás solo con correo y contraseña. Puedes vincularla de nuevo cuando quieras.',
  ],
  'g.done': ['Conta Google ligada.', 'Google account linked.', 'Cuenta de Google vinculada.'],
  'g.removed': ['Conta Google desligada.', 'Google account unlinked.', 'Cuenta de Google desvinculada.'],
  'ses.title': ['Sessões', 'Sessions', 'Sesiones'],
  'ses.desc': [
    'Navegadores onde você está conectado. Encerre os que não reconhece e troque a senha.',
    'Browsers where you are signed in. End the ones you do not recognize and change your password.',
    'Navegadores donde tienes sesión. Cierra los que no reconozcas y cambia la contraseña.',
  ],
  'ses.device': ['Aparelho', 'Device', 'Dispositivo'],
  'ses.unknown': ['Navegador desconhecido', 'Unknown browser', 'Navegador desconocido'],
  'ses.on': ['{browser} no {os}', '{browser} on {os}', '{browser} en {os}'],
  'ses.ip': ['IP', 'IP', 'IP'],
  'ses.lastSeen': ['Último uso', 'Last active', 'Último uso'],
  'ses.started': ['Entrou em', 'Signed in', 'Inició'],
  'ses.current': ['Esta sessão', 'This session', 'Esta sesión'],
  'ses.end': ['Encerrar', 'End', 'Cerrar'],
  'ses.endLabel': ['Encerrar a sessão de {device}', 'End the session on {device}', 'Cerrar la sesión de {device}'],
  'ses.endOthers': ['Encerrar as outras', 'End the others', 'Cerrar las demás'],
  'ses.ended': ['Sessão encerrada.', 'Session ended.', 'Sesión cerrada.'],
  'ses.endedN': ['{n} sessões encerradas.', '{n} sessions ended.', '{n} sesiones cerradas.'],
  'ses.onlyThis': ['Só esta sessão está aberta.', 'Only this session is open.', 'Solo esta sesión está abierta.'],
  'key.title': ['Chaves de API', 'API keys', 'Claves de API'],
  'key.desc': [
    'Para sistemas acessarem a API do Avant em nome desta Empresa ({company}). Cada chave tem só as permissões que você escolher.',
    'For systems to use the Avant API on behalf of this company ({company}). Each key has only the permissions you choose.',
    'Para que sistemas usen la API de Avant en nombre de esta empresa ({company}). Cada clave tiene solo los permisos que elijas.',
  ],
  'key.descAll': [
    'Você vê as chaves de todas as pessoas da Empresa e pode revogar qualquer uma.',
    'You see everyone’s keys in the company and can revoke any of them.',
    'Ves las claves de todas las personas de la empresa y puedes revocar cualquiera.',
  ],
  'key.empty': ['Nenhuma chave criada ainda.', 'No keys created yet.', 'Aún no hay claves.'],
  'key.create': ['Criar chave', 'Create key', 'Crear clave'],
  'key.name': ['Nome', 'Name', 'Nombre'],
  'key.nameHint': ['Para reconhecer depois. Ex.: Planilha de receita', 'To recognize it later. E.g. Revenue sheet', 'Para reconocerla después. Ej.: Planilla de ingresos'],
  'key.key': ['Chave', 'Key', 'Clave'],
  'key.owner': ['Criada por', 'Created by', 'Creada por'],
  'key.perms': ['Permissões', 'Permissions', 'Permisos'],
  'key.permsN': ['{n} permissões', '{n} permissions', '{n} permisos'],
  'key.perm1': ['1 permissão', '1 permission', '1 permiso'],
  'key.lastUsed': ['Último uso', 'Last used', 'Último uso'],
  'key.expires': ['Vence em', 'Expires', 'Vence'],
  'key.validity': ['Validade', 'Validity', 'Validez'],
  'key.days': ['{n} dias', '{n} days', '{n} días'],
  'key.year': ['1 ano', '1 year', '1 año'],
  'key.state.active': ['Ativa', 'Active', 'Activa'],
  'key.state.revoked': ['Revogada', 'Revoked', 'Revocada'],
  'key.state.expired': ['Vencida', 'Expired', 'Vencida'],
  'key.revoke': ['Revogar', 'Revoke', 'Revocar'],
  'key.revokeLabel': ['Revogar a chave {name}', 'Revoke key {name}', 'Revocar la clave {name}'],
  'key.revokeTitle': ['Revogar a chave {name}?', 'Revoke key {name}?', '¿Revocar la clave {name}?'],
  'key.revokeDesc': [
    'Os sistemas que usam esta chave param de acessar a API na hora. Não dá para desfazer.',
    'Systems using this key lose API access right away. This cannot be undone.',
    'Los sistemas que usan esta clave pierden el acceso a la API al instante. No se puede deshacer.',
  ],
  'key.revoked': ['Chave revogada.', 'Key revoked.', 'Clave revocada.'],
  'key.permsTitle': ['O que a chave pode fazer', 'What the key can do', 'Qué puede hacer la clave'],
  'key.permsHint': [
    'Só aparecem as permissões que você tem. Chaves não podem criar outras chaves.',
    'Only permissions you have are listed. Keys cannot create other keys.',
    'Solo aparecen los permisos que tienes. Las claves no pueden crear otras claves.',
  ],
  'key.createdTitle': ['Copie a chave agora', 'Copy the key now', 'Copia la clave ahora'],
  'key.createdDesc': [
    'Ela aparece só esta vez. Se perder, revogue e crie outra.',
    'It is shown only this once. If you lose it, revoke it and create another.',
    'Se muestra solo esta vez. Si la pierdes, revócala y crea otra.',
  ],
  'key.usage': ['Use no cabeçalho:', 'Use it in the header:', 'Úsala en el encabezado:'],
  'key.noCompany': [
    'Entre numa Empresa para criar chaves de API.',
    'Join a company to create API keys.',
    'Entra en una empresa para crear claves de API.',
  ],
  'common.copy': ['Copiar', 'Copy', 'Copiar'],
  'common.copied': ['Copiado', 'Copied', 'Copiado'],
  'common.copyManual': ['Selecionado. Copie com Ctrl+C.', 'Selected. Copy with Ctrl+C.', 'Seleccionado. Copia con Ctrl+C.'],

  // Painel interno
  'int.clients': ['Clientes', 'Clients', 'Clientes'],
  'int.people': ['Pessoas', 'People', 'Personas'],
  'int.staff': ['Equipe Groone', 'Groone team', 'Equipo Groone'],
  'int.mcm': ['MCM sem dono', 'Unclaimed MCM', 'MCM sin dueño'],
  'int.sub': [
    'Todos os clientes, da rede Groone e de fora dela. Só a equipe Groone vê esta área.',
    'All clients, inside and outside the Groone network. Only the Groone team sees this area.',
    'Todos los clientes, de la red Groone y de fuera. Solo el equipo Groone ve esta área.',
  ],
  'int.new': ['Novo cliente', 'New client', 'Nuevo cliente'],
  'int.empty': ['Nenhum cliente ainda', 'No clients yet', 'Aún no hay clientes'],
  'int.emptySub': [
    'Cadastre o primeiro cliente: o dono recebe um convite por e-mail e cria a Empresa.',
    'Add the first client: the owner gets an email invite and creates the company.',
    'Registra el primer cliente: el dueño recibe una invitación por correo y crea la empresa.',
  ],
  'int.newDesc': [
    'O dono recebe o convite por e-mail, válido por 1 dia, e cria a Empresa no aceite.',
    'The owner gets an email invite, valid for 1 day, and creates the company when accepting.',
    'El dueño recibe la invitación por correo, válida por 1 día, y crea la empresa al aceptar.',
  ],
  'int.ownerEmail': ['E-mail do dono', 'Owner email', 'Correo del dueño'],
  'int.seats': ['Vagas', 'Seats', 'Plazas'],
  'int.plan': ['Rede', 'Network', 'Red'],
  'int.plan.groone_network': ['Rede Groone', 'Groone network', 'Red Groone'],
  'int.plan.external': ['Fora da rede', 'Outside the network', 'Fuera de la red'],
  'int.create': ['Criar e enviar convite', 'Create and send invite', 'Crear y enviar invitación'],
  'int.created': ['Convite enviado para {email}.', 'Invite sent to {email}.', 'Invitación enviada a {email}.'],
  'int.tab.all': ['Todos', 'All', 'Todos'],
  'int.tab.suspended': ['Suspensos', 'Suspended', 'Suspendidos'],
  'int.search': ['Nome, slug ou e-mail do dono', 'Name, slug or owner email', 'Nombre, slug o correo del dueño'],
  'int.searchLabel': ['Buscar clientes', 'Search clients', 'Buscar clientes'],
  'int.client': ['Cliente', 'Client', 'Cliente'],
  'int.employees': ['Funcionários', 'Employees', 'Empleados'],
  'int.seatsLabel': ['{used} de {limit} vagas usadas', '{used} of {limit} seats used', '{used} de {limit} plazas usadas'],
  'int.status.active': ['Ativo', 'Active', 'Activo'],
  'int.status.suspended': ['Suspenso', 'Suspended', 'Suspendido'],
  'int.open': ['Abrir', 'Open', 'Abrir'],
  'int.none': ['Nenhum cliente encontrado', 'No clients found', 'No se encontraron clientes'],
  'int.noneSub': [
    'Busque pelo nome, pelo slug ou pelo e-mail do dono.',
    'Search by name, slug or owner email.',
    'Busca por nombre, slug o correo del dueño.',
  ],
  'int.clear': ['Limpar filtros', 'Clear filters', 'Limpiar filtros'],
  'int.pendingOwners': ['Convites de dono pendentes', 'Pending owner invites', 'Invitaciones de dueño pendientes'],
  'int.pendingOwnersDesc': [
    'O cliente só aparece na lista depois que o dono aceita.',
    'The client shows up in the list only after the owner accepts.',
    'El cliente aparece en la lista solo cuando el dueño acepta.',
  ],
  'int.expires': ['Vence {when}', 'Expires {when}', 'Vence {when}'],
  'int.expired': ['Vencido', 'Expired', 'Vencida'],
  'int.resend': ['Reenviar', 'Resend', 'Reenviar'],
  'int.resent': ['Convite reenviado.', 'Invite resent.', 'Invitación reenviada.'],
  'int.cancelInvite': ['Cancelar convite', 'Cancel invite', 'Cancelar invitación'],
  'int.cancelInviteTitle': ['Cancelar o convite de {email}?', 'Cancel the invite for {email}?', '¿Cancelar la invitación de {email}?'],
  'int.cancelInviteDesc': [
    'O link do e-mail para de funcionar. Dá para convidar de novo depois.',
    'The email link stops working. You can invite again later.',
    'El enlace del correo deja de funcionar. Puedes invitar de nuevo después.',
  ],
  'int.canceled': ['Convite cancelado.', 'Invite canceled.', 'Invitación cancelada.'],
  'int.back': ['Clientes', 'Clients', 'Clientes'],
  'int.planSeats': ['Rede e vagas', 'Network and seats', 'Red y plazas'],
  'int.planSeatsDesc': [
    'Rede Groone não paga. As vagas contam pessoas e convites pendentes, com o dono.',
    'Groone network clients do not pay. Seats count people and pending invites, including the owner.',
    'Los clientes de la red Groone no pagan. Las plazas cuentan personas e invitaciones pendientes, con el dueño.',
  ],
  'int.seatsMin': ['Não dá para ficar abaixo das {n} vagas em uso.', 'Cannot go below the {n} seats in use.', 'No puede quedar por debajo de las {n} plazas en uso.'],
  'int.access': ['Acesso', 'Access', 'Acceso'],
  'int.suspendDesc': [
    'Suspenso, ninguém da Empresa entra no painel nem usa a API. Nada é apagado.',
    'While suspended, nobody in the company can use the panel or the API. Nothing is deleted.',
    'Suspendida, nadie de la empresa entra al panel ni usa la API. No se borra nada.',
  ],
  'int.suspend': ['Suspender cliente', 'Suspend client', 'Suspender cliente'],
  'int.suspendTitle': ['Suspender {name}?', 'Suspend {name}?', '¿Suspender {name}?'],
  'int.reactivate': ['Reativar cliente', 'Reactivate client', 'Reactivar cliente'],
  'int.suspendedNow': ['Cliente suspenso.', 'Client suspended.', 'Cliente suspendido.'],
  'int.reactivatedNow': ['Cliente reativado.', 'Client reactivated.', 'Cliente reactivado.'],
  'int.owner': ['Dono', 'Owner', 'Dueño'],
  'int.ownerDesc': [
    'Só a Groone troca o dono. O novo dono precisa ser membro ativo; o antigo vira Administrador.',
    'Only Groone changes the owner. The new owner must be an active member; the old one becomes Admin.',
    'Solo Groone cambia el dueño. El nuevo debe ser miembro activo; el anterior pasa a Administrador.',
  ],
  'int.changeOwner': ['Trocar dono', 'Change owner', 'Cambiar dueño'],
  'int.ownerChanged': ['Dono trocado.', 'Owner changed.', 'Dueño cambiado.'],
  'int.noOtherMembers': [
    'Não há outro membro ativo para virar dono.',
    'There is no other active member to become owner.',
    'No hay otro miembro activo que pueda ser dueño.',
  ],
  'int.members': ['Membros', 'Members', 'Miembros'],
  'int.invites': ['Convites pendentes', 'Pending invites', 'Invitaciones pendientes'],
  'int.audit': ['Atividade', 'Activity', 'Actividad'],
  'int.auditDesc': ['O que mudou na Empresa, de quem é da equipe dela e da Groone.', 'What changed in the company, by its team and by Groone.', 'Qué cambió en la empresa, por su equipo y por Groone.'],
  'int.auditEmpty': ['Nada registrado ainda.', 'Nothing recorded yet.', 'Nada registrado aún.'],
  'int.more': ['Carregar mais', 'Load more', 'Cargar más'],
  'int.by.member': ['membro', 'member', 'miembro'],
  'int.by.staff': ['Groone', 'Groone', 'Groone'],
  'int.by.api_key': ['chave de API', 'API key', 'clave de API'],
  'int.by.system': ['sistema', 'system', 'sistema'],
  'int.peopleSub': [
    'Busque qualquer pessoa do Avant para desativar a conta ou zerar o 2FA quando ela perdeu o celular.',
    'Find anyone on Avant to disable the account or reset 2FA when they lost their phone.',
    'Busca a cualquier persona de Avant para desactivar la cuenta o reiniciar el 2FA si perdió el móvil.',
  ],
  'int.peopleSearch': ['Nome ou e-mail (3 letras ou mais)', 'Name or email (3+ characters)', 'Nombre o correo (3+ caracteres)'],
  'int.peopleNone': ['Ninguém encontrado.', 'No one found.', 'No se encontró a nadie.'],
  'int.peopleHint': ['Digite ao menos 3 letras.', 'Type at least 3 characters.', 'Escribe al menos 3 caracteres.'],
  'int.person': ['Pessoa', 'Person', 'Persona'],
  'int.companies': ['Empresas', 'Companies', 'Empresas'],
  'int.lastLogin': ['Último login', 'Last sign-in', 'Último inicio'],
  'int.mfaOn': ['2FA ativo', '2FA on', '2FA activo'],
  'int.mfaOff': ['Sem 2FA', 'No 2FA', 'Sin 2FA'],
  'int.user.active': ['Ativa', 'Active', 'Activa'],
  'int.user.disabled': ['Desativada', 'Disabled', 'Desactivada'],
  'int.disable': ['Desativar conta', 'Disable account', 'Desactivar cuenta'],
  'int.disableTitle': ['Desativar a conta de {name}?', 'Disable {name}’s account?', '¿Desactivar la cuenta de {name}?'],
  'int.disableDesc': [
    'As sessões e chaves dela param na hora, em todas as Empresas. Dá para reativar.',
    'Their sessions and keys stop right away, in every company. You can re-enable it.',
    'Sus sesiones y claves se detienen al instante, en todas las empresas. Se puede reactivar.',
  ],
  'int.enable': ['Reativar conta', 'Re-enable account', 'Reactivar cuenta'],
  'int.disabledNow': ['Conta desativada.', 'Account disabled.', 'Cuenta desactivada.'],
  'int.enabledNow': ['Conta reativada.', 'Account re-enabled.', 'Cuenta reactivada.'],
  'int.resetMfa': ['Zerar 2FA', 'Reset 2FA', 'Reiniciar 2FA'],
  'int.resetMfaTitle': ['Zerar o 2FA de {name}?', 'Reset {name}’s 2FA?', '¿Reiniciar el 2FA de {name}?'],
  'int.resetMfaDesc': [
    'Confirme a identidade antes. O login volta a pedir só a senha e a pessoa recebe um e-mail avisando.',
    'Confirm their identity first. Sign-in will ask only for the password and they get an email about it.',
    'Confirma su identidad antes. El inicio pedirá solo la contraseña y la persona recibe un correo.',
  ],
  'int.mfaReset': ['2FA zerado.', '2FA reset.', '2FA reiniciado.'],
  'int.actionsFor': ['Ações para {name}', 'Actions for {name}', 'Acciones para {name}'],
  'int.staffSub': [
    'Quem da Groone usa o painel interno. O 2FA é obrigatório para todos.',
    'Who at Groone uses the internal panel. 2FA is required for everyone.',
    'Quién de Groone usa el panel interno. El 2FA es obligatorio para todos.',
  ],
  'int.staffInvite': ['Convidar para a equipe Groone', 'Invite to the Groone team', 'Invitar al equipo Groone'],
  'int.staffInviteDesc': ['Convite por e-mail, válido por 1 dia.', 'Email invite, valid for 1 day.', 'Invitación por correo, válida por 1 día.'],
  'int.staffInvited': ['Convite enviado para {email}.', 'Invite sent to {email}.', 'Invitación enviada a {email}.'],
  'int.mcmSub': [
    'Networks que aceitaram o MCM da Groone, mas cujo e-mail não é dono de nenhuma Empresa. Ligue cada uma ao cliente certo.',
    'Networks that accepted Groone’s MCM but whose email does not own any company. Link each one to the right client.',
    'Networks que aceptaron el MCM de Groone pero cuyo correo no es dueño de ninguna empresa. Vincula cada una al cliente correcto.',
  ],
  'int.mcmEmpty': ['Nenhuma network esperando dono.', 'No networks waiting for an owner.', 'Ninguna network esperando dueño.'],
  'int.mcmEmail': ['E-mail no GAM', 'Email in GAM', 'Correo en GAM'],
  'int.mcmSeen': ['Vista em', 'First seen', 'Vista el'],
  'int.delegation': ['Delegação', 'Delegation', 'Delegación'],
  'int.assign': ['Ligar a um cliente', 'Link to a client', 'Vincular a un cliente'],
  'int.assignTitle': ['Ligar a network {code}', 'Link network {code}', 'Vincular la network {code}'],
  'int.assignDesc': [
    'A network passa a ser do cliente escolhido e a importação de sites e ad units começa.',
    'The network goes to the chosen client and the site and ad unit import starts.',
    'La network pasa al cliente elegido y empieza la importación de sitios y ad units.',
  ],
  'int.assignClient': ['Cliente', 'Client', 'Cliente'],
  'int.assigned': ['Network ligada a {name}.', 'Network linked to {name}.', 'Network vinculada a {name}.'],
} as const satisfies Record<string, readonly [string, string, string]>

export type Key = keyof typeof dict

/** Mensagens por ``code`` do erro da API. */
const errors: Record<string, readonly [string, string, string]> = {
  seat_limit_below_usage: [
    'O limite não pode ficar abaixo das vagas em uso.',
    'The limit cannot be below the seats in use.',
    'El límite no puede quedar por debajo de las plazas en uso.',
  ],
  mfa_already_enabled: ['O 2FA já está ativo.', '2FA is already on.', 'El 2FA ya está activo.'],
  mfa_not_enabled: ['O 2FA não está ativo. Comece pela configuração.', '2FA is not on. Start with the setup.', 'El 2FA no está activo. Empieza por la configuración.'],
  api_key_limit_reached: [
    'Você chegou ao limite de 20 chaves ativas. Revogue uma para criar outra.',
    'You reached the limit of 20 active keys. Revoke one to create another.',
    'Llegaste al límite de 20 claves activas. Revoca una para crear otra.',
  ],
  invalid_credentials: ['E-mail ou senha incorretos.', 'Wrong email or password.', 'Correo o contraseña incorrectos.'],
  account_disabled: ['Esta conta está desativada. Fale com a Groone.', 'This account is disabled. Contact Groone.', 'Esta cuenta está desactivada. Habla con Groone.'],
  too_many_attempts: [
    'Muitas tentativas. Tente de novo em {s} s.',
    'Too many attempts. Try again in {s} s.',
    'Demasiados intentos. Inténtalo de nuevo en {s} s.',
  ],
  rate_limited: ['Muitas requisições. Tente em {s} s.', 'Too many requests. Try in {s} s.', 'Demasiadas solicitudes. Prueba en {s} s.'],
  invalid_mfa_code: ['Código inválido. Confira e tente de novo.', 'Invalid code. Check it and try again.', 'Código inválido. Revísalo e inténtalo de nuevo.'],
  mfa_attempts_exceeded: [
    'Muitos códigos errados. Entre de novo com a senha.',
    'Too many wrong codes. Sign in again with your password.',
    'Demasiados códigos erróneos. Entra de nuevo con la contraseña.',
  ],
  weak_password: [
    'Senha fraca: use pelo menos 10 caracteres e evite senhas comuns.',
    'Weak password: use at least 10 characters and avoid common passwords.',
    'Contraseña débil: usa al menos 10 caracteres y evita contraseñas comunes.',
  ],
  invalid_token: ['O link venceu ou já foi usado. Peça outro.', 'The link expired or was already used. Request another.', 'El enlace venció o ya se usó. Pide otro.'],
  invitation_expired: ['O convite venceu.', 'The invite expired.', 'La invitación venció.'],
  invitation_not_pending: ['O convite não está mais pendente.', 'The invite is no longer pending.', 'La invitación ya no está pendiente.'],
  invitation_email_mismatch: [
    'Você está logado com outro e-mail. Saia e entre com o e-mail do convite.',
    'You are signed in with another email. Sign out and use the invited email.',
    'Estás con otro correo. Sal y entra con el correo de la invitación.',
  ],
  seat_limit_reached: [
    'Todas as vagas estão ocupadas. Peça mais vagas à Groone.',
    'All seats are taken. Ask Groone for more seats.',
    'Todas las plazas están ocupadas. Pide más a Groone.',
  ],
  permission_denied: ['Você não tem permissão para isso.', 'You do not have permission for this.', 'No tienes permiso para esto.'],
  not_found: ['Não encontrado.', 'Not found.', 'No encontrado.'],
  csrf_failed: ['A página ficou desatualizada. Recarregue e tente de novo.', 'The page is stale. Reload and try again.', 'La página quedó desactualizada. Recarga e inténtalo de nuevo.'],
  network_error: ['Sem conexão com o servidor.', 'No connection to the server.', 'Sin conexión con el servidor.'],
  not_authenticated: ['Sua sessão acabou. Entre de novo.', 'Your session ended. Sign in again.', 'Tu sesión terminó. Entra de nuevo.'],
  mfa_expired: [
    'O tempo para o código acabou. Entre de novo com a senha.',
    'Time for the code ran out. Sign in again with your password.',
    'Se acabó el tiempo para el código. Entra de nuevo con la contraseña.',
  ],
  mfa_required: ['Confirme o código do 2FA para continuar.', 'Confirm your 2FA code to continue.', 'Confirma el código 2FA para continuar.'],
  no_active_company: ['Escolha uma Empresa para continuar.', 'Choose a company to continue.', 'Elige una empresa para continuar.'],
  staff_only: ['Só para a equipe Groone.', 'Groone team only.', 'Solo para el equipo Groone.'],
  already_member: ['Esta pessoa já está na Empresa.', 'This person is already in the company.', 'Esta persona ya está en la empresa.'],
  wrong_invitation_kind: ['Este convite pede outros dados. Recarregue a página.', 'This invite needs other details. Reload the page.', 'Esta invitación pide otros datos. Recarga la página.'],
  invalid_input: ['Confira os campos.', 'Check the fields.', 'Revisa los campos.'],
  google_unavailable: [
    'O login com Google não está disponível agora. Entre com e-mail e senha.',
    'Google sign-in is not available right now. Use email and password.',
    'El inicio con Google no está disponible ahora. Usa correo y contraseña.',
  ],
  google_failed: ['O Google não confirmou o login. Tente de novo.', 'Google did not confirm the sign-in. Try again.', 'Google no confirmó el inicio. Inténtalo de nuevo.'],
  google_not_linked: [
    'Esta conta Google não está ligada a um acesso do Avant. Entre com e-mail e senha e ligue o Google em Minha conta.',
    'This Google account is not linked to Avant. Sign in with email and password and link Google in My account.',
    'Esta cuenta de Google no está vinculada a Avant. Entra con correo y contraseña y vincula Google en Mi cuenta.',
  ],
  no_access: [
    'Este e-mail ainda não tem acesso. O acesso é por convite.',
    'This email has no access yet. Access is by invite.',
    'Este correo aún no tiene acceso. El acceso es por invitación.',
  ],
  email_not_verified: ['O Google não confirmou este e-mail.', 'Google has not verified this email.', 'Google no verificó este correo.'],
  google_email_mismatch: [
    'O e-mail do Google é diferente do e-mail da sua conta.',
    'The Google email differs from your account email.',
    'El correo de Google es distinto del correo de tu cuenta.',
  ],
  google_already_linked: ['Esta conta Google já está ligada a outra pessoa.', 'This Google account is linked to someone else.', 'Esta cuenta de Google ya está vinculada a otra persona.'],
  internal_error: ['Erro no servidor. Tente de novo em instantes.', 'Server error. Try again shortly.', 'Error del servidor. Inténtalo en un momento.'],
  cannot_change_owner: ['O dono só muda pelo painel interno da Groone.', 'The owner only changes through the Groone internal panel.', 'El dueño solo cambia desde el panel interno de Groone.'],
  cannot_change_self: ['Você não pode mudar o próprio acesso.', 'You cannot change your own access.', 'No puedes cambiar tu propio acceso.'],
  role_in_use: ['Este papel ainda tem pessoas. Mude o papel delas antes.', 'This role still has people. Change their role first.', 'Este rol aún tiene personas. Cambia su rol antes.'],
  role_not_editable: ['Papéis predefinidos não mudam.', 'Predefined roles do not change.', 'Los roles predefinidos no cambian.'],
  invalid_permission: ['Uma das permissões não pode ser usada aqui.', 'One of the permissions cannot be used here.', 'Uno de los permisos no se puede usar aquí.'],
  network_code_taken: [
    'Essa network já está conectada a uma Empresa no Avant. Se ela é sua, fale com a Groone.',
    'This network is already connected to a company on Avant. If it is yours, contact Groone.',
    'Esta network ya está conectada a una empresa en Avant. Si es tuya, habla con Groone.',
  ],
  site_exists: [
    'A Empresa já tem esse site. Ele pode estar arquivado: marque "Mostrar arquivados".',
    'The company already has this site. It may be archived: check "Show archived".',
    'La empresa ya tiene este sitio. Puede estar archivado: marca "Mostrar archivados".',
  ],
  site_from_gam: ['Este site veio do GAM e só sai de lá.', 'This site came from GAM and only leaves from there.', 'Este sitio vino de GAM y solo sale de allí.'],
  network_disconnected: ['A network está desconectada.', 'The network is disconnected.', 'La network está desconectada.'],
  sync_too_soon: ['Já tem uma importação recente. Tente de novo em {s} s.', 'There is a recent import. Try again in {s} s.', 'Ya hay una importación reciente. Prueba en {s} s.'],
  gam_network_not_found: [
    'O Ad Manager não encontrou essa network. Confira o network code.',
    'Ad Manager did not find this network. Check the network code.',
    'Ad Manager no encontró esta network. Revisa el network code.',
  ],
  gam_not_admin: [
    'A conta de serviço não aparece como administradora. Confira o passo 2 e teste de novo.',
    'The service account is not an administrator. Check step 2 and test again.',
    'La cuenta de servicio no figura como administradora. Revisa el paso 2 y prueba de nuevo.',
  ],
  gam_access_denied: [
    'O Ad Manager recusou o acesso da conta de serviço. Confira o passo 2 e teste de novo.',
    'Ad Manager denied the service account. Check step 2 and test again.',
    'Ad Manager rechazó la cuenta de servicio. Revisa el paso 2 y prueba de nuevo.',
  ],
  gam_test_network: ['É uma network de teste do Ad Manager; o Avant só lê networks reais.', 'This is an Ad Manager test network; Avant only reads real networks.', 'Es una network de prueba de Ad Manager; Avant solo lee networks reales.'],
  gam_unavailable: ['O Ad Manager não respondeu. A Groone tenta de novo sozinha.', 'Ad Manager did not answer. Groone retries on its own.', 'Ad Manager no respondió. Groone reintenta sola.'],
  gam_error: ['O Ad Manager devolveu um erro. A Groone tenta de novo sozinha.', 'Ad Manager returned an error. Groone retries on its own.', 'Ad Manager devolvió un error. Groone reintenta sola.'],
  validation_error: ['Confira os campos.', 'Check the fields.', 'Revisa los campos.'],
}
/** Ações do registro de atividade (audit_logs); as desconhecidas aparecem como vêm. */
const auditActions: Record<string, readonly [string, string, string]> = {
  'company.created': ['Empresa criada', 'Company created', 'Empresa creada'],
  'company.updated': ['Empresa editada', 'Company edited', 'Empresa editada'],
  'company.suspended': ['Cliente suspenso', 'Client suspended', 'Cliente suspendido'],
  'company.reactivated': ['Cliente reativado', 'Client reactivated', 'Cliente reactivado'],
  'company.owner_changed': ['Dono trocado', 'Owner changed', 'Dueño cambiado'],
  'invitation.created': ['Convite enviado', 'Invite sent', 'Invitación enviada'],
  'invitation.resent': ['Convite reenviado', 'Invite resent', 'Invitación reenviada'],
  'invitation.canceled': ['Convite cancelado', 'Invite canceled', 'Invitación cancelada'],
  'invitation.accepted': ['Convite aceito', 'Invite accepted', 'Invitación aceptada'],
  'member.updated': ['Membro alterado', 'Member changed', 'Miembro modificado'],
  'member.removed': ['Membro removido', 'Member removed', 'Miembro quitado'],
  'member.left': ['Membro saiu', 'Member left', 'Miembro salió'],
  'member.permissions_set': ['Permissões diretas alteradas', 'Direct permissions changed', 'Permisos directos modificados'],
  'role.created': ['Papel criado', 'Role created', 'Rol creado'],
  'role.updated': ['Papel editado', 'Role edited', 'Rol editado'],
  'role.deleted': ['Papel apagado', 'Role deleted', 'Rol borrado'],
  'site.assigned': ['Site atribuído', 'Site assigned', 'Sitio asignado'],
  'site.unassigned': ['Site desatribuído', 'Site unassigned', 'Sitio desasignado'],
  'ad_unit.linked': ['Ad unit ligado à mão', 'Ad unit linked by hand', 'Ad unit vinculado a mano'],
  'ad_unit.unlinked': ['Ad unit desligado', 'Ad unit unlinked', 'Ad unit desvinculado'],
  'api_key.created': ['Chave de API criada', 'API key created', 'Clave de API creada'],
  'api_key.revoked': ['Chave de API revogada', 'API key revoked', 'Clave de API revocada'],
  'network.connected': ['Network conectada', 'Network connected', 'Network conectada'],
  'network.assigned': ['Network ligada pela Groone', 'Network linked by Groone', 'Network vinculada por Groone'],
  'network.disconnected': ['Network desconectada', 'Network disconnected', 'Network desconectada'],
  'network.reconnected': ['Network reconectada', 'Network reconnected', 'Network reconectada'],
  'network.error': ['Network sem acesso', 'Network lost access', 'Network sin acceso'],
  'network.recovered': ['Network voltou', 'Network recovered', 'Network recuperada'],
  'network.sync_requested': ['Importação pedida', 'Import requested', 'Importación pedida'],
}

const fallbackError = ['Algo deu errado. Tente de novo.', 'Something went wrong. Try again.', 'Algo salió mal. Inténtalo de nuevo.'] as const

const index = { pt: 0, en: 1, es: 2 } as const satisfies Record<Lang, 0 | 1 | 2>
const STORAGE = 'avant.lang'

function initial(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE)
    if (saved === 'pt' || saved === 'en' || saved === 'es') return saved
  } catch {
    // navegador sem localStorage
  }
  const nav = (typeof navigator !== 'undefined' ? navigator.language : 'pt').slice(0, 2)
  return nav === 'en' || nav === 'es' ? nav : 'pt'
}

/** A pessoa já escolheu um idioma neste navegador? */
export function langChosen(): boolean {
  try {
    return localStorage.getItem(STORAGE) !== null
  } catch {
    return false
  }
}

export const lang = ref<Lang>(initial())

watch(
  lang,
  (l) => {
    if (typeof document !== 'undefined') document.documentElement.lang = l === 'pt' ? 'pt-BR' : l
  },
  { immediate: true },
)

/** Troca pelo seletor: fica lembrado neste navegador. */
export function chooseLang(l: Lang) {
  lang.value = l
  try {
    localStorage.setItem(STORAGE, l)
  } catch {
    // segue sem lembrar
  }
}

function fill(text: string, params?: Record<string, string | number>): string {
  if (!params) return text
  return text.replace(/\{(\w+)\}/g, (m, k: string) => (k in params ? String(params[k]) : m))
}

export function t(key: Key, params?: Record<string, string | number>): string {
  return fill(dict[key][index[lang.value]], params)
}

/** Nome vindo da API em vários idiomas (papéis, permissões). */
export function pick(name: Localized | null | undefined): string {
  if (!name) return ''
  return name[lang.value] ?? name.pt ?? Object.values(name)[0] ?? ''
}

export function auditText(action: string): string {
  const text = auditActions[action]
  return text ? text[index[lang.value]] : action
}

export function errorText(code: string, params?: Record<string, string | number>): string {
  return fill((errors[code] ?? fallbackError)[index[lang.value]], params)
}

export const locale = computed(() => (lang.value === 'pt' ? 'pt-BR' : lang.value === 'es' ? 'es' : 'en'))

export function formatDate(iso: string | null, withTime = true): string {
  if (!iso) return t('common.never')
  const d = new Date(iso)
  return new Intl.DateTimeFormat(locale.value, {
    dateStyle: 'short',
    ...(withTime ? { timeStyle: 'short' } : {}),
  }).format(d)
}

/** "há 5 min", "há 2 h"... para checagens e atividade. */
export function formatAgo(iso: string | null, now = Date.now()): string {
  if (!iso) return t('common.never')
  const secs = Math.round((new Date(iso).getTime() - now) / 1000)
  const rtf = new Intl.RelativeTimeFormat(locale.value, { numeric: 'auto', style: 'short' })
  const abs = Math.abs(secs)
  if (abs < 60) return rtf.format(secs, 'second')
  if (abs < 3600) return rtf.format(Math.round(secs / 60), 'minute')
  if (abs < 86400) return rtf.format(Math.round(secs / 3600), 'hour')
  return rtf.format(Math.round(secs / 86400), 'day')
}
