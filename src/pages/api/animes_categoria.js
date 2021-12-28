import axios from "axios"
const api = axios.create({
  baseURL: 'https://kitsu.io/api/edge/'
});
const apiLocal = axios.create({
  baseURL: 'https://ki-anime.vercel.app/api/'
});

async function animesCatergoria(resquest,response) {
  let listCat = await apiLocal.get('categorias')
  let listAnimePorCat = [];
  let lisCatArray = Array.from(listCat.data.listCat.data)


  for(let x = 0; x < lisCatArray.length; x++){
    let catAtual = lisCatArray[x].attributes.title
    const resp = await api.get(`anime?filter[categories]=${catAtual}$&page[limit]=10`)
    const response = resp.data
    const y = Array.from(response)
    y.push({categoria: catAtual , response});
    listAnimePorCat.push(y)
  }
  listAnimePorCat = JSON.stringify(listAnimePorCat)
  console.log(typeof  listAnimePorCat)
  response.setHeader('Cache-Control', 's-maxage=0', 'stale-while-revalidate')
  response.json({
    listAnimePorCat
  })
  
}

export default animesCatergoria;