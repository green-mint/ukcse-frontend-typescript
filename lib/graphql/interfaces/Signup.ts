/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SignUpInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: Signup
// ====================================================

export interface Signup_signUp {
  __typename: "User";
  name: string;
  email: string;
}

export interface Signup {
  signUp: Signup_signUp;
}

export interface SignupVariables {
  input: SignUpInput;
}
