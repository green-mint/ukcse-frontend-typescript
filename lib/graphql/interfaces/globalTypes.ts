/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum FilterOrder {
  asc = "asc",
  desc = "desc",
}

export enum Membership {
  basic = "basic",
  gold = "gold",
  none = "none",
  premium = "premium",
}

export enum ProductOrderByFields {
  description = "description",
  memberPrice = "memberPrice",
  price = "price",
  stock = "stock",
  title = "title",
}

export enum PostOrderByFields {
  title = "title",
  publishedAt = "publishedAt",
  categoryName = "categoryName",
}

export enum Role {
  admin = "admin",
  user = "user",
}

export interface CheckoutItemInput {
  productId: string;
  quantity: number;
}

export interface CreateCheckoutSessionInput {
  items: CheckoutItemInput[];
  successUrl: string;
  cancelUrl: string;
}

export interface CreatePostInput {
  title: string;
  content: string;
  tags: (string | null)[];
  publishedAt: string;
  category: string;
  image?: string | null;
}

export interface CreateProductInput {
  title: string;
  description: string;
  price: number;
  memberPrice: number;
  stock: number;
  images?: (string | null)[] | null;
  videos?: (string | null)[] | null;
  FAQs?: (FAQInput | null)[] | null;
}

export interface FAQInput {
  question: string;
  answer: string;
}

export interface ProductFilter {
  take?: number | null;
  orderBy?: ProductOrderByFields | null;
  order?: FilterOrder | null;
  page?: number | null;
}

export interface PostFilter {
  take?: number | null;
  orderBy?: PostOrderByFields | null;
  order?: FilterOrder | null;
  page?: number | null;
  category?: string | null | string[];
}

export interface ProductInquiryInput {
  productId: string;
  name: string;
  email: string;
  message: string;
}

export interface SetCarouselImagesInput {
  images: string[];
}

export interface SetPopularPostsInput {
  posts: string[];
}

export interface SignInInput {
  email: string;
  password: string;
}

export interface SignUpInput {
  name: string;
  email: string;
  password: string;
}

export interface UpdatePostInput {
  title?: string | null;
  content?: string | null;
  tags?: (string | null)[] | null;
  publishedAt?: string | null;
  category?: string | null;
  image?: string | null;
}

export interface UpdateProductInput {
  title?: string | null;
  description?: string | null;
  price?: number | null;
  memberPrice?: number | null;
  stock?: number | null;
  images?: (string | null)[] | null;
  videos?: (string | null)[] | null;
  FAQs?: (FAQInput | null)[] | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
