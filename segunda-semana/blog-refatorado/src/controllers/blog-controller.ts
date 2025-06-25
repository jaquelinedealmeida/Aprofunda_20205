import { Request, Response } from "express";
import textService from "../services/text-service";

export const createPost = (req: Request, res: Response): void => {
  const { title, content, status, author } = req.body;
  const newText = textService.createText({ title, content, status, author });
  res
    .status(201)
    .json({ message: `Texto ${newText.title} criado com sucesso` });
};

export const listPosts = (req: Request, res: Response): void => {
  const texts = textService.getAllTexts();
  res.json(texts);
};
