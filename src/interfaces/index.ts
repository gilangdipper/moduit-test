export interface IProduct {
  id: number;
  category?: number;
  title: string;
  description: string;
  footer: string;
  tags?: string[];
  createdAt?: string;
}
