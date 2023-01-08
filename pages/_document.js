import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preconnect"
          href="/public//Fonts/iransansX family/IRANSansX-Regular.ttf"
        />
      </Head>

      <body>
        <Main />
        <div id="portal"></div>
        <div id="sidebar"></div>
        <NextScript />
      </body>
    </Html>
  );
}
