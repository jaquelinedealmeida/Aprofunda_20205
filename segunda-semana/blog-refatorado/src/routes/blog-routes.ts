import express from "express";
import {
  createPost,
  listPosts,
  updatePost,
  deletePost,
  listPost,
} from "../controllers/blog-controller";

//cria as rotas do blog
const router = express.Router();

//rota de criação de um novo post/texto
router.post("/texts", createPost);

//rota de listagem de todos os posts/textos
router.get("/texts", listPosts);

//rota de listar um post/texto específico
router.get("/text", listPost);

//rota de atualização de um post/texto específico
router.patch("/text/:id", updatePost);

//rota para exclusão de um post/texto específico
router.delete("/text/:id", deletePost);

export default router;
