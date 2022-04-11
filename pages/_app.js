import "../styles/globals.css";
import Axios from "axios";
Axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
