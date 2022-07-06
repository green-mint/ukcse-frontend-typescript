import { ApolloClient, ApolloLink, from, InMemoryCache } from "@apollo/client"
import { createUploadLink } from "apollo-upload-client"
import { onError } from "@apollo/client/link/error";

 
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
})

const client = new ApolloClient({
  // link: from([authLink, uploadLink]),
  link: from([authLink, errorLink, uploadLink]),
  cache: new InMemoryCache({ addTypename: false }),
})

export default client