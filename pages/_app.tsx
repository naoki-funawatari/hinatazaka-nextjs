import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Header from "../src/components/Header";
import Navigation from "../src/components/Navigation";
import "../src/styles/globals.scss";
import "../src/styles/bootstrap/bootstrap.scss";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
