/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPosts
// ====================================================

import { PostFilter } from "./globalTypes";

export interface GetPosts_posts_author {
  __typename: "User";
  name: string;
}

export interface GetPosts_posts {
  __typename: "Post";
  id: string;
  title: string;
  author: GetPosts_posts_author;
  publishedAt: string;
  category: string;
  image: string;
}

export interface GetPosts {
  posts: (GetPosts_posts | null)[];
}

export interface GetPostsVariables {
  filter?: PostFilter | null;
}