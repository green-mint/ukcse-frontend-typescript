/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SignInInput, Membership, Role } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: Signin
// ====================================================

export interface Signin_signIn_user {
  __typename: "User";
  email: string;
  id: string;
  membership: Membership;
  role: Role;
}

export interface Signin_signIn {
  __typename: "SignedInUser";
  token: string;
  user: Signin_signIn_user;
}

export interface Signin {
  signIn: Signin_signIn;
}

export interface SigninVariables {
  input: SignInInput;
}
