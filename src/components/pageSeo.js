import {NextSeo} from 'next-seo'

function pageSeo({title,description, children, path }){
  let url = `https://ki-anime.vercel.app`
  if(path){
    url = `https://ki-anime.vercel.app${path}`
  }
  
  return(
    <div>
      {
      description ?
      <NextSeo 
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title
        }}
      />
      :
      <NextSeo 
        title={title}
        canonical={url}
        openGraph={{
          url,
          title
        }}
      />
      }
      
      {children}
    </div>
  )

}

export default pageSeo;