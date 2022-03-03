import { SelectorContextProvider } from "context/SelectorsContext";
import type { AppProps } from "next/app";
import { ReactElement } from "react";
import "styles/global.css";

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <SelectorContextProvider>
      <Component {...pageProps} />
    </SelectorContextProvider>
  );
};

export default MyApp;
