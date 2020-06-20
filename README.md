# Recuperação de senha

**RF**

- O usuário deve poder recuperar sua senha informando o email;
- O usuário deve receberum e-mail cpom instrcões de recuperar senha;
- O usuário deve poder resetar sua senha;

**RNF**

- Utilizar Mailtrap para envio em ambiente de desenvolvimento;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em 2º plano (background job);

**RN**

- O link enviado por email para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização de perfil

**RF**

- O usuário deve poder atualizar seu nome, email e senha

**RNF**

- nope

**RN**

- O usuário não pode alterar seu e-mail para um e-mail que já esteja sendo sendo usado por outro usuário;
- Para atualizar a sua senha o usuário deve informar a senha antiga;
- Para atualizar a sua senha o usuário precisa confirmar a nova senha;

# Painel do prestador

**RF**

- O usuário deve poder lisar seus agendamentos de um dia específico;
- O prestador deve receber uma notificacão sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN**

- A notificação deve teer um status de lida ou não lida para controle do prestador;

# Agendamento de serviços

**RF**

- O usuário deve poder listar todos os prestadores de servicos cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar os horários dispon;iveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar uma hora exatamente;
- Os agendamentos devem estar disponíveis entre 8h e 18h (Primeiro horário 8hs e ultimo 17hs);
- O usuário não deve poder agendar em um horário já agendado;
- O usuário não deve poder agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;
