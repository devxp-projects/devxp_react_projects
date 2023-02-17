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
const theme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      primary: {
        main: "#F54748",
      },
      mode: mode,

      secondary: {
        main: "#FDC55E",
      },
      error: {
        main: red.A400,
      },
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            color: mode == "light" ? "#191919" : "#FFFFFF",
          },
        },
      },

      MuiButton: {
        styleOverrides: {
          root: {
            variant: "contained",
            borderRadius: "100px",
            padding: "10px 20px 11px 20px",
          },
        },
      },
    },
  });

export default theme;
