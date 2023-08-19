
import React, { useState } from 'react'
import { Button, Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'


function PANAS4 () { 


  // State to store the selected Positive And Negative values for each PANAS item
  const [active, setActive] = useState('');
  const [interested, setInterested] = useState('');
  const [excited, setExcited] = useState('');
  const [determined, setDetermined] = useState('');
  const [inspired, setInspired] = useState('');
  const [attentive, setAttentive] = useState('');
  const [distressed , setDistressed] = useState('');
  const [annoyed , setAnnoyed] = useState('');
  const [scared , setScared] = useState('');
  const [irritated , setIrritated] = useState('');
  const [nervous , setNervous] = useState ('') ;
  const [guilty , setGuilty] =useState ('')


  const handleSubmit = (e) => {
    e.preventDefault ();

    const formData = {
        active,
        interested,
        excited,
        determined,
        inspired,
        attentive,
        distressed,
        annoyed,
        scared,
        irritated,
        nervous,
        guilty,
      };



      axios.post('http://localhost:4000/submit_panas_4', formData)
      .then((response) => {
        console.log('Form submitted successfully!');
        // Do any further actions upon successful submission if needed
        navigate("/End")
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        // Handle the error if the form submission fails
      });
  }

  const navigate = useNavigate();



    return (
        <div>
              <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
               <div className="w-100 mt-3" style={{ maxWidth: "1000px" }}>
                <div className="form-container" >
                <h2 className="text-center mb-5">Positive and Negative Affect Schedule (PANAS) - Please rate your feelings using the scale below:</h2>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
        <div className="mb-3">
          <label htmlFor="active">Active:</label>
          <div className='my-2'>
          <select className="form-control" id="active" value={active} onChange={(e) => setActive(e.target.value)} style = {{width:"95%"}} required>
            <option value="">Choose an option</option>
            <option value="1">Not at all</option>
            <option value="2">A little</option>
            <option value="3">Moderately</option>
            <option value="4">Quite a bit</option>
            <option value="5">Extremely</option>
          </select>
          </div>   
                   
        </div>
        <div className="mb-3">
          <label htmlFor="interested">Interested:</label>
          <div className='my-2'>
          <select className="form-control" id="interested" value={interested} onChange={(e) => setInterested(e.target.value)} style = {{width:"95%"}} required>
            <option value="">Choose an option</option>
            <option value="1">Not at all</option>
            <option value="2">A little</option>
            <option value="3">Moderately</option>
            <option value="4">Quite a bit</option>
            <option value="5">Extremely</option>
          </select>
          </div>   
                   
        </div>
        <div className="mb-3">
          <label htmlFor="excited">Excited:</label>
          <div className='my-2'>
          <select className="form-control" id="excited" value={excited} onChange={(e) => setExcited(e.target.value)} style = {{width:"95%"}} required>
            <option value="">Choose an option</option>
            <option value="1">Not at all</option>
            <option value="2">A little</option>
            <option value="3">Moderately</option>
            <option value="4">Quite a bit</option>
            <option value="5">Extremely</option>
          </select>
          </div>   
                   
        </div>
        <div className="mb-3">
          <label htmlFor="determined">Determined:</label>
          <div className='my-2'>
          <select className="form-control" id="determined" value={determined} onChange={(e) => setDetermined(e.target.value)} style = {{width:"95%"}} required>
            <option value="">Choose an option</option>
            <option value="1">Not at all</option>
            <option value="2">A little</option>
            <option value="3">Moderately</option>
            <option value="4">Quite a bit</option>
            <option value="5">Extremely</option>
          </select>
          </div>   
                   
        </div>
        <div className="mb-3">
          <label htmlFor="inspired">Inspired:</label>
          <div className='my-2'>
          <select className="form-control" id="inspired" value={inspired} onChange={(e) => setInspired(e.target.value)} style = {{width:"95%"}} required>
            <option value="">Choose an option</option>
            <option value="1">Not at all</option>
            <option value="2">A little</option>
            <option value="3">Moderately</option>
            <option value="4">Quite a bit</option>
            <option value="5">Extremely</option>
          </select>
          </div>   
                   
        </div>
        <div className="mb-3">
          <label htmlFor="attentive">Attentive:</label>
          <div className='my-2'>
          <select className="form-control" id="attentive" value={attentive} onChange={(e) => setAttentive(e.target.value)} style = {{width:"95%"}} required>
            <option value="">Choose an option</option>
            <option value="1">Not at all</option>
            <option value="2">A little</option>
            <option value="3">Moderately</option>
            <option value="4">Quite a bit</option>
            <option value="5">Extremely</option>
          </select>
          </div>   
                   
        </div>
        <div className="mb-3">
          <label htmlFor="distressed">Distressed:</label>
          <div className='my-2'>
          <select className="form-control" id="distressed" value={distressed} onChange={(e) => setDistressed(e.target.value)} style = {{width:"95%"}} required>
            <option value="">Choose an option</option>
            <option value="1">Not at all</option>
            <option value="2">A little</option>
            <option value="3">Moderately</option>
            <option value="4">Quite a bit</option>
            <option value="5">Extremely</option>
          </select>
          </div>   
                   
        </div>
        <div className="mb-3">
          <label htmlFor="annoyed">Annoyed:</label>
          <div className='my-2'>
          <select className="form-control" id="annoyed" value={annoyed} onChange={(e) => setAnnoyed(e.target.value)} style = {{width:"95%"}} required>
            <option value="">Choose an option</option>
            <option value="1">Not at all</option>
            <option value="2">A little</option>
            <option value="3">Moderately</option>
            <option value="4">Quite a bit</option>
            <option value="5">Extremely</option>
          </select>
          </div>   
                   
        </div>
        <div className="mb-3">
          <label htmlFor="scared">Scared:</label>
          <div className='my-2'>
          <select className="form-control" id="scared" value={scared} onChange={(e) => setScared(e.target.value)} style = {{width:"95%"}} required>
            <option value="">Choose an option</option>
            <option value="1">Not at all</option>
            <option value="2">A little</option>
            <option value="3">Moderately</option>
            <option value="4">Quite a bit</option>
            <option value="5">Extremely</option>
          </select>
          </div>   
                   
        </div>
        <div className="mb-3">
          <label htmlFor="irritated">Irritated:</label>
          <div className='my-2'>
          <select className="form-control" id="irritated" value={irritated} onChange={(e) => setIrritated(e.target.value)} style = {{width:"95%"}} required>
            <option value="">Choose an option</option>
            <option value="1">Not at all</option>
            <option value="2">A little</option>
            <option value="3">Moderately</option>
            <option value="4">Quite a bit</option>
            <option value="5">Extremely</option>
          </select>
          </div>                    
        </div>
        <div className="mb-3">
          <label htmlFor="nervous">Nervous:</label>
          <div className='my-2'>
          <select className="form-control" id="nervous" value={nervous} onChange={(e) => setNervous(e.target.value)} style = {{width:"95%"}} required>
            <option value="">Choose an option</option>
            <option value="1">Not at all</option>
            <option value="2">A little</option>
            <option value="3">Moderately</option>
            <option value="4">Quite a bit</option>
            <option value="5">Extremely</option>
          </select>
         </div>              
        </div>
        <div className="mb-3">
          <label htmlFor="guilty">Guilty:</label>
          <div className='my-2'>
          <select className="form-control" id="guilty" value={guilty} onChange={(e) => setGuilty(e.target.value)} style = {{width:"95%"}} required>
            <option value="">Choose an option</option>
            <option value="1">Not at all</option>
            <option value="2">A little</option>
            <option value="3">Moderately</option>
            <option value="4">Quite a bit</option>
            <option value="5">Extremely</option>
          </select>
         </div>              
        </div>
        
        <Button type="submit" className="mt-4 mb-4 me-5" id="submitBtn" >Submit</Button>
      </form>

        </div>
        </div>
        </Container>            
        </div>
    );

}

export default PANAS4;