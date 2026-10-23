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
  'nav.back': ['Voltar ao painel do cliente', 'Back to client panel', 'Volver al panel del cliente'],
  'nav.soon': ['Em breve', 'Soon', 'Pronto'],
  'nav.metrics': ['Métricas', 'Metrics', 'Métricas'],
  'nav.dashboards': ['Dashboards', 'Dashboards', 'Dashboards'],
  'nav.menu': ['Abrir menu', 'Open menu', 'Abrir menú'],
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
} as const satisfies Record<string, readonly [string, string, string]>

export type Key = keyof typeof dict

/** Mensagens por ``code`` do erro da API. */
const errors: Record<string, readonly [string, string, string]> = {
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
  validation_error: ['Confira os campos.', 'Check the fields.', 'Revisa los campos.'],
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
