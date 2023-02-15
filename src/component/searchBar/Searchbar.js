import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {API} from '../../global/global'
import { useNavigate } from 'react-router-dom';
import './Searchbar.css'
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import HomeIcon from '@mui/icons-material/Home';

function Searchbar({data,mail}) {
    const navigate =useNavigate()
    const[search,setsearch]=useState()
    

    

  
const handleClick = (API,search)=>{

    if (search){
    fetch(`${API}/product/${search}`,{
      headers:{'my_token':localStorage.getItem("token")}
    })
.then((data)=>data.json())
.then((values)=>data(values))
.then(()=>(navigate(`/individualproduct/${mail}`)))
setsearch("")
    }
    else{
        alert("Enter the value")

    }

  
}
 
const handleLogout = (email)=>{
  
 fetch(`${API}/user/logout/${email}`,{
   method: 'DELETE', 
   headers:{'my_token':localStorage.getItem("token")}
 })
 .then(()=>(navigate('/login')))
 .then(()=>localStorage.removeItem("token"))
}
   
   
  return (
    
    <div className='search'>
 
 
 
    <Box sx={{ flexGrow: 4 ,background: '#2E3B55',marginTop:"12px"}} color="error">
      <AppBar className='appbar' position="static" sx={{bgcolor: "rgb(92, 89, 89)"}} >
        <Toolbar >
     <HomeIcon className='homeIcone' sx={{marginLeft:"40px"}} onClick={()=>localStorage.getItem("token")? navigate(`/${mail}`) : alert('Login your account')}/>
       <input className='searchInput' value={search} type="text" placeholder="search" onChange={(e)=>localStorage.getItem("token")?setsearch((e.target.value)):alert('Login your account')} />
        <Stack direction="row"  sx={{ height:"30px"}} spacing={2}>
      <Button  variant='contained' sx={{bgcolor:"#FAF9F9",color:"silver",borderTopRightRadius:"24px",borderBottomRightRadius:"24px",borderLeft:"0px",borderTopLeftRadius:"0px",borderBottomLeftRadius:"0px",borderColor:"whitesmoke", width:"20px" }} className='searchButton' onClick={()=>localStorage.getItem("token")? handleClick(API,search):alert('Login your account')}   endIcon={<SearchIcon />}>
      </Button>
    </Stack>
    {localStorage.getItem("token")?
    <div className='logout' onClick={()=>handleLogout(mail)}>
        <p>Logout</p>
       </div>
       :null}
        </Toolbar>
      </AppBar> 
       </Box>
       
       
    </div>
  )
}

export default Searchbar