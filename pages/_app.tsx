import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import "@/styles/globals.scss";
import "@/styles/bootstrap/bootstrap.scss";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    const loadBootstrap = async () => {
      await import("@/plugin/bootstrap/index.esm");
    };

    if (process.browser) {
      loadBootstrap();
    }
  }, []);

  return (
    <div className="app">
      <Head>
        <title>日向坂46</title>
      </Head>
      <Header />
      <Navigation />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
