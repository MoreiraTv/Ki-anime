import '../styles/app.css';
import {DefaultSeo} from 'next-seo'
import SEO from '../../next-seo-config';

export default function MyApp({Component, pageProps}) {
  return (
    <>
      <DefaultSeo {...SEO}/>
      <Component {...pageProps}/>
    </>
  )
}