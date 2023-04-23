import React from 'react';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Demographics from './Demographics';
import Test from './Test';
import Training from './Training';
import Questionair from './Questionair';

function Routing() {
  return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Demographics/>} />
            <Route path="/Test" element={<Test/>} />
            <Route path="/Training" element={<Training/>} />
            <Route path="/Questionair" element={<Questionair/>} />

        </Routes>
      
      
      
      </BrowserRouter>
       
        
   
  )
}

export default Routing;