/* eslint-disable react/jsx-props-no-spreading */
import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-use-theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider themes={["dark", "light", "tech"]}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
