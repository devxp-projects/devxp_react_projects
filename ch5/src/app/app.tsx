// eslint-disable-next-line @typescript-eslint/no-unused-vars

import FirstRowCards from "./FirstRowCards/FirstRowCards";
import SalesSummaryRow from "./SalesSummaryRow/SalesSummaryRow";
import "./app.module.scss";
// import styles from './app.module.scss';
// import NxWelcome from "./nx-welcome";
import Layout from "./components/Layout";
import "./app.module.scss";
import Layout from './components/Layout';
import { ContextProvider } from "./context/Context";

export function App() {
  return (
    <>
      <FirstRowCards />
      <SalesSummaryRow />
      {/* <NxWelcome title="ch5" /> */}
      {/* <div /> */}
    <ContextProvider>
      <Layout />
    </ContextProvider>
  );
}

export default App;
