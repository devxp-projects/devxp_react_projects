import { ThemeProvider, createTheme } from "@mui/material";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRef } from "react";
import theme from "school-landing-page/utils/themes";
import "./styles.css";

function CustomApp({ Component, pageProps }: AppProps) {
  const _theme = useRef(theme("light"))
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>Welcome to school-landing-page!</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Open+Sans:wght@400;600;700&family=Poppins:wght@400;500;600&family=Source+Sans+Pro:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="app">
        <ThemeProvider theme={_theme.current}>
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </>
  );
}

export default CustomApp;
