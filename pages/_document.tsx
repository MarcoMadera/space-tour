import { Head, Main, NextScript, Html } from "next/document";
import { ReactElement } from "react";

export default function Document(): ReactElement {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/Bellefair-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Barlow-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/BarlowCondensed-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/BarlowCondensed-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <div>
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
