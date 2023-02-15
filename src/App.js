import { useState } from 'react';
import './App.css';
import Individualproduct from './component/searchProduct/Individualproduct';
import Product from './component/product/Product';
import Searchbar from './component/searchBar/Searchbar';
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom"
import Homepage from './component/home/Homepage';
import Signup from './component/signup/Signup';
import Login from './component/login/Login'

function App() {
  const [singleproduct,setsingalproduct]=useState([])
  const [email,setEmail] = useState()

  return (
    <div className="App" >
      <BrowserRouter>
      <Searchbar data={setsingalproduct} mail={email}/>
      <Routes>
    <Route path="/product/:email"  element={<Product/>}/>
    <Route path="/individualproduct/:email"  element={ <Individualproduct data={singleproduct}/>}/>
    <Route path="/:email"  element={<Homepage data={setsingalproduct} mail={setEmail}/> }/>
    <Route path="/signup"  element={ <Signup/>}/>
    <Route path="/login"  element={ <Login/>}/>
    <Route path="*"  element={<Navigate to="/login"/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
