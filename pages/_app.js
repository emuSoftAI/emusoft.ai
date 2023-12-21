import "@/styles/globals.css";
import Head from "next/head";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="EMU Software & AI Development Club" />
        <meta
          name="keywords"
          content="emusoft, emusoft.ai, emusoft ai, emu ai, emu, emusoftai"
        />
        <title>EMUSoft.AI</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
