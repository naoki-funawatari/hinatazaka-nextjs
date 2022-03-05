import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import "@/styles/globals.scss";
import "@/styles/bootstrap/bootstrap.scss";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
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
