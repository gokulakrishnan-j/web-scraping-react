import React from 'react'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import './Individualproduct.css'


function Individualproduct(props) {
    const navigate =useNavigate()

    var rate = "";
  return (
    <div>
      
<Stack direction="row" sx={{margin:"24px",position:"fixed"}} spacing={2}>
      <Button variant="contained" onClick={()=>navigate(-1)} startIcon={<KeyboardBackspaceIcon />}>
        Back
      </Button>
    </Stack>
   
         <section id ="full">
        {

  props.data.map((n,i)=>(
  <Card sx={{ maxWidth: 345 ,
    
     background: "rgb(204, 230, 216)",
     height:"60%",
     borderRadius:"8px"}}
     className="productBox">
      <CardMedia
      className='image'
        component="img"
        alt={n.title}
        height="200"
        image={n.image}
        key={i}
      />


      <CardContent>
     
        <p className='title'>
          {n.title}
        </p> <br/><br/>
        <h1 style={{display:"none"}}>{ rate = n.rating.split(' ') }</h1>
        <Typography variant="h7" color="text.secondary">
          Rating:{n.rating}
        </Typography>
        
        <div>
        <Stack spacing={1} sx={{display:"flex",flexDirection: "column",justifyContent: "center",alignContent: "center",flexWrap: "wrap",}}> 
      <Rating name="half-rating-read" defaultValue={+rate[0]} precision={0.1} readOnly />
      </Stack>
   </div >
        <br/><br/>
        <Typography variant="h7" sx={{textDecoration: "line-through", color:"rgb(223, 53, 53)"}} color="text.secondary">
          Offer: {n.offerPrice}
        </Typography><br/><br/>
        <Typography variant="h7" sx={{fontWeight:"bold", fontSize:"24px"}} color="text.secondary">
          Price:₹ {n.price}
        </Typography>
      </CardContent>
    </Card>

  ))
}
      
</section>

    </div>
  )
}

export default Individualproduct