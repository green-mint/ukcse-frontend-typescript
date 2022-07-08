/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdatePostInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdatePosts
// ====================================================

export interface UpdatePosts_updatePost {
  __typename: "Post";
  id: string;
}

export interface UpdatePosts {
  updatePost: UpdatePosts_updatePost;
}

export interface UpdatePostsVariables {
  updatePostId: string | string[] | undefined;
  input: UpdatePostInput;
}
