export interface Text {
  id: string;
  title: string;
  content: string;
  status: string;
  author: string;
  created_at: string;
}

class TextStorage {
  private static instance: TextStorage;
  private texts: Text[] = [];

  private constructor() {}

  public static getInstance(): TextStorage {
    if (!TextStorage.instance) {
      TextStorage.instance = new TextStorage();
    }
    return TextStorage.instance;
  }

  public add(text: Text): void {
    this.texts.push(text);
  }

  public getAll(): Text[] {
    return this.texts;
  }
}

export default TextStorage.getInstance();
