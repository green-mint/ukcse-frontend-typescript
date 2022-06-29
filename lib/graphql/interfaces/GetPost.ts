/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPost
// ====================================================

export interface GetPost_post_author {
  __typename: "User";
  id: string;
  name: string;
}

export interface GetPost_post {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  tags: (string | null)[];
  publishedAt: string;
  category: string;
  author: GetPost_post_author;
}

export interface GetPost {
  post: GetPost_post | null;
}

export interface GetPostVariables {
  postId: string;
}
