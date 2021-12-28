import { useState } from 'react';
import {Link} from 'next';
import SearchInput from '../../components/SearchInput';

const api = 'https://kitsu.io/api/edge/';

export default function id(props){
  const [text, setText] = useState('');

// console.log(props.props.anime)
  return (
    <>
    <div>
      <div className="App">
      <div className="top-site">
       
          <Link href="/">
            <h1 className="title">Ki-Anime</h1>
          </Link>

          <div className='content-search'>

            <SearchInput
              setInput={setText}
              value={text}
              onChange={(search) => setText(search)}
            />
          </div>
      </div>
        <div className="animeDetail">

            <ul className="animesList">
              {props.props.anime.map((anime) => (
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
              {props.props.anime.map((anime) => (
                <li key={anime.id}>
                  <h2>{anime.attributes.canonicalTitle}</h2>
                  <p>
                    Favoritos: {anime.attributes.favoritesCount}
                  </p>
                  <p>
                    Episodios: {anime.attributes.episodeCount}
                  </p>
                  <p>
                    {anime.attributes.description}
                  </p>
                  {anime.attributes.youtubeVideoId ? (
                    <>
                      <p>
                        <iframe 
                        width="560" 
                        height="315" 
                        src={`https://www.youtube.com/embed/${anime.attributes.youtubeVideoId}`}
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
                      </p>
                      <a href={`https://www.youtube.com/watch?v=${anime.attributes.youtubeVideoId}`}>
                        Caso o video não reproduzir tente por aqui!
                      </a>
                    </>
                  ) : <></>}
                  

                  
                </li>
              ))}
            </ul>
          </div>
        </div>
    </div>
    </>
  )

}

id.getInitialProps = async (context) => {
  const id = context.query.id;

  let anime = await fetch(
    `${api}anime?filter[id]=${id}`
  )
    .then((response) => response.json())
    // .then((response) => {
    // });
    console.log(anime.data)
    return {
      props: {
        anime: anime.data,
    }
  }
}