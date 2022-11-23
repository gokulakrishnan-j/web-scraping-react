import { useState } from 'react';
import './App.css';
import Individualproduct from './component/Individualproduct';
import Product from './component/Product';
import Searchbar from './component/Searchbar';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import Homepage from './component/Homepage';
import Notfound from './component/Notfound';

function App() {
  const [singleproduct,setsingalproduct]=useState()

  return (
    <div className="App" >
      <BrowserRouter>
      <Searchbar data={setsingalproduct}/>
      <Routes>
    <Route path="product"  element={<Product/>}/>
    <Route path="individualproduct"  element={ <Individualproduct data={singleproduct}/>}/>
    <Route path="/"  element={<Homepage/>}/>
    
    <Route path="*"  element={ <Notfound/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
