import { gql } from "@apollo/client";

export const SIGNUP = gql`
  mutation Signup($input: SignUpInput!) {
    signUp(input: $input) {
      name
      email
    }
  }
`;

export const SIGNIN = gql`
  mutation Signin($input: SignInInput!) {
    signIn(input: $input) {
      token
      user {
        name
        email
        id
        membership
        role
      }
    }
  }
`;

export const CREATE_POST = gql`
  mutation CreatePost($input: CreatePostInput!) {
    createPost(input: $input) {
      id
    }
  }
`;

export const GET_USERS = gql`
  query GetUser {
    users {
      id
      name
      email
    }
  }
`;

export const GET_POST = gql`
  query GetPost($postId: ID!) {
    post(id: $postId) {
      id
      title
      content
      tags
      publishedAt
      category
      author {
        id
        name
      }
    }
  }
`;

export const GET_PRODUCTS = gql`
  query GetProducts($filter: ProductFilter) {
    products(filter: $filter) {
      id
      title
      price
      memberPrice
      thumbnail
    }
  }
`;

export const GET_PRODUCT = gql`
  query GetProduct($productId: ID!) {
    product(id: $productId) {
      id
      title
      description
      price
      memberPrice
      stock
      images
      videos
      FAQs {
        question
        answer
      }
    }
  }
`;

export const UPDATE_POST = gql`
  mutation UpdatePosts($updatePostId: ID!, $input: UpdatePostInput!) {
    updatePost(id: $updatePostId, input: $input) {
      id
    }
  }
`;

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      content
      author {
        name
      }
      publishedAt
      category
      image
    }
  }
`;

export const GET_POSTS_BY_CATEGORY = gql`
  query GetPostsByCategory($category: String!) {
    postsInCategory(category: $category) {
      id
      title
      content
      author {
        name
      }
      image
    }
  }
`;

export const GET_CATEGORY = gql`
  query GetCategories {
    categories
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($updateProductId: ID!, $input: UpdateProductInput!) {
    updateProduct(id: $updateProductId, input: $input) {
      id
    }
  }
`;

export const GET_POST_WITH_CATEGORIES = gql`
  query PostsWithCategories($postId: ID!) {
    post(id: $postId) {
      id
      title
      content
      tags
      publishedAt
      category
      image
    }
    categories
  }
`;

export const DELETE_POST = gql`
  mutation DeletePost($deletePostId: ID!) {
    deletePost(id: $deletePostId) {
      id
    }
  }
`;

export const ENQUIRE_PRODUCT = gql`
  mutation ProductInquiry($input: ProductInquiryInput!) {
    productInquiry(input: $input)
  }
`;

export const CREATE_CHECKOUT = gql`
  mutation CreateCheckoutSession($input: CreateCheckoutSessionInput!) {
    createCheckoutSession(input: $input) {
      redirectUrl
      sessionId
    }
  }
`;

export const CREATE_PRODUCT = gql`
  mutation CreateProduct($input: CreateProductInput!) {
    createProduct(input: $input) {
      id
    }
  }
`;

export const UPLOAD_FILE = gql`
  mutation UploadFile($file: Upload!) {
    uploadFile(file: $file) {
      filename
      mimetype
      encoding
    }
  }
`;

export const SET_POPULAR_POSTS = gql`
  mutation SetPopularPosts($input: SetPopularPostsInput!) {
    setPopularPosts(input: $input) {
      id
    }
  }
`;

export const GET_POPULAR_POSTS = gql`
  query PopularPosts {
    popularPosts {
      id
      title
      content
      author {
        name
      }
      publishedAt
      image
      category
    }
  }
`;

export const GET_CAROUSEL_IMAGES = gql`
  query GetCarouselImage {
    carouselImages
  }
`;

export const UPDATE_CAROUSEL_IMAGES = gql`
  mutation SetCarouselImages($input: SetCarouselImagesInput!) {
    setCarouselImages(input: $input)
  }
`;
