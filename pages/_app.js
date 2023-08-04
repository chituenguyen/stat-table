import "../styles/globals.css";
import { ReactQueryProvider } from "./ReactQueryProvideer";

function MyApp({ Component, pageProps }) {
  return (
    <ReactQueryProvider>
      <Component {...pageProps} />
    </ReactQueryProvider>
  );
}

export default MyApp;
