import React from 'react';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Demographics from './Demographics';
import Questionair1 from './Questionair1';
import Questionair2 from './Questionair2';
import Questionair3 from './Questionair3';
import Questionair4 from './Questionair4';

import PANAS1 from './PANAS1';
import PANAS2 from './PANAS2';
import PANAS3 from './PANAS3';
import PANAS4 from './PANAS4';
import End from './End';



function Routing() {
  return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Demographics/>} />            
            <Route path="/Questionair1" element={<Questionair1/>} />
            <Route path="/PANAS1" element={<PANAS1/>} />
            <Route path="/Questionair2" element={<Questionair2/>} />
            <Route path="/Questionair3" element={<Questionair3/>} />
            <Route path="/Questionair4" element={<Questionair4/>} />
            <Route path="/PANAS2" element={<PANAS2/>} />
            <Route path="/PANAS3" element={<PANAS3/>} />
            <Route path="/PANAS4" element={<PANAS4/>} />
            <Route path="/End" element={<End/>} />
        </Routes>
      
      
      
      </BrowserRouter>
       
        
   
  )
}

export default Routing;