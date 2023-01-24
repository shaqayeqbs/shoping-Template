import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
// import Layout from "../@core/Layout/Layout";
import store from "../store/store";
import "../styles/globals.css";

import dynamic from "next/dynamic";
const Layout = dynamic(() => import("../@core/Layout/Layout"));
// const { ToastContainer } = dynamic(() => import("react-toastify"));

export default function App({ Component, pageProps }) {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
}
