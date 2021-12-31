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


async function animesCatergoria(resquest,response) {
  const {id} = resquest.query
  let Array = []

  const listTitle = await apiLocal.get("categorias/list")
  // let listTitle = data.list
  // console.log(listTitle.data.list)
  
  
  if(id) {
    let x = []
    const {data} = await api.get(`categories/${id}/anime`)
    Array.push({categoria: listTitle.data.list[id-1].title})
    data.data.map((i)=>{
      x.push(i)
    })
    Array.push(x)
  response.setHeader('Cache-Control', 's-maxage=604800, stale-while-revalidate')
  response.json({
      data: Array
  })
  return
  }
  
}

export default animesCatergoria;