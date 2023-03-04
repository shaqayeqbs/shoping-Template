import { Head, Html, Main, NextScript } from "next/document";
import { Suspense } from "react";
export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>
      <body>
        <Suspense fallback={<p className="">Loading feed...</p>}>
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
