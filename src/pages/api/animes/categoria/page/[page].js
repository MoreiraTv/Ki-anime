
import axios from "axios"
const api = axios.create({
  baseURL: 'https://kitsu.io/api/edge/'
});
const apiLocalDev = axios.create({
  baseURL: 'http://localhost:3000/api/'
});



async function categorias(resquest,response){
  const {page} = resquest.query

  if(page == 0){
    const {data} = await api.get(`https://kitsu.io/api/edge/categories/1/anime?page%5Blimit%5D=20&page%5Boffset%5D=0`)
    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')
    return (
      response.json( {
        data,
      })
    )
  }
  if(page == 1){
    const {data} = await api.get(`https://kitsu.io/api/edge/categories/1/anime?page%5Blimit%5D=20&page%5Boffset%5D=20`)
    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')
    return (
      response.json( {
        data,
      })
    )
  }
  if(page == 2){
    const {data} = await api.get(`https://kitsu.io/api/edge/categories/1/anime?page%5Blimit%5D=20&page%5Boffset%5D=40`)
    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')
    return (
      response.json( {
        data,
      })
    )
  }
  if(page == 3){
    const {data} = await api.get(`https://kitsu.io/api/edge/categories/1/anime?page%5Blimit%5D=20&page%5Boffset%5D=62`)
    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')
    return (
      response.json( {
        data,
      })
    )
  }
 

  // https://kitsu.io/api/edge/
  
  
}

export default categorias