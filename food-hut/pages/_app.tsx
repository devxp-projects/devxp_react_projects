import { AppProps } from "next/app";
import Head from "next/head";
import "./styles.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "food-hut/utils/theme";
import useMediaQuery from "@mui/material/useMediaQuery";
import { CssBaseline } from "@mui/material";
// tss-react ssr setup
import { createEmotionSsrAdvancedApproach } from "tss-react/next/pagesDir";
const { augmentDocumentWithEmotionCache, withAppEmotionCache } =
  createEmotionSsrAdvancedApproach({ key: "css" });
export { augmentDocumentWithEmotionCache };
// tss-react ssr setup

function CustomApp({ Component, pageProps }: AppProps) {
  // MUI useMediaQuery hook for checking which mode (light or dark) a broswer is set to
  const isDarkModeEnabled = useMediaQuery("(prefers-color-scheme: dark)"); // returns true if browser dark mode is enabled
  // MUI useMediaQuery hook for checking which mode (light or dark) a broswer is set to
  return (
    <>
      <Head>
        <title>Welcome to food-hut!</title>
      </Head>
      <ThemeProvider theme={theme(isDarkModeEnabled ? "dark" : "light")}>
        <CssBaseline />
        <main className="app">
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}

export default withAppEmotionCache(CustomApp);
