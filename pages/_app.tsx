import GlobalStyle from "components/GlobalStyle";
import "styles/fonts/font.css";
import React from "react";

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
