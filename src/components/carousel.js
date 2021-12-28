import Link from 'next/Link';
import {useRef, useState} from 'react';

// const api = 'https://kitsu.io/api/edge/';


const Carousel = ({data}) => {
  
  const carouselBoxRef = useRef();
  const [scrollPerClick, setScrollPerClick] = useState(400);
  
  var scrollAmount = 0;
  
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
  <div className="content-carousel">
      
    <div className="carousel">
      <div className="carouselBox" ref={carouselBoxRef}>
        {data.map((anime, index) => (
          <>
           <div key={anime.id}>
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
              </div>
          </>
          ))}
          
      </div>
      <a className="switchLeft sliderButton" onClick={sliderScrollLeft}>&lt;</a>
    
      <a className="switchRight sliderButton" onClick={sliderScrollRight}>&gt;</a>
      
    </div>
  </div>
  )
}

export default Carousel