import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css';
function Homepage() {
  return (
    <div >
        <Link to="product">
        <img className='home' src='https://1.bp.blogspot.com/-WpbrHN8HmC8/XRqscrSEVLI/AAAAAAAMly4/UIPKptyugOo3ULQBD5yBGp47utTLg3_VgCLcBGAs/s1600/AS0005440_00.gif'alt=''/>
        <h1>Toys section</h1>
        </Link>
    </div>
  )
}

export default Homepage