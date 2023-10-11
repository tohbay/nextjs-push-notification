// import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { registerServiceWorker } from "../utils/serviceWorker";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    async function setUpServiceWorker() {
      try {
        await registerServiceWorker();
      } catch (error) {
        console.error(error);
      }
    }

    setUpServiceWorker();
  }, []);

  return <Component {...pageProps} />;
}
