import React, { useEffect,useState} from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import './Homepage.css'
import { API } from '../../global/global';
function Homepage({data,mail}) {
  const {email} = useParams()
  const [token,settoken] = useState(null)
  

  useEffect(()=>{
     
    fetch(`${API}/user/token/${email}`)
    .then((data)=>data.json())
    .then((msg)=>settoken(msg))
    

    
},[email])


return token ? <ProductHome tokenData={token} data={data} mail={mail} /> : null
}

function ProductHome ({tokenData,data,mail}){
  const {email} = useParams()
  const navigate = useNavigate()

  localStorage.setItem("token",tokenData.my_token)

  useEffect(()=>{

    mail(email)
  },[email ,mail])

  const handleShowcaseSearch =(values)=>{
   
      fetch(`${API}/product/${values}`,{
        headers:{'my_token':localStorage.getItem("token")}
      })
  .then((data)=>data.json())
 .then((values)=>{data(values)
                  console.log(values)
    navigate(`/individualproduct/${email}`)})
  
      
  }



  return (
    <div  >
       <div className='home'>
        <div className='homeBox' >
          <div > 
            <span className='homeProuctName' onClick={()=>navigate(`/product/${email}`)}>Products</span>
          </div>
          <div className='homeLogBox'>
            <h5>Web Scraping</h5>
            <h6>AMAZON.in product details</h6>
          </div>
        </div>
        </div>

        <div className='homeProuductShowcase'>
          <div onClick={()=>handleShowcaseSearch("shoes")}>
            <img className='showcaseImg' src='https://www.jiomart.com/images/product/500x630/rvnezaqnsd/bruton-running-shoes-for-men-product-images-rvnezaqnsd-0-202206141815.jpg' alt='shoes'/>
            <img className='showcaseImg' src='https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/13855576/2022/4/25/1d9760b4-c33e-4d72-a6af-8e81970fd0161650883622705USPoloAssnMenGreySolidSneakers1.jpg' alt='shoes'/>
          </div>
          <div onClick={()=>handleShowcaseSearch("phones")}>
            <img className='showcaseImg' src='https://www.thechennaimobiles.com/image/cache/catalog/130972-600x600.jpg' alt='Phnoe' />
            <img className='showcaseImg' src='https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2020/05/S22_Ultra_Banner_3000x2000-scaled.jpg?ssl=1&quality=80&w=f' alt='Phnoe' />
          </div>
          <div onClick={()=>handleShowcaseSearch("bags")}>
          <img className='showcaseImg' src='https://m.media-amazon.com/images/I/71i3dEmHwqL._SY450_.jpg' alt='Bag' />
          <img className='showcaseImg' src='https://content.jdmagicbox.com/comp/def_content/bag-dealers/shutterstock-452317159-bag-dealers-4-fjesq.jpg' alt='Bag' />
          </div>
          <div onClick={()=>handleShowcaseSearch("watch")}>
          <img className='showcaseImg' src='https://staticimg.titan.co.in/Titan/Catalog/90156AP01_1.jpg?impolicy=pqmed&imwidth=640' alt='Watch' />
          <img className='showcaseImg' src='https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg' alt='Watch' />
          </div>
        </div>
    </div>
  )
}

export default Homepage
