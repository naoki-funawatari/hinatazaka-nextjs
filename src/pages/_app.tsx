import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import "@/styles/globals.scss";
import "@/styles/bootstrap/bootstrap.scss";

const Component = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>日向坂46</title>
      </Head>
      <div className="app">
        <Header />
        <Navigation />
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default Component;
