import '../styles/app.css';
import Head from 'next/head';

export default function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Ki-Anime</title>
        <link rel="Favicon Ki-Anime" href="/static/favicon.ico" />
      </Head>
      
      <Component {...pageProps}/>
    </>
  )
}