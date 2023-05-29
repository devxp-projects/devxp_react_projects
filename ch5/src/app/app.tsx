import "./app.module.scss";
import Layout from './components/Layout';
import { ContextProvider } from "./context/Context";

export function App() {

  return (
    <ContextProvider>
      <Layout />
    </ContextProvider>
  );
}

export default App;
