import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider as AppProvider } from "../context/ApiContext";
import "../styles/global.css";

import "../localization/i18n";

import Head from "next/head";
import Layout from "components/layout";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SD Shop</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools key="react-query-devtools" initialIsOpen={false} />
        <AppProvider key="rootAppProvider">
          <Layout>
            <Component key="rootComponent" {...pageProps} />
          </Layout>
        </AppProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
