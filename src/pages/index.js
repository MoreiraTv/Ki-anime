import { useEffect, useState } from 'react';
import Link from 'next/link';;

import SearchInput from '../components/SearchInput';
import Carousel from '../components/carousel';
import {FaHeart } from 'react-icons/fa';
import Loader from '../components/loading'
import Logo from '../img/1_transparente.webp';
import PageSeo from '../components/pageSeo';


import axios from "axios"

const api = axios.create({
  baseURL: 'https://kitsu.io/api/edge/'
});
//'https://ki-anime.vercel.app/api/'
const apiLocal = axios.create({
  baseURL: process.env.API_KI_ANIME
});


const HomePage = (props) => {

  let listTreding = props.listTreding.data
  let listAnimesCatAdventure = props.listAnimesCatAdventure.data
  
  const [info, setInfo] = useState({});
  const [text, setText] = useState('');
  const [removeLoading, setRemoveLoading] = useState(false);
  const [removeLoadingPesq, setRemoveLoadingPesq] = useState(false);
  const [listAnimePorCat, setListAnimePorCat] = useState(props.listAnimePorCat.data)
  const [currentPage, setCurrentPage] = useState(2)
  const [currentPageOffset, setCurrentPageOffset] = useState(0)
  function clearBusca(){
    setText('');
    setInfo({});
  }
  

  useEffect(async() => {
    if (text) {
      setInfo({})
      const response = await api.get(`anime?filter[text]=${text}&page[limit]=20&page[offset]=${currentPageOffset}`)
      setInfo({data: response.data.data});
      setRemoveLoadingPesq(true)
      }
    if(!text) {
      setInfo({});
    }
    }, [text]);

  useEffect(async( ) => {
    if (text && info.data) {
      setRemoveLoading(false)
      // const url = info.links.next.slice(26)
      //26
      const {data} = await api.get(`anime?filter[text]=${text}&page[limit]=20&page[offset]=${currentPageOffset}`)
      setInfo((x) =>  x = {data: x.data.concat(data.data)});
      setRemoveLoadingPesq(true)
      }
    if(!text) {
      setInfo({});
      setCurrentPageOffset(0)
    }

  },[currentPageOffset])

  useEffect(async() => {
    if(!text && !info.data){
      setRemoveLoading(false)
      const {data} = await apiLocal.get(`/api/animes/categoria/total/${currentPage}`)
      // setListAnimePorCat(data.data)
      setListAnimePorCat([...listAnimePorCat,...data.data])
      setRemoveLoading(true)
    }
  },[currentPage])

  useEffect(()=> {
    if(text && info.data){
      const intersectionObserverSearch = new IntersectionObserver((entries)=>{
        if(entries.some((entry) => entry.isIntersecting)){
            setCurrentPageOffset((currentPageInsideState) => currentPageInsideState + 20)
          }
        });
        intersectionObserverSearch.observe(document.querySelector('#sentinela2'));
        
        return () => intersectionObserverSearch.disconnect();
      }
  },[info.data])

  useEffect(()=> {
    if(!text && !info.data){
      const intersectionObserver = new IntersectionObserver((entries)=>{
        if(entries.some((entry) => entry.isIntersecting)){
          setCurrentPage((currentPageInsideState) => currentPageInsideState + 1)
        }
      });
      intersectionObserver.observe(document.querySelector('#sentinela'));
  
      return () => intersectionObserver.disconnect();
    }
  },[])

  return (
    <>
    <div className='App'>
      <PageSeo title="Ki-Anime" description="Aqui você encontra o anime perfeito para você, um site para encontrar animes do seu gosto"/>
      <div className="top-site">
        {info.data ? (
          <div className='div-logo-site'>
            <a onClick={() => clearBusca()} className="aNone">
              <Link href="/">
                <img src={Logo} alt="Ki-Anime" className='logo' />
              </Link>
            </a>
          </div>
          ) : (
          <div className='div-logo-site'>
            <a onClick={() => clearBusca()} className="aNone">
              <Link href="/">
                <img src={Logo} alt="Ki-Anime" className='logo'/>
              </Link>
            </a>
          </div>
          )}
         
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
                        <h2 key={item.categoria}>Animes {item.categoria}</h2>
                        <Carousel data={item.animes}/>
                        </> :<> </>
                      }
                    </>
                  )})
                  : <></>
                }
              {!removeLoading &&<Loader/>}

              </>) : <></>
              
              ) 
            }
            {
              info.data ? <>
              {!removeLoadingPesq &&<Loader/>}
              </> 
              :<></>
            }
          
          <li id="sentinela"/>
          <li id="sentinela2"/>
        </div>

    </div>
    </>
  )
}

export async function getStaticProps() {
  let listTreding = await api.get(`trending/anime`)
  
  let listAnimesCatAdventure = await api.get(`anime?filter[categories]=adventure$&page[limit]=20`)
  
  let listAnimePorCat = await apiLocal.get(`animes/categoria/total/1`)
  
  return {
    props: {
      listTreding : listTreding.data,
      listAnimesCatAdventure: listAnimesCatAdventure.data,
      listAnimePorCat: listAnimePorCat.data
    }
  }
  
}

export default HomePage