import AllScripts from "@/components/AllScripts";
import "@/styles/globals.css";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="../assets/css/nucleo-icons.css" rel="stylesheet" />
        <link href="../assets/css/nucleo-svg.css" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></script>
        <link href="../assets/css/nucleo-svg.css" rel="stylesheet" />
        <link id="pagestyle"
          href="../assets/css/argon-dashboard.css?v=2.0.4"
          rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
      <AllScripts />
    </>
  );
}
