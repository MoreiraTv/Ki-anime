import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import SearchInput from '../../components/SearchInput';

import Logo from '../../img/1_transparente.webp';

const api = 'https://kitsu.io/api/edge/';


export async function getStaticPaths(){
  return {
    paths: [
      { params: {
        id: '11'
      } } 
    ],
    fallback: 'blocking'
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;

  let anime = await fetch(
    `${api}anime?filter[id]=${id}`
  )
    .then((response) => response.json())
    return {
      props: {
        anime: anime.data,
    }
  }
}

export default function id(props){

  return (
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Vujahday+Script&display=swap" rel="stylesheet"/>
    </Head>
    <div>
      <div className="App">
      <div className="top-site">
       
          <div className='div-logo-site'>
              <Link href="/">
                <img src={Logo} alt="Ki-Anime" className='logo'/>
              </Link>
          </div>

      </div>
        <div >
          <div style={{
          width: '100%',
          height: '80%',
          marginTop: '-29px',
          position: `absolute`,
          zIndex: -1,
          backgroundImage: `url(${props.anime[0].attributes.coverImage.large})`,
          opacity: '0.5'
          }}/>
          {/* <img src={`${props.anime[0].attributes.coverImage.large}`} 
          style={{
            backgroundImage: `url(${props.anime[0].attributes.coverImage.large})`,
            opacity: '0.6'
            }}
          alt="" /> */}

          {/* {console.log(props.anime[0].coverImage.large)} */}
          <div className="animeDetail">
            <ul className="ul-animeDetail">
                {props.anime.map((anime) => (
                  <li key={anime.id}>
                    <img
                      className="animePosterList"
                      src={anime.attributes.posterImage.small}
                      alt={anime.attributes.canonicalTitle}
                      />
                  </li>
                ))}
              </ul>
              <ul className="animesList">
                {props.anime.map((anime) => (
                  <li key={anime.id}>
                    <h2 className='titleAnimeDetail'>{anime.attributes.canonicalTitle}</h2>
                    <p className='favAnimeDetail'>
                      Favoritos: {anime.attributes.favoritesCount}
                    </p>
                    <p className='epAnimeDetail'>
                      Episodios: {anime.attributes.episodeCount}
                    </p>
                    <p className='descriptionAnimeDetail'>
                      {anime.attributes.description}
                    </p>
                  </li>
                ))}
              </ul>
          </div>
            
          </div>
        </div>
        <div className="animeContentBottom">
          {props.anime[0].attributes.youtubeVideoId ? (
            <>
              <p align="center">
                <div className='iframe-youtube'>
                    <iframe 
                    width="560" 
                    height="315" 
                    src={`https://www.youtube.com/embed/${props.anime[0].attributes.youtubeVideoId}`}
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>              
                </div>
              <a href={`https://www.youtube.com/watch?v=${props.anime[0].attributes.youtubeVideoId}`}>
                Caso o video não reproduzir tente por aqui!
              </a>
              </p>
            </>
          ) : <></>}
        </div>
    </div>
    </>
  )

}

