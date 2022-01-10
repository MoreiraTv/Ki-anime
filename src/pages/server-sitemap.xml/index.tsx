import { getServerSideSitemap } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import axios from "axios"

const apiLocal = axios.create({
  baseURL: process.env.API_KI_ANIME
});


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')

  let {data} = await apiLocal.get(`animes/categoria/total/1`)
  const arrayData = Array.from(data.data)
  const array2 = arrayData.map((data)=>{
    [data].map((anime)=> (
      console.log(anime),
      {
        loc: `https://ki-anime.vercel.app/anime/${anime}`, // Absolute url
        lastmod: new Date().toISOString(),
      }
    ))
  })
  console.log(array2)
  const fields = []
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