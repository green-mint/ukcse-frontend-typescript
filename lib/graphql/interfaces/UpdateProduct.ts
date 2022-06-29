/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateProductInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateProduct
// ====================================================

export interface UpdateProduct_updateProduct {
  __typename: "Product";
  id: string;
}

export interface UpdateProduct {
  updateProduct: UpdateProduct_updateProduct;
}

export interface UpdateProductVariables {
  updateProductId: string;
  input: UpdateProductInput;
}
