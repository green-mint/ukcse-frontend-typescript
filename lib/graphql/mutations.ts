import { gql } from "@apollo/client";

export const SIGNIN = gql`
  mutation Signin($input: SignInInput!) {
    signIn(input: $input) {
      token
      user {
        email
        id
        membership
        role
      }
    }
  }
`;