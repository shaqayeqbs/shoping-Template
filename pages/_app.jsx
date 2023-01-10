import "../styles/globals.css";
import Layout from "../@core/Layout/Layout";
import BussinessData from "../@core/components/BussinessData";
// import LanguageProvider from "../@core/constants/Language";
import "swiper/css";
import "swiper/css/pagination";
// import { Provider } from "react-redux";
// import store from "../store/store";
import { wrapper } from "../store/store";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

function App({ Component, pageProps }) {
  return (
    // <Provider store={store}>
    <BussinessData>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BussinessData>
    // </Provider>
  );
}

export default wrapper.withRedux(App);
