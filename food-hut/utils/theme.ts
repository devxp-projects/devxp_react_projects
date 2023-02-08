import { Roboto } from "@next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Creating a theme instance.
const theme = createTheme({
  palette: {
    // main color for light theme
    primary: {
      main: "#FFFFFF",
    },

    // main color for dark theme
    secondary: {
      main: "#0D0D0D",
    },

    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;

// use the exported theme object in components where needed.
