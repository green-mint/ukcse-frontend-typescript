/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PopularPosts
// ====================================================

export interface PopularPosts_popularPosts_author {
  __typename: "User";
  name: string;
}

export interface PopularPosts_popularPosts {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  author: PopularPosts_popularPosts_author;
  publishedAt: string;
  image: string;
  category: string;
}

export interface PopularPosts {
  popularPosts: (PopularPosts_popularPosts | null)[];
}
