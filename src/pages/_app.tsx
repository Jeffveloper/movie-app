import "../styles/styles.css";
import type { AppProps } from "next/app";
import MobileWrapper from "@components/organisms/MobileWrapper";
import HeaderMobile from "@components/organisms/HeaderMobile";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MobileWrapper>
        <HeaderMobile />
        <Component {...pageProps} />
      </MobileWrapper>
    </>
  );
}
