
import axios from "axios"
const api = axios.create({
  baseURL: 'https://kitsu.io/api/edge/'
});



async function categorias(resquest,response){
  const {page} = resquest.query

  if(page == 0){
    const {data} = await api.get(`categories?page%5Blimit%5D=20&page%5Boffset%5D=0`)
    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')
    return (
      response.json( {
        data,
      })
    )
  }
  if(page == 1){
    const {data} = await api.get(`categories?page%5Blimit%5D=20&page%5Boffset%5D=20`)
    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')
    return (
      response.json( {
        data,
      })
    )
  }
  if(page == 2){
    const {data} = await api.get(`categories?page%5Blimit%5D=20&page%5Boffset%5D=40`)
    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')
    return (
      response.json( {
        data,
      })
    )
  }
  if(page == 3){
    const {data} = await api.get(`categories?page%5Blimit%5D=20&page%5Boffset%5D=60`)
    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')
    return (
      response.json( {
        data,
      })
    )
  }
  if(page == 4){
    const {data} = await api.get(`categories?page%5Blimit%5D=20&page%5Boffset%5D=80`)
    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')
    return (
      response.json( {
        data,
      })
    )
  }
  if(page == 5){
    const {data} = await api.get(`categories?page%5Blimit%5D=20&page%5Boffset%5D=100`)
    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')
    return (
      response.json( {
        data,
      })
    )
  }
  if(page == 6){
    const {data} = await api.get(`categories?page%5Blimit%5D=20&page%5Boffset%5D=120`)
    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')
    return (
      response.json( {
        data,
      })
    )
  }
  if(page == 7){
    const {data} = await api.get(`categories?page%5Blimit%5D=20&page%5Boffset%5D=140`)
    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')
    return (
      response.json( {
        data,
      })
    )
  }
  if(page == 8){
    const {data} = await api.get(`categories?page%5Blimit%5D=20&page%5Boffset%5D=160`)
    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')
    return (
      response.json( {
        data,
      })
    )
  }
  if(page == 9){
    const {data} = await api.get(`categories?page%5Blimit%5D=20&page%5Boffset%5D=180`)
    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')
    return (
      response.json( {
        data,
      })
    )
  }
  if(page == 10){
    const {data} = await api.get(`categories?page%5Blimit%5D=20&page%5Boffset%5D=198`)
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