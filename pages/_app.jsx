import "../styles/globals.css";
import Layout from "../@core/Layout/Layout";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Provider } from "react-redux";
import store from "../store/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <ToastContainer
          position="top-right"
          theme="colored"
          autoClose={4000}
          rtl={true}
          limit={2}
        />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
