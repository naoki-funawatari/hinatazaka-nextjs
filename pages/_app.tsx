import type { AppProps } from "next/app";
// import "../styles/globals.scss";
// import "../styles/bootstrap/bootstrap.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
