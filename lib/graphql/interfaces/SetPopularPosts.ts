/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SetPopularPostsInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: SetPopularPosts
// ====================================================

export interface SetPopularPosts_setPopularPosts {
  __typename: "Post";
  id: string;
}

export interface SetPopularPosts {
  setPopularPosts: (SetPopularPosts_setPopularPosts | null)[];
}

export interface SetPopularPostsVariables {
  input: SetPopularPostsInput;
}
