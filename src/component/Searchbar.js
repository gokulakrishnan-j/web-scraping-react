import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {API} from '../global/global'
import { useNavigate } from 'react-router-dom';
import '../App.css'
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import HomeIcon from '@mui/icons-material/Home';

function Searchbar(props) {
    const navigate =useNavigate()
    const[search,setsearch]=useState()
    const[individualsearchs,setindividualsearch]=useState([])
props.data(individualsearchs)
    

  
const handleClick = (API,search)=>{

    if (search){
    fetch(`${API}/product/${search}`)
.then((data)=>data.json())
.then((values)=>setindividualsearch(values))
navigate("individualproduct")
setsearch("")
    }
    else{
        alert("Enter the value")
    }
}
 

   
   
  return (
    
    <div className='search'>
 
 
 
    <Box sx={{ flexGrow: 4 ,background: '#2E3B55',marginTop:"12px"}} color="error">
      <AppBar className='appbar' position="static" sx={{bgcolor: "rgb(92, 89, 89)"}} >
        <Toolbar >
     <HomeIcon className='homeIcone' sx={{marginLeft:"40px"}} onClick={()=> navigate("/")}/>
       <input className='searchInput' value={search} type="text" placeholder="search" onChange={(e)=>setsearch((e.target.value))} />
        <Stack direction="row"  sx={{ height:"30px"}} spacing={2}>
      <Button  variant='contained' sx={{bgcolor:"#FAF9F9",color:"silver",borderTopRightRadius:"24px",borderBottomRightRadius:"24px",borderLeft:"0px",borderTopLeftRadius:"0px",borderBottomLeftRadius:"0px",borderColor:"whitesmoke", width:"20px" }} className='searchButton' onClick={()=> handleClick(API,search)}   endIcon={<SearchIcon />}>
      </Button>
    </Stack>
        </Toolbar>
      </AppBar> 
       </Box>
       
    </div>
  )
}

export default Searchbar