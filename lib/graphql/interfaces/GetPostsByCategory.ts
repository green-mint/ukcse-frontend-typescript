/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPostsByCategory
// ====================================================

export interface GetPostsByCategory_postsInCategory_author {
  __typename: "User";
  name: string;
}

export interface GetPostsByCategory_postsInCategory {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  author: GetPostsByCategory_postsInCategory_author;
  image: string;
}

export interface GetPostsByCategory {
  postsInCategory: (GetPostsByCategory_postsInCategory | null)[];
}

export interface GetPostsByCategoryVariables {
  category: string;
}
