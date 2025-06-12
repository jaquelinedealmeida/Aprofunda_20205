const express = require("express"); //importa o express - lib pra permitir criar servidor com o node
const router = express.Router(); //importa a funcionalidade de rota do express
const cors = require("cors"); //importa o cors - lib pra permitir que o front-end consuma nossa api
const nomes = require("./dados.json"); //importa o arquivo json que tem um objeto com chave e valor

const app = express(); //cria uma instancia do express
app.use(express.json()); //permitindo trafegar json
app.use(cors());

//rota raiz
const ola = router.get("/", (req, res) => {
  res.send("Olá,mundo!");
});

///rota para enviar uma mensagem
const aprofunda = router.get("/aprofunda", (req, res) => {
  res.send("Olá, estudantes maravilhosas do Aprofunda!!");
});

///rota para enviar os dados das alunas como resposta da requisição
const alunas = router.get("/alunas", (req, res) => {
  res.json(nomes);
});

//usando as rotas
app.use(ola);
app.use(aprofunda);
app.use(alunas);
//uso de arrow function para evitar execução antecipada do servidor
app.listen(3000, () => {
  console.log("Servidor rodando com sucesso na porta 3000!!!");
}); //ouvindo em qual porta o servidor pode rodar
