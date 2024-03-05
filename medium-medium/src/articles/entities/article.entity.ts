import { Article } from '@prisma/client';
export class ArticleEntity extends Article {
  id: number;
  title: string;
  description: string;
  body: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}
