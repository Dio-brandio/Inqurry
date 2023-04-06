import AllScripts from "@/components/AllScripts";
import "@/styles/globals.css";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <>
        <title>Inweafh</title>

      <Component {...pageProps} />
    </>
  );
}
