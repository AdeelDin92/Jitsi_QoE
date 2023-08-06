/*import React from 'react'
import { useNavigate } from 'react-router'
import { JitsiMeeting } from '@jitsi/react-sdk';

function Test() {
    const navigate = useNavigate();
  return (
    <>
    <div>Here you will include the real Jitsi meet app</div>
    <JitsiMeeting 

    domain={"med54.rz.tu-ilmenau.de"}
    roomName={'FirstJitsi'} 
    getIFrameRef = { node => node.style.height = '800px' } 
    configOverwrite = {{
      toolbarButtons:['microphone','camera','chat','fullscreen', 'hangup','settings','toggle-camera'],}}
      />
    <button onClick={()=>(navigate('/Questionair'))}>Questionair</button>
    
    </>
    
  )
}

export default Test */
import React from 'react'
function Test () {
  return (
    <>
    <h3>Here next Questionair</h3>
    </>
  )
}

export default Test ;