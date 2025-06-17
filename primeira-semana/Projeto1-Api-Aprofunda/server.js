const express = require('express');
const router = express.Router();
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const tasks = [];

//GET /tasks - listar todas as tarefas
const getTasks = router.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
})

//GET /tasks/:id - Buscar uma task por id

const getTaskId = router.get("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ message: "Tarefa não encontrada" });
  }

  res.status(200).json(task);
})

//POST /tasks - Criar uma nova tarefa
const createTask = router.post("/tasks", (req, res) => {
  const task = {
    id: req.body.id,
    title: req.body.title,
    description: req.body.description
  };

  tasks.push(task);

  res.status(201).json({ message: "Tarefa criada com sucesso!", task });
})

app.use(getTasks);
app.use(getTaskId);
app.use(createTask);

app.listen(3000, () => {
  console.log("Servidor de tarefa rodando com sucesso ! http://localhost:3000");
});