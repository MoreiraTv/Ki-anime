import axios from "axios"
const api = axios.create({
  baseURL: 'https://kitsu.io/api/edge/'
});
const apiLocal = axios.create({
  baseURL: 'https://ki-anime.vercel.app/api/'
});
//const apiLocalDev = axios.create({
//  baseURL: //'http://localhost:3000/api/'
//});


async function animesCatergoria(resquest,response) {
  let Array = []
  let Array2 = []

  const listTitle = await apiLocal.get("categorias/list")
  // let listTitle = data.list
  // console.log(listTitle.data.list)
  const listLengthP2 = Math.round(listTitle.data.list.length / 3) 
  console.log(listLengthP2)
  
  if(listTitle.data.list) {
    let x = []
    for(let k = 1; k <= listLengthP2; k++){
      const {data} = await api.get(`categories/${k}/anime`,{
        validateStatus: function (status) {
          return status < 500; // Resolve somente se o código de status for menor que 500
        }})
      if (data.data){
        Array.push({categoria: listTitle.data.list[k-1].title})
        data.data.map((i)=>{
          x.push({
            id: i.id,
            titel: i.attributes.canonicalTitle,
            posterImage: i.attributes.posterImage,
            coverImage: i.attributes.coverImage
          })
        })
        Array.push(x)
      }

    }

    // for(let j = listLengthP2; j <= listTitle.data.list.length; j++){
    //   const {data} = await api.get(`categories/${j}/anime`,{
    //     validateStatus: function (status) {
    //       return status < 500; // Resolve somente se o código de status for menor que 500
    //     }})
    //   if (data.data){
    //     Array2.push({categoria: listTitle.data.list[j-1].title})
    //     data.data.map((i)=>{
    //       x.push({
    //         id: i.id,
    //         attributes: i.attributes
    //       })
    //     })
    //     Array2.push(x)
    //   }

    // }

  response.setHeader('Cache-Control', 's-maxage=604800, stale-while-revalidate')
  response.json({
      data: Array,
  })
  return
  }
  
}

export default animesCatergoria;