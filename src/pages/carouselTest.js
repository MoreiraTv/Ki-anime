import Link from 'next/link'
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const api = 'https://kitsu.io/api/edge/';

const test = (dataTreding) => {
console.log(dataTreding)

  return (
    <>
      <div style={{
        height: "10px",
        width: "100%"
      }}>
        <Carousel autoPlay="true" infiniteLoop="true" verticalSwipe>
        {dataTreding.dataTreding.map((anime) => (
                <Link href={`/anime/${anime.id}`} >
                  <div onClick={() => console.log(anime.id)}>
                    <img
                      src={anime.attributes.coverImage.large}
                      alt={anime.attributes.canonicalTitle}
                      />
                    <h4 className="legend">{anime.attributes.canonicalTitle}</h4>
                  </div>
                </Link>
              ))}
        </Carousel>
      </div>
    </>
  )
}

export default test


test.getInitialProps = async (context) => {
  let listTreding = await fetch(
    `${api}trending/anime`
  )
    .then((response) => response.json())
    // .then((response) => {
    // });
    
    return {dataTreding : listTreding.data}
}