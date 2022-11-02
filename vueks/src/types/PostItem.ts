import type { Post } from "./Post";

export type PostItem = Omit<Post, 'text'>;