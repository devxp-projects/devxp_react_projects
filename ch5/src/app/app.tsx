// eslint-disable-next-line @typescript-eslint/no-unused-vars

import SalesSummaryRow from "./SalesSummaryRow/SalesSummaryRow";
import "./app.module.scss";
// import styles from './app.module.scss';
// import NxWelcome from "./nx-welcome";
import { Announcement } from './components/Announcement';
import Layout from './components/Layout';

export function App() {
  return (
    <>
      <SalesSummaryRow />
      {/* <NxWelcome title="ch5" /> */}
      {/* <div /> */}
      {/* <Announcement /> */}
      <Layout />
    </>
  );
}

export default App;
