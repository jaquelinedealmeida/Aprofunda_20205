# Como construir o seu SETUP com Typescript e Clean Architecture?

# Repositório

Como usar o typescript e pacotes no seu projeto?

### Comandos

## Para módulos 2:

### Comandos:

- Instala Typescript(instala globalmente e só precisa ser feito uma vez)

  `npm install -g typescript`

- Inicializa o node e adciona o arquivo package.json:

  `npm init y`

- Instala o Express(servidor):

  `npm i express`

- Instala o cors(para permitir que a aplicação rode em todos os navegadores):

  `npm i cors`

- Instala types dos pacotes dependências para usar com typescript(é um comando só):

  `npm install --save-dev typescript ts-node-dev @types/node @types/express @types/uuid @types/cors`

- Inicializar o typescript(este comando deve ser rodado sempre que iniciar um novo projeto) para gerar o arquivo tsconfig.json

  `npx tsc --init`

### Organização de arquivos:

### Gitignore

- Arquivo para ignorar arquivos muito grande e/ou que não precise ser visualizados externamente no GitHub (os arquivos ficam em cinza.)

  `.gitignore`

### Package.json

- Contém o resumo sobre a nossa aplicação, nome, descrição, scripts, dependências etc.

### Projeto 2

## API de Criação de Biblioteca com Clean Architecture e Typescript

📚 Criar uma API de Biblioteca
🛠️ Como fazer:

- Criar um repositório no GitHub com o nome:
  Projeto2-Clean-Architecture-Aprofunda.

- Clonar o repositório e, no seu computador, criar uma nova pasta chamada:
  api

- Dentro da pasta api, rodar os comandos para configurar o projeto (exceto a instalação do TypeScript, se já tiver sido feito anteriormente).

- Adicionar as pastas e arquivos correspondentes à estrutura baseada em Clean Architecture:

### Funcionalidades:

- GET /books - Listar todos os livros
- POST /tasks - Criar um livro

### Conteúdo:

- Criar e configurar o servidor (array de objetos)
- Trabalhar com dados de memória
- Estruturar rotas
- Testar no Postman ou TunderClient

### Tarefa a ser entregue

- Criar as rotas GET (para listar todos e por id) e POST (para criar)
- Criar um readme descrevendo a atividade feita
- Incluir link do Github no classroom

### Não obrigatório

- Criar rotas GET:id, PATCH E DELETE

_IMPORTANTE_: Incluir link do Github no Classroom!
