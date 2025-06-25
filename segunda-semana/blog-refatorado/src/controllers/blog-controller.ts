import { Request, Response } from "express";
import textService from "../services/text-service";

// executa a rotina de criação de um novo post e retorna o resultado
export const createPost = (req: Request, res: Response): void => {
  const { title, content, status, author } = req.body;
  const newText = textService.createText({ title, content, status, author });
  res
    .status(201)
    .json({ message: `Texto ${newText.title} criado com sucesso` });
};

// executa a listagem de todos os posts e retorna o resultado
export const listPosts = (req: Request, res: Response): void => {
  const texts = textService.getAllTexts();
  res.json(texts);
};

// executa a listagem de um post específico e retorna o resultado
// o id é passado como query string, por exemplo: /text?id=123
export const listPost = (req: Request, res: Response): void => {
  const { id } = req.query;

  // id pode ser string | string[] | undefined, então vamos forçar pra string
  const text = textService.getTextById(id as string);
  // se o texto não for encontrado, retorna 404
  // se o texto for encontrado, retorna o texto
  if (!text) {
    res.status(404).json({ message: `Texto com ID ${id} não encontrado` });
    return;
  }

  res.json(text);
};

// executa a rotina de atualização de um post e retorna o resultado
// o id do post a ser atualizado é passado como parâmetro na rota, por exemplo:
// PATCH /text/123
// onde 123 é o id do post a ser atualizado
export const updatePost = (req: Request, res: Response): void => {
  const { id } = req.params;
  const updatedText = textService.updateText(id, req.body);

  if (!updatedText) {
    res.status(404).json({ message: `Texto com ${id} não encontrado` });
    return;
  }

  res.json({ message: `Texto com ${id} editado com sucesso` });
};

// executa a rotina de exclusão de um post e retorna o resultado
// o id do post a ser excluído é passado como parâmetro na rota, por exemplo:
// DELETE /text/123
// onde 123 é o id do post a ser excluído
// retorna a lista de textos restantes após a exclusão
export const deletePost = (req: Request, res: Response): void => {
  const { id } = req.params;
  const filteredList = textService.deleteTextById(id);

  res.json({ message: `Texto com ${id} excluído com sucesso`, filteredList });
};
