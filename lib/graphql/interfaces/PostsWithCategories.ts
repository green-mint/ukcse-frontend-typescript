/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PostsWithCategories
// ====================================================

export interface PostsWithCategories_post {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  tags: (string | null)[];
  publishedAt: string;
  category: string;
  image: string;
}

export interface PostsWithCategories {
  post: PostsWithCategories_post | null;
  categories: (string | null)[];
}

export interface PostsWithCategoriesVariables {
  postId: string;
}
