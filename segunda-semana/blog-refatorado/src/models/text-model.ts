export class Text {
  id: string;
  title: string;
  content: string;
  status: string;
  author: string;
  created_at: string;

  constructor({
    id,
    title,
    content,
    status,
    author,
    created_at,
  }: {
    id: string;
    title: string;
    content: string;
    status: string;
    author: string;
    created_at: string;
  }) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.status = status;
    this.author = author;
    this.created_at = created_at;
  }
}
