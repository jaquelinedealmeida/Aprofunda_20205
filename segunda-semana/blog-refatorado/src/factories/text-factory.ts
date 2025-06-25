import { v4 as uuidv4 } from "uuid";
import { Text } from "../models/text-model";

// Interface que define a estrutura de dados necessária para criar um novo texto
// Contém os campos obrigatórios que devem ser preenchidos ao criar um novo texto
// e que serão utilizados pela fábrica de textos para garantir a consistência dos dados
interface TextData {
  title: string;
  content: string;
  status: string;
  author: string;
}

// Fábrica de textos para criar novos objetos do tipo Text
// Utiliza o padrão de projeto Factory para encapsular a lógica de criação de objetos
// e garantir que todos os textos criados tenham a estrutura correta
// e os campos necessários preenchidos corretamente
// e também para garantir que o ID seja gerado de forma única
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
