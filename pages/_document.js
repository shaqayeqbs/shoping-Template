import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preconnect"
          href="/public//Fonts/iransansX family/IRANSansX-Regular.ttf"
        />
        <link rel="manifest" href="/manifest.json" id="manifest"></link>

        <link rel="icon" type="image/x-icon" href="/icon-256x256.png" />
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
