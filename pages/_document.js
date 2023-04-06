import AllScripts from '@/components/AllScripts'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link href="../assets/css/nucleo-icons.css" rel="stylesheet" />
        <link href="../assets/css/nucleo-svg.css" rel="stylesheet" />
        <link href="../assets/css/nucleo-svg.css" rel="stylesheet" />
        <link id="pagestyle"
          href="../assets/css/argon-dashboard.css?v=2.0.4"
          rel="stylesheet" />
        <script src="../js/jquery.js" ></script>
        <script defer src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></script>
        </Head>
      <body className='bg-grey-100'>
        <Main />
        <NextScript />
      </body>
      <AllScripts />

    </Html>
  )
}
