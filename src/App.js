import React from "react";
// import Weather from "./components/Weather";
import TestUseEffect from "./components/TestUseEffect";
import "./style.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Prices from "./pages/Prices";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
export default function App() {
  const Header = ()=>{
    const myStyle ={
      color:"white",
      backgroundColor: "DodgerBlue",
      padding:"10px",
      fontFamily:"Sans-Serif"
    }
  }
  return (
    // <div className="App">
    //   {/* <Weather/> */}
    //   {/* <TestUseEffect/> */}
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/product">Products</Link>
    //     </li>
    //     <li>
    //       <Link to="/prices">Prices</Link>
    //     </li>
    //   </ul>
    //   <Routes>
    //     <Route path="/" element={<Home />}></Route>
    //     <Route path="/product" element={<Products />}>
    //       <Route path=":id" element={<Product />}></Route>
    //     </Route>
    //     <Route path="/prices" element={<Prices />}></Route>
    //     <Route path="*" element={<NotFound />}></Route>
    //   </Routes>
    // </div>
    <div>
      <h1 style={myStyle}>Hello Style</h1>
      
    </div>
  )
}
