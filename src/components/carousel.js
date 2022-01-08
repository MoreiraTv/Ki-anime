import Link from 'next/link';;
import {useRef, useState} from 'react';
import ArrowLeft from '../img/arrow-left.svg';
import ArrowRight from '../img/arrow-right.svg';

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
           <div className="div-carousel" key={anime.id}>
             <Link href={`/anime/${anime.id}`} >
                  <img
                    className={`img-${index}`}
                    src={anime.attributes.posterImage.small}
                    alt={anime.attributes.canonicalTitle}
                    />
                </Link>
                  <p className="img__description">{anime.attributes.canonicalTitle}</p>
                {/* <Link href={`/anime/${anime.id}`} >
                  <h5 className="animePosterList">{anime.attributes.canonicalTitle}</h5>
                </Link> */}
            </div>
          </>
          ))}
          
      </div>
      <a className="switchLeft sliderButton" onClick={sliderScrollLeft}><img src={ArrowLeft} id='arrow-carrousel' alt="" /></a>
    
      <a className="switchRight sliderButton" onClick={sliderScrollRight}><img src={ArrowRight} id='arrow-carrousel' alt="" /></a>
      
    </div>
  </div>
  )
}

export default Carousel