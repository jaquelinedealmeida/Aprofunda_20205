const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const blogRouter = express.Router();
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

//Model do texto: id, title, content, date, status, author

//array vazio para armazenar os textos criados
const textList = [];

//criacao de um texto, usando id automatico e data com funcao NewDate - nativa do JS
blogRouter.post("/texts", (req, res) => {
  const { title, content, status, author } = req.body;

  const newText = {
    id: uuidv4(),
    title: title,
    content: content,
    created_at: new Date().toLocaleDateString("pt-BR"),
    status: status,
    author: author,
  };

  textList.push(newText);

  res.status(201).json({ message: `Texto ${title} foi criado com sucesso!!` });
});

//retorna toda a lista de texto
blogRouter.get("/texts", (req, res) => {
  res.json(textList);
});

//retorna um texto especifico através do id, usando queryparams -> ?id=idgeradoautomaticamente
blogRouter.get("/text", (req, res) => {
  const id = req.query.id;
  const textFound = textList.find((text) => text.id === id);
  res.json(textFound);
});

//atualizar/editar um texto especifico

//deletar um texto específico

//
app.use(blogRouter);
app.listen(
  PORT,
  console.log(`Servidor rodando com sucesso na porta ${PORT} !!`)
);
