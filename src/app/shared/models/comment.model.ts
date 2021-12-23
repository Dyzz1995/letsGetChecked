export class Comment {
  id!: number;
  postId!: number;
  user!: string;
  date!: string;
  content!: string;
  parent_id?: number;
}
