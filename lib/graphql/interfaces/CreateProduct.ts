/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateProductInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateProduct
// ====================================================

export interface CreateProduct_createProduct {
  __typename: "Product";
  id: string;
}

export interface CreateProduct {
  createProduct: CreateProduct_createProduct;
}

export interface CreateProductVariables {
  input: CreateProductInput;
}
