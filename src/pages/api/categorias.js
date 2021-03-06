import axios from "axios"
const api = axios.create({
  baseURL: 'https://kitsu.io/api/edge/'
});



async function categorias(resquest,response){
  const listCat = await api.get('categories?page[limit]=245[offset]=245')

  
  response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')
  response.json( {
    listCat : listCat.data,
  })
}

export default categorias