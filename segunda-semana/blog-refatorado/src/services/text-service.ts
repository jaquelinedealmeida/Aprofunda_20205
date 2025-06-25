import textFactory from "../factories/text-factory";
import TextStorage from "../storage/text-storage";

interface TextData {
  title: string;
  content: string;
  status: string;
  author: string;
}

interface Text extends TextData {
  id: string;
  created_at: string;
}

export default {
  createText: ({ title, content, status, author }: TextData): Text => {
    const newText = textFactory.create({ title, content, status, author });
    TextStorage.add(newText);
    return newText;
  },

  getAllTexts: (): Text[] => {
    return TextStorage.getAll();
  },
};
