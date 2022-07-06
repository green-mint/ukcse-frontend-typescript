import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.min.css";
import type { AppProps } from "next/app";
import client from "../lib/graphql";
import { ApolloProvider } from "@apollo/client";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "../lib/auth/AuthProvider";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        {getLayout(<Component {...pageProps} />)}
        <ToastContainer />
      </AuthProvider>
    </ApolloProvider>
  );
}

export default MyApp;
