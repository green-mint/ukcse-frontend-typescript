/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductFilter } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetProducts
// ====================================================

export interface GetProducts_products {
  __typename: "Product";
  id: string;
  title: string;
  price: number;
  memberPrice: number;
  thumbnail: string | null;
}

export interface GetProducts {
  products: (GetProducts_products | null)[];
}

export interface GetProductsVariables {
  filter?: ProductFilter | null;
}
