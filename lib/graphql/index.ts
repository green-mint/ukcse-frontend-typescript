import { ApolloClient, ApolloLink, from, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { onError } from "@apollo/client/link/error";
import { offsetLimitPagination } from "@apollo/client/utilities";

const authLink = new ApolloLink((operation, forward) => {
  // retrive the token from local storage if local storage is available
  let token;
  if (typeof window !== "undefined") token = localStorage.getItem("token");

  // add the token to the headers
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : "",
    },
  });

  return forward(operation);
});

const uploadLink = createUploadLink({
  uri: process.env.NEXT_PUBLIC_GQL_ENDPOINT,
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
  // link: from([authLink, uploadLink]),
  link: from([authLink, errorLink, uploadLink]),
  cache: new InMemoryCache({
    addTypename: false,
    typePolicies: {
      Query: {
        fields: {
          posts: {
            keyArgs: false,
            merge(existing, incoming, { args: { filter } }) {
              const merged = existing ? [...existing] : [];
              if (incoming) {
                if (filter) {
                  const { page = 0, take } = filter;
                  for (let i = 0; i < incoming.length; ++i) {
                    merged[take * page + i] = incoming[i];
                  }
                } else {
                  merged.push.apply(merged, incoming);
                }
              }
              return merged;
            },
          },
          products: {
            keyArgs: false,
            merge(existing, incoming, { args: { filter } }) {
              const merged = existing ? [...existing] : [];
              if (incoming) {
                if (filter) {
                  const { page = 0, take } = filter;
                  for (let i = 0; i < incoming.length; ++i) {
                    merged[take * page + i] = incoming[i];
                  }
                } else {
                  merged.push.apply(merged, incoming);
                }
              }
              return merged;
            },
          },
        },
      },
    },
  }),
});

export default client;
