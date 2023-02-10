import useMediaQuery from "@mui/material/useMediaQuery";
import styles from "../styles/index.module.css";

const Index = () => {
  const isDarkModeEnabled = useMediaQuery("(prefers-color-scheme: dark)"); // returns true if browser dark mode is enabled

  return (
    <div>
      <header className={styles.header}>
        <img
          src={`/logo-${isDarkModeEnabled ? "light" : "dark"}.svg`}
          alt="Logo"
        />
        <img
          src={`/menu-${isDarkModeEnabled ? "light" : "dark"}.svg`}
          alt=""
          className={styles.menu}
        />
        <div className={styles.links}>
          <p>Today Special Offers</p>
          <p>Why FoodHut</p>
          <p>Our Menu</p>
          <p>Our Popular Food</p>
          <p>Download App</p>
        </div>
      </header>
    </div>
  );
};

export default Index;
