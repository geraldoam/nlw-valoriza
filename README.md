# N.L.W. Valoriza

Next Level Week 06 - NodeJS

### Aplicação

-   Cadastro de usuários.
-   Cadastro de Tags (Elogios possíveis)
    -   Somente usuário Administrador.
-   Cadastro de Elogios.
    -   ID do usuário receber elogios.
    -   ID do usuário que envia o elogia.
    -   ID da tag.
    -   Data da criação.
-   Autenticação de usuário
    -   Gerar toeken JWT.
    -   Validar usuário logado nas rotas necessárias.
-   Listagem de usuários.
-   Listagem de tags.
-   Listagem de elogios por usuário.

### Regra de Negócio

-   Cadastro de Usuário.

    -   Não é permitido cadastrar mais de um usuário com o mesmo email.
    -   Não é permitido cadastrar usuário sem email.

-   Cadastro de TAG.

    -   Não é permitido cadastrar mais de uma tag com o mesmo nome.
    -   Não é permitido cadastrar tag sem nome.
    -   Não é permitido o cadastro por usuários não administradores.

-   Cadastro de elogios.
    -   Não é permitido um usuário cadastrar um elogio para si.
    -   Não é permitido cadastrar elogios para usuários inválidos.
    -   O usuário precisa estar autenticado na aplicação.
