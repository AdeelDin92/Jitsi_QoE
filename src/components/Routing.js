import React from 'react';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Demographics from './Demographics';
import Questionair from './Questionair';
import PANAS from './PANAS';

function Routing() {
  return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Demographics/>} />            
            <Route path="/Questionair" element={<Questionair/>} />
            <Route path="/PANAS" element={<PANAS/>} />

        </Routes>
      
      
      
      </BrowserRouter>
       
        
   
  )
}

export default Routing;