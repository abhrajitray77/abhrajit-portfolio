import { HttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
  const httpLink = new HttpLink({
    uri: "https://gql.hashnode.com",
  });

  // Set up an Apollo link that adds the auth token to the headers
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.HASHAPI}`,
      },
    };
  });

  // Create the Apollo client with the http link and auth link
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: authLink.concat(httpLink),
  });
});