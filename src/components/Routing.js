import React from 'react';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Demographics from './Demographics';
import Questionair_0 from './Questionair_0';
import Questionair_1 from './Questionair_1';
import Questionair_2 from './Questionair_2';
import Questionair_3 from './Questionair_3';

import PANAS_0 from './PANAS_0';
import PANAS_1 from './PANAS_1';
import PANAS_2 from './PANAS_2';
import PANAS_3 from './PANAS_3';
import End from './End';



function Routing() {
  return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Demographics/>} />            
            <Route path="/Questionair_0" element={<Questionair_0/>} />
            <Route path="/PANAS_0" element={<PANAS_0/>} />
            <Route path="/Questionair_1" element={<Questionair_1/>} />
            <Route path="/Questionair_2" element={<Questionair_2/>} />
            <Route path="/Questionair_3" element={<Questionair_3/>} />
            <Route path="/PANAS_1" element={<PANAS_1/>} />
            <Route path="/PANAS_2" element={<PANAS_2/>} />
            <Route path="/PANAS_3" element={<PANAS_3/>} />
            <Route path="/End" element={<End/>} />
        </Routes>
      
      
      
      </BrowserRouter>
       
        
   
  )
}

export default Routing;