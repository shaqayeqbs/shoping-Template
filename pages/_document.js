import { Head, Html, Main, NextScript } from "next/document";
import { Suspense } from "react";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
        <link
          rel="preconnect"
          href="/public//Fonts/iransansX family/IRANSansX-Regular.ttf"
        />
        {/* <link rel="manifest" href="/manifest.json" id="manifest"></link> */}

        <link rel="icon" type="image/x-icon" href="/icon-256x256.png" />
      </Head>
      <body>
        <Suspense fallback={<p className="bg-[red]">Loading feed...</p>}>
          <Main />
          <div id="portal"></div>
          <div id="sidebar"></div>
          <div id="search"></div>
          <NextScript />
        </Suspense>
      </body>
    </Html>
  );
}
