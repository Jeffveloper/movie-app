import "../styles/styles.css";
import type { AppProps } from "next/app";
import MobileWrapper from "@components/organisms/MobileWrapper";
import HeaderMobile from "@components/organisms/HeaderMobile";
import { MovieProvider } from "@contexts/MovieContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MovieProvider>
      <MobileWrapper>
        <Component {...pageProps} />
      </MobileWrapper>
    </MovieProvider>
  );
}
