import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/scrollbar";
import { useState, useEffect } from "react";
import store from "../store/store";
import "../styles/globals.css";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Layout from "../@core/Layout/Layout";
import Loading from "../templates/shop/@core/components/Loading/Loading";
import LoadingSpinner from "../@core/UI/LoadingSpinner";
const ToastContainer = dynamic(() =>
  import("react-toastify").then((mod) => mod.ToastContainer)
);
// const Layout = dynamic(() => import("../@core/Layout/Layout"));
export default function App({ Component, pageProps }) {
  let persistor = persistStore(store);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (pageProps && Component && Layout && Component) {
      setIsLoading(false);
    }
  }, [pageProps, Component, Layout, Component]);
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Suspense fallback={<Loading />}>
            <Layout>
              <ToastContainer
                position="top-right"
                theme="colored"
                autoClose={4000}
                rtl={true}
                limit={2}
              />

              <Suspense fallback={<Loading />}>
                <Component {...pageProps} />
              </Suspense>
            </Layout>
          </Suspense>
        </PersistGate>
      </Provider>
    </Suspense>
  );
}
