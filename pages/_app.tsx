import GlobalStyle from "../components/GlobalStyle";
import React from "react";

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
