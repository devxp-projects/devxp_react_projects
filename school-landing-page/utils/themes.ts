import { Open_Sans } from "@next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const sans = Open_Sans({
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
        main: "#09B451",
      },
      mode: mode,

      secondary: {
        main: "#E7FAEF",
      },
      error: {
        main: red.A400,
      },
    },
    typography: {
      fontFamily: sans.style.fontFamily,
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            color: mode == "light" ? "#191919" : "#FFFFFF",
          },
        },
      },
    },
  });

export default theme;
