import textFactory from "../factories/text-factory";
import TextStorage from "../storage/text-storage";

// Define a estrutura de dados para um texto
// que será usada para criar novos textos e atualizar textos existentes
// e para definir o tipo de dados que serão retornados pela API
interface TextData {
  title: string;
  content: string;
  status: string;
  author: string;
}

// Define a estrutura de dados completa de um texto através de herança da interface TextData
// e inclui os campos adicionais necessários para o armazenamento gerados automaticamente
interface Text extends TextData {
  id: string;
  created_at: string;
}
// Define o serviço de texto que será usado para criar, ler, atualizar e excluir textos
// e que será usado pelos controladores para manipular os textos
export default {
  // Método para criar um novo texto
  createText: ({ title, content, status, author }: TextData): Text => {
    const newText = textFactory.create({ title, content, status, author });
    TextStorage.add(newText);
    return newText;
  },
  // Método para obter todos os textos armazenados
  getAllTexts: (): Text[] => {
    return TextStorage.getAll();
  },
  // Método para obter um texto específico pelo ID
  getTextById: (id: string): Text | undefined => {
    return TextStorage.getById(id);
  },

  // Método para atualizar um texto existente
  updateText: (id: string, data: Partial<TextData>): Text | null => {
    const text = TextStorage.getById(id);

    if (!text) {
      return null;
    }

    if (data.title != null) {
      text.title = data.title;
    }

    if (data.content != null) {
      text.content = data.content;
    }

    if (data.status != null) {
      text.status = data.status;
    }

    if (data.author != null) {
      text.author = data.author;
    }

    return text;
  },

  // Método para excluir um texto pelo ID
  deleteTextById: (id: string): Text[] => {
    return TextStorage.deleteText(id);
  },
};
