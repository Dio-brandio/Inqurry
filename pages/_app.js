import AllScripts from "@/components/AllScripts";
import "@/styles/globals.css";
import Head from "next/head";
import React from 'react';

import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return (
    <>
        <title>Inquiry</title>

      <Component {...pageProps} />
    </>
  );
}
