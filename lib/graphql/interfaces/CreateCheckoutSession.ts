/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateCheckoutSessionInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateCheckoutSession
// ====================================================

export interface CreateCheckoutSession_createCheckoutSession {
  __typename: "CheckoutSession";
  redirectUrl: string;
  sessionId: string;
}

export interface CreateCheckoutSession {
  createCheckoutSession: CreateCheckoutSession_createCheckoutSession;
}

export interface CreateCheckoutSessionVariables {
  input: CreateCheckoutSessionInput;
}
