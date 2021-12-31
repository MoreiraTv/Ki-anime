import { useEffect, useState } from 'react';
import Link from 'next/link';;

import SearchInput from '../components/SearchInput';
import Carousel from '../components/carousel';
import {FaHeart } from 'react-icons/fa';
import Loader from '../components/loading'
// import ListAnimesCat from '../components/listAnimesCat';

import axios from "axios"
const api = axios.create({
  baseURL: 'https://kitsu.io/api/edge/'
});
const apiLocal = axios.create({
  baseURL: 'https://ki-anime.vercel.app/api/'
});
const apiLocalDev = axios.create({
  baseURL: 'http://localhost:3000/api/'
});

// const api2 = axios.create({
//   baseURL: 'https://kitsu.io/api/edge/'
// });



const HomePage = (props) => {

  let listTreding = props.listTreding.data
  let listAnimesCatAdventure = props.listAnimesCatAdventure.data
  // let listCat = props.listCat

  
  
  // console.log(animesCat,"animes de categoria")
  // console.log(listCat, "listaCategoria")
  
  //const inputSearchRef = useRef();
  
  // useLayoutEffect(()=> {
  //   console.log(inputSearchRef.current);
  // })
  
  const [info, setInfo] = useState({});
  const [text, setText] = useState('');
  const [removeLoading, setRemoveLoading] = useState(false);
  const [listAnimePorCat, setListAnimePorCat] = useState(props.listAnimePorCat.data)
  const [currentPage, setCurrentPage] = useState(2)
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

  useEffect(async() => {
    if (text) {
      setInfo({})
      
      const response = await api.get(`anime?filter[text]=${text}&page[limit]=20`)
        
      setInfo(response.data);
        
      }
    if(!text) {
      setInfo({});
    }
    }, [text]);

  useEffect(async() => {
    setRemoveLoading(false)
    const {data} = await apiLocalDev.get(`animes/categoria/total/${currentPage}`)
    setListAnimePorCat([...listAnimePorCat,...data.data])
    console.log(currentPage,listAnimePorCat)
    setRemoveLoading(true)
  },[currentPage])

  useEffect(()=> {
    const intersectionObserver = new IntersectionObserver((entries)=>{
      if(entries.some((entry) => entry.isIntersecting)){
        console.log("elemento está visivel")
        setCurrentPage((currentPageInsideState) => currentPageInsideState + 1)
      }
    });
    console.log("pagina:",currentPage)
    intersectionObserver.observe(document.querySelector('#sentinela'));

    return () => intersectionObserver.disconnect();
  },[])

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
        
        <div className='content'>
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
          {
            (!info.data ? 
              (<>
                <h2> Animes Tredings Top</h2>
                <Carousel data={listTreding}/>
                <h2> Animes Aventuras</h2>
                <Carousel data={listAnimesCatAdventure}/>    
                {
                  listAnimePorCat.length > 0 ?
                  listAnimePorCat.map((item)=>{
                    return(
                      <>
                      {
                        item.animes.length ? <> 
                        <h2>Animes {item.categoria}</h2>
                        <Carousel data={item.animes}/>
                        </> :<> </>
                      }
                    </>
                  )})
                  : <>{!removeLoading &&<Loader/>}</>
                }


              </>) : <>{!removeLoading &&<Loader/>} </>
              
              ) 
          }
          {!removeLoading &&<Loader/>}
          <li id="sentinela"/>
        </div>

    </div>
  )
}

export async function getStaticProps() {
    let listTreding = await api.get(`trending/anime`)
        
    let listAnimesCatAdventure = await api.get(`anime?filter[categories]=adventure$&page[limit]=20`)
    
    let listAnimePorCat = await apiLocalDev.get(`animes/categoria/total/1`)

      return {
        props: {
          listTreding : listTreding.data,
          listAnimesCatAdventure: listAnimesCatAdventure.data,
          listAnimePorCat: listAnimePorCat.data
        }
      }
    
}

export default HomePage