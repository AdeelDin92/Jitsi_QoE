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
            <Route path="https://a4ajao.com/Test" element={<Test/>} />
            <Route path="https://a4ajao.com/Training" element={<Training/>} />
            <Route path="https://a4ajao.com/Questionair" element={<Questionair/>} />

        </Routes>
      
      
      
      </BrowserRouter>
       
        
   
  )
}

export default Routing;