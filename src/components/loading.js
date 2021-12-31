import loading from '../img/Spinner-Loading.svg'

export default function Loading(){
  return(
    <div className='loader_container'>
      <img classname='loader' src={loading} alt="Loading" />
    </div>
  )
}