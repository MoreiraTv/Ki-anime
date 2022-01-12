import { getServerSideSitemap } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import axios from "axios"

const apiLocal = axios.create({
  baseURL: process.env.API_KI_ANIME
});

interface Data {
  animes?: Array<any>;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')

  let {data} = await apiLocal.get(`animes/categoria/total/1`)
  const arrayData = Array.from(data.data)
  console.log("tamanho do array", arrayData.length);
  let array = [
    {
      loc: `https://ki-anime.vercel.app/`,
      lastmod: new Date().toISOString(),
    }
  ]
  arrayData.map((  data: Data  )=>{
    for(let x = 0; x < data.animes.length; x++){
      array = [...array,{
        loc: `https://ki-anime.vercel.app/anime/${data.animes[x].id}`, 
        lastmod: new Date().toISOString(),
      }]
    }
    // [data].map((anime, index)=> (
    //   console.log(anime.animes),
    //   {
    //     loc: `https://ki-anime.vercel.app/anime/${anime.animes}`, // Absolute url
    //     lastmod: new Date().toISOString(),
    //   }
    // ))
  })
  const fields = array
    // {
    //   loc: 'https://ki-anime.vercel.app', // Absolute url
    //   lastmod: new Date().toISOString(),
    //   // changefreq
    //   // priority
    // },

  return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
export default () => {}