import { v4 as uuidv4 } from "uuid";
import { Text } from "../models/text-model";

interface TextData {
  title: string;
  content: string;
  status: string;
  author: string;
}

export default {
  create: ({ title, content, status, author }: TextData): Text => {
    return new Text({
      id: uuidv4(),
      title,
      content,
      status,
      author,
      created_at: new Date().toLocaleDateString("pt-BR"),
    });
  },
};
