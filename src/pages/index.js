import { useEffect, useState } from 'react';
import Link from 'next/link';

import SearchInput from '../components/SearchInput';
import Carousel from '../components/carousel';
import {FaHeart } from 'react-icons/fa';
// import ListAnimesCat from '../components/listAnimesCat';

// import axios from "axios"
const api = 'https://kitsu.io/api/edge/';

// const api2 = axios.create({
//   baseURL: 'https://kitsu.io/api/edge/'
// });



const HomePage = (props) => {

  let listTreding = props.listTreding
  let listAnimesCatAdventure = props.listAnimesCatAdventure
  // let listCat = props.listCat
  // let listAnimePorCat = props.listAnimePorCat

  
  
  // console.log(animesCat,"animes de categoria")
  // console.log(listCat, "listaCategoria")
  
  //const inputSearchRef = useRef();
  
  // useLayoutEffect(()=> {
  //   console.log(inputSearchRef.current);
  // })
  
  const [info, setInfo] = useState({});
  const [text, setText] = useState('');
  function clearBusca(){
    setText('');
    setInfo({});
  }
  // useEffect(async ()=>{
  //   await listCat.forEach(async function(cat) {
  //     let x = listAnimesCat;
  //     let catAtual = cat.attributes.title
  //     const resp = await api2.get(`anime?filter[categories]=${catAtual}$&page[limit]=10`)
  //     const response = resp.data
  //     const y = Array.from(response)
  //     y.push({categoria: catAtual , response});
  //     x.push(y)
  //     setListAnimesCat(x);
  //     })
  // },[])

  useEffect(() => {
    if (text) {
      setInfo({});
      
      fetch(
        `${api}anime?filter[text]=${text}&page[limit]=20`
        )
        .then((response) => response.json())
        .then((response) => {
          setInfo(response);
        });
      }
    if(!text) {
      setInfo({});
    }
    }, [text]);

  return (
    <div className='App'>
      <div className="top-site">
        {info.data ? (
          // <Link >
          //   <h1 className={title}>Ki-Anime</h1>
          // </Link>
          <a onClick={() => clearBusca()} className="aNone">
            <h1 className="title">Ki-Anime</h1>
          </a>
          ) : (
          <Link href="/">
            <h1 className="title">Ki-Anime</h1>
          </Link>
          )}
          {/* <Link href="/">
            <h1 className={title}>Ki-Anime</h1>
          </Link> */}
          <div className='content-search'>

            <SearchInput
              setInput={setText}
              value={text}
              onChange={(search) => setText(search)}
            />
          </div>
      </div>
        {text && !info.data && <span>Carregando...</span>}
        {info.data && (
          <ul className="animesList">
            {info.data.map((anime) => (
              <li key={anime.id}>
                <Link href={`/anime/${anime.id}`} >
                  <img
                    className="animePosterList"
                    src={anime.attributes.posterImage.small}
                    alt={anime.attributes.canonicalTitle}
                    />
                </Link>
                <Link href={`/anime/${anime.id}`} >
                  <h4 className="animePosterList">{anime.attributes.canonicalTitle}</h4>
                </Link>
                <p>
                  <FaHeart/> {anime.attributes.favoritesCount}
                </p>
              </li>
            ))}
          </ul>
        )    
        }
        <div className='content'>
          {
            (!info.data ? 
              (<>
                <h2> Animes Tredings Top</h2>
                  <Carousel data={listTreding}/>
                <h2> Animes Aventuras</h2>
                  <Carousel data={listAnimesCatAdventure}/>    

              </>) : <> </>
              
              ) 
          }
          {/* <ListAnimesCat/> */}
          {/* {
            listAnimePorCat.length > 0 ? 
            listAnimePorCat.map((item)=>{
              return(
                <>
                <h2>{item[0].categoria}</h2>
                 <Carousel data={item[0].response.data}/>
              </>
            )})  : <></>
          } */}
        </div>

    </div>
  )
}

export async function getStaticProps() {
    let listTreding = await fetch(
        `${api}trending/anime`
      )
        .then((response) => response.json())
        // .then((response) => {
        // });
    let listAnimesCatAdventure = await fetch(
          `${api}anime?filter[categories]=adventure$&page[limit]=20`
          )
          .then((response) => response.json())
    
    // let listCat = await fetch(
    //     `${api}categories?page[limit]=30[offset]=30`
    //     )
    //     .then((response) => response.json())
      
      // let listAnimePorCat = [];
      // let lisCatArray = Array.from(listCat.data)
      // for(let x = 0; x < listCat.data.length; x++){
      //   let catAtual = lisCatArray[x].attributes.title
      //   const resp = await api2.get(`anime?filter[categories]=${catAtual}$&page[limit]=10`)
      //   const response = resp.data
      //   const y = Array.from(response)
      //   y.push({categoria: catAtual , response});
      //   listAnimePorCat.push(y)
      // }


      return {
        props: {
          listTreding : listTreding.data,
          listAnimesCatAdventure: listAnimesCatAdventure.data,
          // listCat: listCat.data,
        }
      }
    
}

export default HomePage