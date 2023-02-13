import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ImageListItem, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import theme from "food-hut/utils/theme";
import IconButton from "@mui/material/IconButton";
import styles from "food-hut/styles/Navbar.module.css";

const Navbar = () => {
  const isDarkModeEnabled = useMediaQuery("(prefers-color-scheme: dark)"); // returns true if browser dark mode is enabled
  const TypographySx = { margin: "0 0.5rem", fontSize: "1.1rem" };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            padding: ".5rem 1rem",
            justifyContent: "center",
            background: isDarkModeEnabled ? "black" : "white",
          }}
        >
          <ImageListItem sx={{ mr: "auto" }}>
            <img
              src={`/logo-${isDarkModeEnabled ? "light" : "dark"}.svg`}
              alt="logo"
            />
          </ImageListItem>
          <Typography
            variant="h6"
            className={styles.p}
            component="div"
            sx={TypographySx}
          >
            Today Special Offer
          </Typography>
          <Typography
            variant="h6"
            className={styles.p}
            component="div"
            sx={TypographySx}
          >
            Why FoodHut
          </Typography>
          <Typography
            variant="h6"
            className={styles.p}
            component="div"
            sx={TypographySx}
          >
            Our Menu
          </Typography>
          <Typography
            variant="h6"
            className={styles.p}
            component="div"
            sx={TypographySx}
          >
            Our Popular Food
          </Typography>
          <Typography
            variant="h6"
            className={styles.p}
            component="div"
            sx={{
              ...TypographySx,
              background: theme(isDarkModeEnabled ? "dark" : "light").palette
                .primary.main,
              padding: ".5rem 1rem",
              borderRadius: "100px",
            }}
          >
            Download App
          </Typography>
          <ImageListItem sx={{ ml: 2 }} className={styles.menu}>
            <img
              src={`/menu-${isDarkModeEnabled ? "light" : "dark"}.svg`}
              alt="menu"
            />
          </ImageListItem>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
