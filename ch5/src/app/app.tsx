// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import styles from './app.module.scss';
// import NxWelcome from "./nx-welcome";
import { ThemeProvider } from "@mui/material";
import { theme } from './themes';
import Layout from './components/Layout';
import Announcement from "./components/Announcement";

export function App() {

  return (
    <>
      {/* <NxWelcome title="ch5" /> */}
      {/* <div /> */}
      <Layout />
    </>
  );
}

export default App;
