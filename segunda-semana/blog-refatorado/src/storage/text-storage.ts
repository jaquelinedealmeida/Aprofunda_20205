// representa a estrutura de um texto com definição de tipos
export interface Text {
  id: string;
  title: string;
  content: string;
  status: string;
  author: string;
  created_at: string;
}
// Class para armazenar textos
// Padrão Singleton para garantir que haja apenas uma instância de TextStorage
class TextStorage {
  // Variável estática para armazenar a instância única
  // Com atributo privado para garantir que a instância não possa ser acessada diretamente

  private static instance: TextStorage;
  // Variável para armazenar os textos
  private texts: Text[] = [];
  // Construtor privado para evitar a criação de instâncias fora da classe
  private constructor() {}
  // e só pode ser acessada através do método getInstance
  public static getInstance(): TextStorage {
    if (!TextStorage.instance) {
      TextStorage.instance = new TextStorage();
    }
    return TextStorage.instance;
  }

  // Método para adicionar um texto ao armazenamento
  public add(text: Text): void {
    this.texts.push(text);
  }
  // Método para retornar todos os textos armazenados
  // publico para poder ser acessado de fora da classe
  // e retorna um array de objetos do tipo Text que foi definido acima
  public getAll(): Text[] {
    return this.texts;
  }

  // Método para retornar um texto específico pelo ID
  // recebe um id do tipo string e retorna um objeto do tipo Text ou undefined
  public getById(id: string): Text | undefined {
    return this.texts.find((text) => text.id === id);
  }

  // Método deletar um texto pelo ID
  public deleteText(id: string): Text[] {
    this.texts = this.texts.filter((text) => text.id !== id);
    return this.texts;
  }
}

export default TextStorage.getInstance();
