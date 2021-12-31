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
  let {data} = await apiLocalDev.get('categorias')
  let list = [];
  let lisCatArray = Array.from(data.listCat.data)

  // for(let x = 0; x < lisCatArray.length; x++){
  //   let catAtual = lisCatArray[x].attributes.title
  //   const y = Array.from(catAtual)
  //   y.push({catAtual});
  //   list.push(y)
  // }
  const x = lisCatArray.map((i)=>{
    list.push({id: i.id,title: i.attributes.title})
  })


  response.setHeader('Cache-Control', 's-maxage=604800, stale-while-revalidate')
  response.json({
    list
  })
  
}

export default animesCatergoria;