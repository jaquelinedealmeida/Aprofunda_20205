import { Request, Response } from "express";

export const createPost = (req: Request, res: Response): void => {
  const { title, content, status, author } = req.body;
  const newText = TextService.createText({ title, content, status, author });
  res
    .status(201)
    .json({ message: `Texto ${newText.title} criado com sucesso` });
};

export const listPosts = (req: Request, res: Response): void => {
  const texts = TextService.getAllTexts();
  res.json(texts);
};
