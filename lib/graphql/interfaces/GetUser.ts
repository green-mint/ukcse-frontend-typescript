/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUser
// ====================================================

export interface GetUser_users {
  __typename: "User";
  id: string;
  name: string;
  email: string;
}

export interface GetUser {
  users: (GetUser_users | null)[];
}
