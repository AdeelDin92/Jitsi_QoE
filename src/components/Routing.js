import React from 'react';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Demographics from './Demographics';
import Questionair from './Questionair';
import Test from './Test'

function Routing() {
  return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Demographics/>} />            
            <Route path="/Questionair" element={<Questionair/>} />
            <Route path="/Test" element={<Test/>} />

        </Routes>
      
      
      
      </BrowserRouter>
       
        
   
  )
}

export default Routing;