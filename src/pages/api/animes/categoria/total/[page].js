import axios from "axios"
const api = axios.create({
  baseURL: 'https://kitsu.io/api/edge/'
});
const apiLocal = axios.create({
  baseURL: process.env.API_KI_ANIME
});
//const apiLocalDev = axios.create({
//  baseURL: //'http://localhost:3000/api/'
//});


async function animesCatergoria(resquest,response) {
  const {page} = resquest.query
  // console.log(page)
  let Array = []

  const listTitle = await apiLocal.get("categorias/list")
  // let listTitle = data.list
  const listLengthP3 = Math.round(listTitle.data.list.length / 20)
  // console.log(listLengthP3)

  
  if(page == 1){
    if(listTitle.data.list) {
      for(let k = 0; k < listLengthP3; k++){
        const x = []
        //?page%5Blimit%5D=20
        //&page%5Boffset%5D=0
        const {data} = await api.get(`categories/${k+1}/anime?page%5Blimit%5D=20`,{
          validateStatus: function (status) {
            return status < 500; // Resolve somente se o código de status for menor que 500
          }})
          if (data.data){
            data.data.map((anime, index)=>{
              if(index <=30) {
                if(anime.attributes){
                  x.push({
                        id: anime.id,
                        attributes: {
                          createdAt: anime.attributes.createdAt,
                          title :anime.attributes.canonicalTitle,
                          canonicalTitle: anime.attributes.canonicalTitle,
                          posterImage: anime.attributes.posterImage,
                          coverImage: anime.attributes.coverImage,
                          description: anime.attributes.description,
                        },
                  })
                }
              }else{
                return
              }
            })
            Array.push({
              categoria:listTitle.data.list[k].title,
              animes: x,
            })
          }
          // Array.push({
          //   categoria: listTitle.data.list[k].title,
          //   animes: x,
          // })
      }
        response.setHeader('Cache-Control', 's-maxage=604800, stale-while-revalidate')
        return(
          response.json({
            data: Array,
        }) ) 
    }
  }
    
    if(page == 2){
      const index = listLengthP3 * 2
      //console.log(index,"2")
      if(listTitle.data.list) {
        for(let k = listLengthP3; k < index; k++){
          const x = []
          //console.log(listTitle.data.list[(1+ k)-1].title, "index:", (1+ k)-1)
          const {data} = await api.get(`categories/${k+1}/anime?page%5Blimit%5D=20`,{
            validateStatus: function (status) {
              return status < 500; // Resolve somente se o código de status for menor que 500
            }})
            if (data.data){
              data.data.map((anime, index)=>{ 
                if(index <=30) {
                  if(anime.attributes){
                   x.push({
                        id: anime.id,
                        attributes: {
                          createdAt: anime.attributes.createdAt,
                          title :anime.attributes.canonicalTitle,
                          canonicalTitle: anime.attributes.canonicalTitle,
                          posterImage: anime.attributes.posterImage,
                          coverImage: anime.attributes.coverImage,
                          description: anime.attributes.description,
                        },
                  })
                  }
                }else{
                  return
                }
              })
              Array.push({
                categoria: listTitle.data.list[k].title,
                animes: x,
              })
            }
            
        }
        response.setHeader('Cache-Control', 's-maxage=604800, stale-while-revalidate')
        return(
          response.json({
            data: Array,
        }) )
      }
    }

    if(page == 3){
      const index = listLengthP3 * 3
      //console.log(index,"3")
      if(listTitle.data.list) {
        for(let k = listLengthP3 * 2; k < index; k++){
          const x = []
          //console.log(listTitle.data.list[(1+ k)-1].title, "index:", (1+ k)-1)
          const {data} = await api.get(`categories/${k+1}/anime?page%5Blimit%5D=20`,{
            validateStatus: function (status) {
              return status < 500; // Resolve somente se o código de status for menor que 500
            }})
            if (data.data){
              data.data.map((anime, index)=>{
                if(index <=30) {
                  if(anime.attributes){
                  //ta pulando o 13,16,19
                  // console.log(k,listTitle.data.list[k].title, "index:", k+1)
                    //console.log(anime.attributes.canonicalTitle)
                    x.push({
                        id: anime.id,
                        attributes: {
                          createdAt: anime.attributes.createdAt,
                          title :anime.attributes.canonicalTitle,
                          canonicalTitle: anime.attributes.canonicalTitle,
                          posterImage: anime.attributes.posterImage,
                          coverImage: anime.attributes.coverImage,
                          description: anime.attributes.description,
                        },
                  })
                  }
                }else{
                  return
                }
              })
              Array.push({
                categoria: listTitle.data.list[k].title,
                animes: x,
              })
            }
            
        }
        response.setHeader('Cache-Control', 's-maxage=604800, stale-while-revalidate')
        return(
          response.json({
            data: Array,
        }) )
      }
    }

    if(page == 4){
      const index = listLengthP3 * 4
      //console.log(index,"4")
      if(listTitle.data.list) {
        for(let k = listLengthP3 * 3; k < index; k++){
          const x = []
          //console.log(listTitle.data.list[(1+ k)-1].title, "index:", (1+ k)-1)
          const {data} = await api.get(`categories/${k+1}/anime?page%5Blimit%5D=20`,{
            validateStatus: function (status) {
              return status < 500; // Resolve somente se o código de status for menor que 500
            }})
            if (data.data){
              data.data.map((anime, index)=>{
                if(index <=30) {
                  if(anime.attributes){
                  //ta pulando o 13,16,19
                  // console.log(k,listTitle.data.list[k].title, "index:", k+1)
                    //console.log(anime.attributes.canonicalTitle)
                    x.push({
                        id: anime.id,
                        attributes: {
                          createdAt: anime.attributes.createdAt,
                          title :anime.attributes.canonicalTitle,
                          canonicalTitle: anime.attributes.canonicalTitle,
                          posterImage: anime.attributes.posterImage,
                          coverImage: anime.attributes.coverImage,
                          description: anime.attributes.description,
                        },
                  })
                  }
                }else{
                  return
                }
              })
              Array.push({
                categoria: listTitle.data.list[k].title,
                animes: x,
              })
            }
          
        }
        response.setHeader('Cache-Control', 's-maxage=604800, stale-while-revalidate')
        return(
          response.json({
            data: Array,
        }) )
      }
    }
  
    if(page == 5){
      const index = listLengthP3 * 5
      //console.log(index,"5")
      if(listTitle.data.list) {
        for(let k = listLengthP3 * 4; k < index; k++){
          const x = []
          //console.log(listTitle.data.list[(1+ k)-1].title, "index:", (1+ k)-1)
          const {data} = await api.get(`categories/${k+1}/anime?page%5Blimit%5D=20`,{
            validateStatus: function (status) {
              return status < 500; // Resolve somente se o código de status for menor que 500
            }})
            if (data.data){
              data.data.map((anime, index)=>{
                if(index <=30) {
                  if(anime.attributes){
                  //ta pulando o 13,16,19
                  // console.log(k,listTitle.data.list[k].title, "index:", k+1)
                    //console.log(anime.attributes.canonicalTitle)
                    x.push({
                        id: anime.id,
                        attributes: {
                          createdAt: anime.attributes.createdAt,
                          title :anime.attributes.canonicalTitle,
                          canonicalTitle: anime.attributes.canonicalTitle,
                          posterImage: anime.attributes.posterImage,
                          coverImage: anime.attributes.coverImage,
                          description: anime.attributes.description,
                        },
                  })
                  }
                }else{
                  return
                }
              })
              Array.push({
                categoria: listTitle.data.list[k].title,
                animes: x,
              })
            }
          
        }
        response.setHeader('Cache-Control', 's-maxage=604800, stale-while-revalidate')
        return(
          response.json({
            data: Array,
        }) )
      }
    }

    if(page == 6){
      const index = listLengthP3 * 6
      //console.log(index,"6")
      if(listTitle.data.list) {
        for(let k = listLengthP3 * 5; k < index; k++){
          const x = []
          //console.log(listTitle.data.list[(1+ k)-1].title, "index:", (1+ k)-1)
          const {data} = await api.get(`categories/${k+1}/anime?page%5Blimit%5D=20`,{
            validateStatus: function (status) {
              return status < 500; // Resolve somente se o código de status for menor que 500
            }})
            if (data.data){
              data.data.map((anime, index)=>{
                if(index <=30) {
                  if(anime.attributes){
                  //ta pulando o 13,16,19
                  // console.log(k,listTitle.data.list[k].title, "index:", k+1)
                    //console.log(anime.attributes.canonicalTitle)
                    x.push({
                        id: anime.id,
                        attributes: {
                          createdAt: anime.attributes.createdAt,
                          title :anime.attributes.canonicalTitle,
                          canonicalTitle: anime.attributes.canonicalTitle,
                          posterImage: anime.attributes.posterImage,
                          coverImage: anime.attributes.coverImage,
                          description: anime.attributes.description,
                        },
                  })
                  }
                }else{
                  return
                }
              })
              Array.push({
                categoria: listTitle.data.list[k].title,
                animes: x,
              })
            }
          
        }
        response.setHeader('Cache-Control', 's-maxage=604800, stale-while-revalidate')
        return(
          response.json({
            data: Array,
        }) )
      }
    }

    if(page == 7){
      const index = listLengthP3 * 7
      //console.log(index,"7")
      if(listTitle.data.list) {
        for(let k = listLengthP3 * 6; k < index; k++){
          const x = []
          //console.log(listTitle.data.list[(1+ k)-1].title, "index:", (1+ k)-1)
          const {data} = await api.get(`categories/${k+1}/anime?page%5Blimit%5D=20`,{
            validateStatus: function (status) {
              return status < 500; // Resolve somente se o código de status for menor que 500
            }})
            if (data.data){
              data.data.map((anime, index)=>{
                if(index <=30) {
                  if(anime.attributes){
                  //ta pulando o 13,16,19
                  // console.log(k,listTitle.data.list[k].title, "index:", k+1)
                    //console.log(anime.attributes.canonicalTitle)
                    x.push({
                        id: anime.id,
                        attributes: {
                          createdAt: anime.attributes.createdAt,
                          title :anime.attributes.canonicalTitle,
                          canonicalTitle: anime.attributes.canonicalTitle,
                          posterImage: anime.attributes.posterImage,
                          coverImage: anime.attributes.coverImage,
                          description: anime.attributes.description,
                        },
                  })
                  }
                }else{
                  return
                }
              })
            }
          
            Array.push({
              categoria: listTitle.data.list[k].title,
              animes: x,
            })
        }
        response.setHeader('Cache-Control', 's-maxage=604800, stale-while-revalidate')
        return(
          response.json({
            data: Array,
        }) )
      }
    }

    if(page == 8){
      const index = listLengthP3 * 8
      //console.log(index,"8")
      if(listTitle.data.list) {
        for(let k = listLengthP3 * 7; k < index; k++){
          const x = []
          //console.log(listTitle.data.list[(1+ k)-1].title, "index:", (1+ k)-1)
          const {data} = await api.get(`categories/${k+1}/anime?page%5Blimit%5D=20`,{
            validateStatus: function (status) {
              return status < 500; // Resolve somente se o código de status for menor que 500
            }})
            if (data.data){
              data.data.map((anime, index)=>{
                if(index <=30) {
                  if(anime.attributes){
                  //ta pulando o 13,16,19
                  // console.log(k,listTitle.data.list[k].title, "index:", k+1)
                    //console.log(anime.attributes.canonicalTitle)
                    x.push({
                        id: anime.id,
                        attributes: {
                          createdAt: anime.attributes.createdAt,
                          title :anime.attributes.canonicalTitle,
                          canonicalTitle: anime.attributes.canonicalTitle,
                          posterImage: anime.attributes.posterImage,
                          coverImage: anime.attributes.coverImage,
                          description: anime.attributes.description,
                        },
                  })
                  }
                }else{
                  return
                }
              })
            }
          
            Array.push({
              categoria: listTitle.data.list[k].title,
              animes: x,
            })
        }
        response.setHeader('Cache-Control', 's-maxage=604800, stale-while-revalidate')
        return(
          response.json({
            data: Array,
        }) )
      }
    }

    if(page == 9){
      const index = listLengthP3 * 9
      //console.log(index,"9")
      if(listTitle.data.list) {
        for(let k = listLengthP3 * 8; k < index; k++){
          const x = []
          //console.log(listTitle.data.list[(1+ k)-1].title, "index:", (1+ k)-1)
          const {data} = await api.get(`categories/${k+1}/anime?page%5Blimit%5D=20`,{
            validateStatus: function (status) {
              return status < 500; // Resolve somente se o código de status for menor que 500
            }})
            if (data.data){
              data.data.map((anime, index)=>{
                if(index <=30) {
                  if(anime.attributes){
                  //ta pulando o 13,16,19
                  // console.log(k,listTitle.data.list[k].title, "index:", k+1)
                    //console.log(anime.attributes.canonicalTitle)
                    x.push({
                        id: anime.id,
                        attributes: {
                          createdAt: anime.attributes.createdAt,
                          title :anime.attributes.canonicalTitle,
                          canonicalTitle: anime.attributes.canonicalTitle,
                          posterImage: anime.attributes.posterImage,
                          coverImage: anime.attributes.coverImage,
                          description: anime.attributes.description,
                        },
                  })
                  }
                }else{
                  return
                }
              })
            }
          
            Array.push({
              categoria: listTitle.data.list[k].title,
              animes: x,
            })
        }
        response.setHeader('Cache-Control', 's-maxage=604800, stale-while-revalidate')
        return(
          response.json({
            data: Array,
        }) )
      }
    }

    if(page == 10){
      const index = listLengthP3 * 10
      //console.log(index,"10")
      if(listTitle.data.list) {
        for(let k = listLengthP3 * 9; k < index; k++){
          const x = []
          //console.log(listTitle.data.list[(1+ k)-1].title, "index:", (1+ k)-1)
          const {data} = await api.get(`categories/${k+1}/anime?page%5Blimit%5D=20`,{
            validateStatus: function (status) {
              return status < 500; // Resolve somente se o código de status for menor que 500
            }})
            if (data.data){
              data.data.map((anime, index)=>{
                if(index <=30) {
                  if(anime.attributes){
                  //ta pulando o 13,16,19
                  // console.log(k,listTitle.data.list[k].title, "index:", k+1)
                    //console.log(anime.attributes.canonicalTitle)
                    x.push({
                        id: anime.id,
                        attributes: {
                          createdAt: anime.attributes.createdAt,
                          title :anime.attributes.canonicalTitle,
                          canonicalTitle: anime.attributes.canonicalTitle,
                          posterImage: anime.attributes.posterImage,
                          coverImage: anime.attributes.coverImage,
                          description: anime.attributes.description,
                        },
                  })
                  }
                }else{
                  return
                }
              })
            }
          
            Array.push({
              categoria: listTitle.data.list[k].title,
              animes: x,
            })
        }
        response.setHeader('Cache-Control', 's-maxage=604800, stale-while-revalidate')
        return(
          response.json({
            data: Array,
        }) )
      }
    }

      if(page == 11){
        const index = listLengthP3 * 11
        //console.log(index,"11")
        if(listTitle.data.list) {
          for(let k = listLengthP3 * 10; k < index; k++){
            const x = []
            //console.log(listTitle.data.list[(1+ k)-1].title, "index:", (1+ k)-1)
            const {data} = await api.get(`categories/${k+1}/anime?page%5Blimit%5D=20`,{
              validateStatus: function (status) {
                return status < 500; // Resolve somente se o código de status for menor que 500
              }})
              if (data.data){
                data.data.map((anime, index)=>{ 
                  if(index <=30) {
                    if(anime.attributes){
                      x.push({
                        id: anime.id,
                        attributes: {
                          createdAt: anime.attributes.createdAt,
                          title :anime.attributes.canonicalTitle,
                          canonicalTitle: anime.attributes.canonicalTitle,
                          posterImage: anime.attributes.posterImage,
                          coverImage: anime.attributes.coverImage,
                          description: anime.attributes.description,
                        },
                  })
                    }
                  }else{
                    return
                  }
                })
              }
              
            Array.push({
              categoria: listTitle.data.list[k].title,
              animes: x,
            })
          }
          response.setHeader('Cache-Control', 's-maxage=604800, stale-while-revalidate')
          return(
            response.json({
              data: Array,
          }) )
        }
      }
  
      if(page == 12){
        const index = listLengthP3 * 12
        //console.log(index,"12")
        if(listTitle.data.list) {
          for(let k = listLengthP3 * 11; k < index; k++){
            const x = []
            //console.log(listTitle.data.list[(1+ k)-1].title, "index:", (1+ k)-1)
            const {data} = await api.get(`categories/${k+1}/anime?page%5Blimit%5D=20`,{
              validateStatus: function (status) {
                return status < 500; // Resolve somente se o código de status for menor que 500
              }})
              if (data.data){
                data.data.map((anime, index)=>{
                  if(index <=30) {
                    if(anime.attributes){
                      x.push({
                        id: anime.id,
                        attributes: {
                          createdAt: anime.attributes.createdAt,
                          title :anime.attributes.canonicalTitle,
                          canonicalTitle: anime.attributes.canonicalTitle,
                          posterImage: anime.attributes.posterImage,
                          coverImage: anime.attributes.coverImage,
                          description: anime.attributes.description,
                        },
                  })
                    }
                  }else{
                    return
                  }
                })
              }
              Array.push({
                categoria: listTitle.data.list[k].title,
                animes: x,
              })
          }
          response.setHeader('Cache-Control', 's-maxage=604800, stale-while-revalidate')
          return(
            response.json({
              data: Array,
          }) )
        }
      }
  
      if(page == 13){
        const index = listLengthP3 * 13
        //console.log(index,"13")
        if(listTitle.data.list) {
          for(let k = listLengthP3 * 12; k < index; k++){
            const x = []
            //console.log(listTitle.data.list[(1+ k)-1].title, "index:", (1+ k)-1)
            const {data} = await api.get(`categories/${k+1}/anime?page%5Blimit%5D=20`,{
              validateStatus: function (status) {
                return status < 500; // Resolve somente se o código de status for menor que 500
              }})
              if (data.data){
                data.data.map((anime, index)=>{
                  if(index <=30) {
                    if(anime.attributes){
                      x.push({
                        id: anime.id,
                        attributes: {
                          createdAt: anime.attributes.createdAt,
                          title :anime.attributes.canonicalTitle,
                          canonicalTitle: anime.attributes.canonicalTitle,
                          posterImage: anime.attributes.posterImage,
                          coverImage: anime.attributes.coverImage,
                          description: anime.attributes.description,
                        },
                  })
                    }
                  }else{
                    return
                  }
                })
              }
            
              Array.push({
                categoria: listTitle.data.list[k].title,
                animes: x,
              })
          }
          response.setHeader('Cache-Control', 's-maxage=604800, stale-while-revalidate')
          return(
            response.json({
              data: Array,
          }) )
        }
      }
    
      if(page == 14){
        const index = listLengthP3 * 14
        //console.log(index,"14")
        if(listTitle.data.list) {
          for(let k = listLengthP3 * 13; k < index; k++){
            const x = []
          //console.log(listTitle.data.list[(1+ k)-1].title, "index:", (1+ k)-1)
            const {data} = await api.get(`categories/${k+1}/anime?page%5Blimit%5D=20`,{
              validateStatus: function (status) {
                return status < 500; // Resolve somente se o código de status for menor que 500
              }})
              if (data.data){
                data.data.map((anime, index)=>{
                  if(index <=30) {
                    if(anime.attributes){
                      x.push({
                        id: anime.id,
                        attributes: {
                          createdAt: anime.attributes.createdAt,
                          title :anime.attributes.canonicalTitle,
                          canonicalTitle: anime.attributes.canonicalTitle,
                          posterImage: anime.attributes.posterImage,
                          coverImage: anime.attributes.coverImage,
                          description: anime.attributes.description,
                        },
                  })
                    }
                  }else{
                    return
                  }
                })
              }
            
              Array.push({
                categoria: listTitle.data.list[k].title,
                animes: x,
              })
          }
          response.setHeader('Cache-Control', 's-maxage=604800, stale-while-revalidate')
          return(
            response.json({
              data: Array,
          }) )
        }
      }
  
      if(page == 15){
        const index = listLengthP3 * 15
        //console.log(index,"15")
        if(listTitle.data.list) {
          for(let k = listLengthP3 * 14; k < index; k++){
            const x = []
            //console.log(listTitle.data.list[(1+ k)-1].title, "index:", (1+ k)-1)
            const {data} = await api.get(`categories/${k+1}/anime?page%5Blimit%5D=20`,{
              validateStatus: function (status) {
                return status < 500; // Resolve somente se o código de status for menor que 500
              }})
              if (data.data){
                data.data.map((anime, index)=>{
                  if(index <=30) {
                    if(anime.attributes){
                      x.push({
                        id: anime.id,
                        attributes: {
                          createdAt: anime.attributes.createdAt,
                          title :anime.attributes.canonicalTitle,
                          canonicalTitle: anime.attributes.canonicalTitle,
                          posterImage: anime.attributes.posterImage,
                          coverImage: anime.attributes.coverImage,
                          description: anime.attributes.description,
                        },
                  })
                    }
                  }else{
                    return
                  }
                })
              }
            
              Array.push({
                categoria: listTitle.data.list[k].title,
                animes: x,
              })
          }
          response.setHeader('Cache-Control', 's-maxage=604800, stale-while-revalidate')
          return(
            response.json({
              data: Array,
          }) )
        }
      }
  
      if(page == 16){
        const index = listLengthP3 * 16
        //console.log(index,"16")
        if(listTitle.data.list) {
          for(let k = listLengthP3 * 15; k < index; k++){
            const x = []
            //console.log(listTitle.data.list[(1+ k)-1].title, "index:", (1+ k)-1)
            const {data} = await api.get(`categories/${k+1}/anime?page%5Blimit%5D=20`,{
              validateStatus: function (status) {
                return status < 500; // Resolve somente se o código de status for menor que 500
              }})
              if (data.data){
                data.data.map((anime, index)=>{
                  if(index <=30) {
                    if(anime.attributes){
                      x.push({
                        id: anime.id,
                        attributes: {
                          createdAt: anime.attributes.createdAt,
                          title :anime.attributes.canonicalTitle,
                          canonicalTitle: anime.attributes.canonicalTitle,
                          posterImage: anime.attributes.posterImage,
                          coverImage: anime.attributes.coverImage,
                          description: anime.attributes.description,
                        },
                  })
                    }
                  }else{
                    return
                  }
                })
              }
            
              Array.push({
                categoria: listTitle.data.list[k].title,
                animes: x,
              })
          }
          response.setHeader('Cache-Control', 's-maxage=604800, stale-while-revalidate')
          return(
            response.json({
              data: Array,
          }) )
        }
      }
  
      if(page == 17){
        const index = listLengthP3 * 17
        //console.log(index,"17")
        if(listTitle.data.list) {
          for(let k = listLengthP3 * 16; k < index; k++){
            const x = []
            //console.log(listTitle.data.list[(1+ k)-1].title, "index:", (1+ k)-1)
            const {data} = await api.get(`categories/${k+1}/anime?page%5Blimit%5D=20`,{
              validateStatus: function (status) {
                return status < 500; // Resolve somente se o código de status for menor que 500
              }})
              if (data.data){
                data.data.map((anime, index)=>{
                  if(index <=30) {
                    if(anime.attributes){
                      x.push({
                        id: anime.id,
                        attributes: {
                          createdAt: anime.attributes.createdAt,
                          title :anime.attributes.canonicalTitle,
                          canonicalTitle: anime.attributes.canonicalTitle,
                          posterImage: anime.attributes.posterImage,
                          coverImage: anime.attributes.coverImage,
                          description: anime.attributes.description,
                        },
                  })
                    }
                  }else{
                    return
                  }
                })
              }
            
              Array.push({
                categoria: listTitle.data.list[k].title,
                animes: x,
              })
          }
          response.setHeader('Cache-Control', 's-maxage=604800, stale-while-revalidate')
          return(
            response.json({
              data: Array,
          }) )
        }
      }
  
      if(page == 18){
        const index = listLengthP3 * 18
        //console.log(index,"18")
        if(listTitle.data.list) {
          for(let k = listLengthP3 * 17; k < index; k++){
            const x = []
            //console.log(listTitle.data.list[(1+ k)-1].title, "index:", (1+ k)-1)
            const {data} = await api.get(`categories/${k+1}/anime?page%5Blimit%5D=20`,{
              validateStatus: function (status) {
                return status < 500; // Resolve somente se o código de status for menor que 500
              }})
              if (data.data){
                data.data.map((anime, index)=>{
                  if(index <=30) {
                    if(anime.attributes){
                      x.push({
                        id: anime.id,
                        attributes: {
                          createdAt: anime.attributes.createdAt,
                          title :anime.attributes.canonicalTitle,
                          canonicalTitle: anime.attributes.canonicalTitle,
                          posterImage: anime.attributes.posterImage,
                          coverImage: anime.attributes.coverImage,
                          description: anime.attributes.description,
                        },
                  })
                    }
                  }else{
                    return
                  }
                })
              }
            
              Array.push({
                categoria: listTitle.data.list[k].title,
                animes: x,
              })
          }
          response.setHeader('Cache-Control', 's-maxage=604800, stale-while-revalidate')
          return(
            response.json({
              data: Array,
          }) )
        }
      }
  
      if(page == 19){
        const index = listLengthP3 * 19
        //console.log(index,"19")
        if(listTitle.data.list) {
          for(let k = listLengthP3 * 18; k < index; k++){
            const x = []
            //console.log(listTitle.data.list[(1+ k)-1].title, "index:", (1+ k)-1)
            const {data} = await api.get(`categories/${k+1}/anime?page%5Blimit%5D=20`,{
              validateStatus: function (status) {
                return status < 500; // Resolve somente se o código de status for menor que 500
              }})
              if (data.data){
                data.data.map((anime, index)=>{
                  if(index <=30) {
                    if(anime.attributes){
                      x.push({
                        id: anime.id,
                        attributes: {
                          createdAt: anime.attributes.createdAt,
                          title :anime.attributes.canonicalTitle,
                          canonicalTitle: anime.attributes.canonicalTitle,
                          posterImage: anime.attributes.posterImage,
                          coverImage: anime.attributes.coverImage,
                          description: anime.attributes.description,
                        },
                  })
                    }
                  }else{
                    return
                  }
                })
              }
            
              Array.push({
                categoria: listTitle.data.list[k].title,
                animes: x,
              })
          }
          response.setHeader('Cache-Control', 's-maxage=604800, stale-while-revalidate')
          return(
            response.json({
              data: Array,
          }) )
        }
      }

      if(page == 20){
        const index = listLengthP3 * 20
        let curretItem = (index / listTitle.data.list.length)
        if(curretItem != 1){
          curretItem = ((listLengthP3 * 20) - listTitle.data.list.length)
          curretItem = index - curretItem
        }
        console.log(curretItem,"20")
        if(listTitle.data.list) {
          for(let k = listLengthP3 * 19; k < curretItem; k++){
            const x = []
            //console.log(listTitle.data.list[(1+ k)-1].title, "index:", (1+ k)-1)
            const {data} = await api.get(`categories/${k+1}/anime?page%5Blimit%5D=20`,{
              validateStatus: function (status) {
                return status < 500; // Resolve somente se o código de status for menor que 500
              }})
              if (data.data){
                data.data.map((anime, index)=>{
                  if(index <=30) {
                    if(anime.attributes){
                      x.push({
                        id: anime.id,
                        attributes: {
                          createdAt: anime.attributes.createdAt,
                          title :anime.attributes.canonicalTitle,
                          canonicalTitle: anime.attributes.canonicalTitle,
                          posterImage: anime.attributes.posterImage,
                          coverImage: anime.attributes.coverImage,
                          description: anime.attributes.description,
                        },
                  })
                    }
                  }else{
                    return
                  }
                })
              }
            
              Array.push({
                categoria: listTitle.data.list[k].title,
                animes: x,
              })
          }
          response.setHeader('Cache-Control', 's-maxage=604800, stale-while-revalidate')
          return(
            response.json({
              data: Array,
          }) )
        }
      }
    // for(let j = listLengthP3; j <= listTitle.data.list.length; j++){
    //   const {data} = await api.get(`categories/${j}/anime`,{
    //     validateStatus: function (status) {
    //       return status < 500; // Resolve somente se o código de status for menor que 500
    //     }})
    //   if (data.data){
    //     Array2.push({categoria: listTitle.data.list[j-1].title})
    //     data.data.map((anime, index)=>{
    //       x.push({
    //         id: anime.id,
    //         attributes: anime.attributes
    //       })
    //     })
    //     Array2.push(x)
    //   }

    // }
  
}

export default animesCatergoria;