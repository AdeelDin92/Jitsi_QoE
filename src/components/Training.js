import React from 'react'
import { useNavigate } from 'react-router-dom';

function Training() {
    const navigate=useNavigate();
  return (
    <>
    <div>I am your jitsi training page</div>
    <button onClick={()=>navigate('/Test')}>Take Test</button>
    
    </>
    
  )
}

export default Training