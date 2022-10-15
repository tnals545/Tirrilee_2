import GlobalStyle from "components/GlobalStyle";
import "styles/fonts/font.css";
import React from "react";
import store from "redux/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
