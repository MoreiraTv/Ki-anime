import Link from 'next/link';;
import {useRef, useState} from 'react';

const api = 'https://kitsu.io/api/edge/';


const test2 = (dataTreding) => {
  
  const carouselBoxRef = useRef();
  const [scrollPerClick, setScrollPerClick] = useState(400);
  

  var scrollAmount = 0;

  // function sliderScrollLeft(){
  //   sliders.scrollTo({
  //     top: 0,
  //     left: (scrollAmount -= scrollPerClick),
  //     behavior: 'smooth',
  //   });
  //   if(scrollAmount < 0) {
  //     scrollAmount = 0
  //   }
  // }

  // function sliderScrollRight(){
  //   if(scrollAmount <= sliders.scrollWidth - sliders.clientWidth){
  //     sliders.scrollTo({
  //       top: 0,
  //       left: (scrollAmount += scrollPerClick),
  //       behavior: 'smooth',
  //     });
  //   }
  // }
  
  function sliderScrollLeft(){
    carouselBoxRef.current.scrollTo({
      top: 0,
      left: scrollAmount -= scrollPerClick,
      behavior: 'smooth'
    })
    if(scrollAmount < 0) {
      scrollAmount = 0
    }
  }
  function sliderScrollRight(){
    if(scrollAmount <= carouselBoxRef.current.scrollWidth - carouselBoxRef.current.clientWidth){
      carouselBoxRef.current.scrollTo({
        top: 0,
        left: scrollAmount += scrollPerClick,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="carousel">
      <div className="carouselBox" ref={carouselBoxRef}>
        {dataTreding.dataTreding.map((anime, index) => (
          <>
           <li key={anime.id}>
             <Link href={`/anime/${anime.id}`} >
                  <img
                    className={`img-${index}`}
                    src={anime.attributes.posterImage.small}
                    alt={anime.attributes.canonicalTitle}
                    />
                </Link>
                {/* <Link href={`/anime/${anime.id}`} >
                  <h5 className="animePosterList">{anime.attributes.canonicalTitle}</h5>
                </Link> */}
              </li>
          </>
          ))}
          
      </div>
      <a className="switchLeft sliderButton" onClick={sliderScrollLeft}>&lt;</a>
      {

      }
      <a className="switchRight sliderButton" onClick={sliderScrollRight}>&gt;</a>
      
    </div>
  )
}

export default test2


test2.getInitialProps = async (context) => {
  let listTreding = await fetch(
    `${api}trending/anime`
  )
    .then((response) => response.json())
    // .then((response) => {
    // });
    
    return {dataTreding : listTreding.data}
}