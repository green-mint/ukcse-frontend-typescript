/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProduct
// ====================================================

export interface GetProduct_product_FAQs {
  __typename: "FAQ";
  question: string;
  answer: string;
}

export interface GetProduct_product {
  __typename: "Product";
  id: string;
  title: string;
  description: string;
  price: number;
  memberPrice: number;
  stock: number;
  images: string[];
  videos: (string | null)[];
  FAQs: GetProduct_product_FAQs[];
}

export interface GetProduct {
  product: GetProduct_product | null;
}

export interface GetProductVariables {
  productId: string;
}
