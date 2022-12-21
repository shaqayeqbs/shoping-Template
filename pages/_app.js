import '../styles/globals.css'
import Layout from '../@core/Layout/Layout'
import LanguageProvider from '../@core/constants/Language'

export default function App({ Component, pageProps }) {

  return( 
    <LanguageProvider>
    <Layout>
    <Component {...pageProps} />
  </Layout>
  </LanguageProvider>)
}


