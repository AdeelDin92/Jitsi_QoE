import React from 'react'
import { useNavigate } from 'react-router'
import { JitsiMeeting } from '@jitsi/react-sdk';

function Test() {
    const navigate = useNavigate();
  return (
    <>
    <div>Here you will include the real Jitsi meet app</div>
    <JitsiMeeting 
    domain = {"https://a4ajao.com/Test"}
    roomName={'FirstJitsi'} 
    getIFrameRef = { node => node.style.height = '800px' } 
    configOverwrite = {{
      toolbarButtons:['microphone','camera','chat','fullscreen', 'hangup','settings','toggle-camera'],}}
      />
    <button onClick={()=>(navigate('/Questionair'))}>Questionair</button>
    
    </>
    
  )
}

export default Test