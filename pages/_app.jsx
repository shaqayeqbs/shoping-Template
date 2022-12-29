import "../styles/globals.css";
import Layout from "../@core/Layout/Layout";
// import LanguageProvider from "../@core/constants/Language";
import "swiper/css";
import "swiper/css/pagination";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
