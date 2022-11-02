import GlobalStyle from "styles/GlobalStyle";
import "fonts/fonts.css";
import "styles/Skeleton.css";

import React from "react";
import store from "redux/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <ThemeProvider theme={{ ...theme }}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}
