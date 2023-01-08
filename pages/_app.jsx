import "../styles/globals.css";
import Layout from "../@core/Layout/Layout";
import BussinessData from "../@core/components/BussinessData";
// import LanguageProvider from "../@core/constants/Language";
import "swiper/css";
import "swiper/css/pagination";
import { Provider } from "react-redux";
import store from "../store/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <BussinessData>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </BussinessData>
    </Provider>
  );
}
