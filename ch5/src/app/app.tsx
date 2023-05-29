// eslint-disable-next-line @typescript-eslint/no-unused-vars

import "./app.module.scss";
import "./app.module.scss";
import Layout from "./components/Layout";
import { ContextProvider } from "./context/Context";
// import NxWelcome from "./nx-welcome";

export function App() {
  return (
    <>
      {/* <NxWelcome title="ch5" /> */}
      {/* <div /> */}
      <ContextProvider>
        <Layout />
      </ContextProvider>
    </>
  );
}

export default App;
