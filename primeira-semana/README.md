# Como construir o seu SETUP?

# Repositório

Se você criou primeiro seu repositório localmente, depois você cria no GitHub com o mesmo nome - o nome da pasta principal precisa ser o mesmo nome do repositório e segue os comandos abaixo:

### Comandos

- Inicializa o git no seu repositório

  `git init`

- Com o repositório no GitHub criado, copie o link indicado para o seu repositório, por exemplo:

`git remote add origin git@github.com:jaquelinedealmeida/Aprofunda_20205.git`

- Mudar o nome da branch de master para main:
  `git branch -M main`

- Faça commit das suas alterações:
  `git commit -m "o que foi feito`

- Suba as suas alterações para o seu repositório remoto:
  `git push -u origin main`

### Node e pacotes

Para as aulas, estamos usando a versão ´20.17.0´. Caso sua versão seja diferente, use o NVM para mudar a versão do node.
O NVM é um gerenciador de versões do node que permite você mudar as versões no projeto sem precisar fazer nova instalação.

Mais informações:

[Instalação NVM](https://github.com/nvm-sh/nvm)
[Mais detalhes](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)

Com o Node já instalado, é só seguir os comandos abaixo:

## Para módulos 1 e 2:

### Comandos:

- Verifica a versão do node:

  `node -v` ou `node --version`

- Inicializa o node e adciona o arquivo package.json:

  `npm init y`

- Instala o Express(servidor):

  `npm i express`

- Instala o nodemon(para acompanhar as atualizações em tempo real):

  `npm i nodemon`

- Instala o cors(para permitir que a aplicação rode em todos os navegadores):

  `npm i cors`

Obs: Sempre que um pacote/dependência for instalado pela primeira vez, ele inclui a pasta node_modules e o arquivo package-lock.json.

### Organização de arquivos:

### Gitignore

- Arquivo para ignorar arquivos muito grande e/ou que não precise ser visualizados externamente no GitHub (os arquivos ficam em cinza.)

  `.gitignore`

### Package.json

- Contém o resumo sobre a nossa aplicação, nome, descrição, scripts, dependências etc.

### Projeto 1

## API de Gerenciamento de Tarefas

Criar um repositório com o nome Projeto1-Api-Aprofunda no GitHub, clonar e no computador e criar uma nova pasta chamada API, incluindo os pacotes e arquivos necessários para criar a API.

### Funcionalidades:

- GET /tasks - Listar tarefas
- GET /tasks/:id - Detalhar uma tarefa por id
- POST /tasks - Criar uma tarefa
- PUT /tasks/:id - Atualizar uma tarefa
- DELETE /tasks/:id - Deletar uma tarefa

### Conteúdo:

- Criar e configurar o servidor (array de objetos)
- Trabalhar com dados de memória
- Estruturar rotas
- Validar dados (ex: verificar se o title foi enviado)
- Testar no Postaman ou TunderClient

### Tarefa a ser entregue

- Criar as rotas PUT e Delete por id e testar no TunderClient ou Postman.
-
