import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";





function Demographics() {
  const [Questions, setQuestions] = useState({
    Q1:"",
    Q2:"",
    Q3:"",
    Q4:"",
    Q5:"",
    Q6:"",
    Q7:"",
    Q8:"",
    Q8_text:"",
    Q9:"",
    Q10:"",
    Q10_text:""
   


  });

  const handleAnswers = (event) => {

    setQuestions({ ...Questions, [event.target.name]: event.target.value });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and API call here
    // Send formData to the server for processing

    fetch('https://drab-jade-bonobo-vest.cyclic.cloud/Demographics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Questions),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Handle the server response if needed
        console.log('Data posted successfully:', data);
        // Reset the form after successful submission
        naviagte("/Questionair1")
      
      })
      .catch((error) => {
        // Handle errors
        console.error('Error posting data:', error);
      });
  };

  function check() {
    const buttons = document.querySelectorAll("input[type='radio']");
    buttons.forEach((button) => {
      if (!button.checked) {
        button.setAttribute("required", "");
      }

    });
  }
  const naviagte = useNavigate();

  return (
    <div>
      <Container
        className="d-flex align-items-center justify-content-center "
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100 mt-3" style={{ maxWidth: "1000px" }}>
          <div className="form-container" >
          <h2 className='text-center mb-5'>Please provide the answers to the following questions ?</h2>
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column" }}
            >
             <div className="mb-3">
                <label className="mb-3">What is your age?</label>
                <p>
                  <input
                    type="radio"
                    name="Q1"
                    value="18-25"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  18-25
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q1"
                    value="26-35"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  26-35
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q1"
                    value="36-45"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  36-45
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q1"
                    value="older than 45"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  45-60
                </p>
              </div>
              <div className="mb-3">
                <label className="mb-3">What is your gender?</label>
                <p>
                  <input
                    type="radio"
                    name="Q2"
                    value="Male"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  Male
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q2"
                    value="Female"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  Female
                </p>
                                 
              </div>
              <div className="mb-3">
                <label className="mb-3">What is your level of education?</label>
                <p>
                  <input
                    type="radio"
                    name="Q3"
                    value="No schooling"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  No schooling
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q3"
                    value="High School"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  High School
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q3"
                    value="College"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  College
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q3"
                    value="Bachelors Degree"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  Bachelors Degree
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q3"
                    value="Master Degree"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  Master Degree
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q3"
                    value="Doctorate Degree"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  Doctorate Degree
                </p>
              </div>
              <div className="mb-3">
                <label className="mb-3">
                In which environment are you currently performing the experiment?
                </label>
                <p>
                  <input
                    type="radio"
                    name="Q4"
                    value="Public"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  Public
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q4"
                    value="Private"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  Private
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q4"
                    value="Public"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  Semi-public
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q4"
                    value="Public"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  Semi-private
                </p>
              </div>
              <div className="mb-3">
                <label className="mb-3">How often do you use videoconferencing ?</label>
                <p>
                  <input
                    type="radio"
                    name="Q5"
                    value="Daily"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  Daily
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q5"
                    value="Several times a week"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  Several times a week
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q5"
                    value="Once a week"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  Once a week
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q5"
                    value="Several times a month"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  Several times a month
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q5"
                    value="Once a month"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  Once a month
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q5"
                    value="Rarely or occasionally"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  Rarely or occasionally
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q5"
                    value="Never"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  Never
                </p>
                <div className="mb-3">
                <label className="mb-3">
                  Which context you use videoconferencing?
                </label>
                <p>
                  <input
                    type="radio"
                    name="Q6"
                    value="Online classes or educational purposes"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  Online classes or educational purposes
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q6"
                    value="Remote work or telecommuting"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  Remote work or telecommuting
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q6"
                    value="Personal communication with family and friends"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  Personal communication with family and friends
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q6"
                    value="Job interviews"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  Job interviews
                </p>
               
              </div>
               
                                 
              </div>
              <div className="mb-3">
                <label className='mb-3'>
                  Is there any relationship between you and other partcipants?
                  </label>
                  <p>
                    <input type='radio'
                    name="Q7"
                    value="No,there is no pre-excisting relationship among partcipants"
                    onChange={handleAnswers}
                    className="me-2"
                    />
                    No,there is no pre-excisting relationship among partcipants                   
                  </p>
                  <p>
                    <input type='radio'
                    name="Q7"
                    value="Some participants know each other outside the study but are not closely related"
                    onChange={handleAnswers}
                    className="me-2"
                    />
                    Some participants know each other outside the study but are not closely related                  
                  </p>
                  <p>
                    <input type='radio'
                    name="Q7"
                    value="Some participants are friends or acquaintances."
                    onChange={handleAnswers}
                    className="me-2"
                    />
                    Some participants are friends or acquaintances                 
                  </p>
                  <p>
                    <input type='radio'
                    name="Q7"
                    value="Some participants are family members"
                    onChange={handleAnswers}
                    className="me-2"
                    />
                    Some participants are family members                 
                  </p>
                  <p>
                    <input type='radio'
                    name="Q7"
                    value="Some participants are colleagues or coworkers"
                    onChange={handleAnswers}
                    className="me-2"
                    />
                    Some participants are colleagues or coworkers               
                  </p>
                 
                  
                  </div>
                  <div className="mb-3">
                   <label className='mb-3'>
                   What type of device did you use for the video conference?
                    </label>
                   <p>
                    <input type='radio'
                    name="Q8"
                    value="Laptop"
                    onChange={handleAnswers}
                    className="me-2"
                    />
                    Laptop                 
                  </p>
                  <p>
                    <input type='radio'
                    name="Q8"
                    value="Desktop computer"
                    onChange={handleAnswers}
                    className="me-2"
                    />
                    Desktop computer                
                  </p>
                  <p>
                    <input type='radio'
                    name="Q8"
                    value="Smartphone"
                    onChange={handleAnswers}
                    className="me-2"
                    />
                    Smartphone                
                  </p>
                  <p>
                    <input type='radio'
                    name="Q8"
                    value="Tablet"
                    onChange={handleAnswers}
                    className="me-2"
                    />
                    Tablet               
                  </p>
                  <p>
                    <input type='radio'
                    name="Q8"
                    value="Other"
                    onChange={handleAnswers}
                    className="me-2"
                    />
                    Other (please specify)               
                  </p>
                  {Questions.Q8 === "Other" && (
                <textarea 
                name ='Q8_text'
                value = {Questions.Q8_text}
                onChange={handleAnswers}
                placeholder='Please provide details'
                required
                style={{width:"80%"}}
                ></textarea>
                )}            
              </div>
              <div className="mb-3">
                <label className='mb-3'>
                What is the operating system of your device?
                  </label>
                  <p>
                    <input type='radio'
                    name="Q9"
                    value="Windows"
                    onChange={handleAnswers}
                    className="me-2"
                    />
                    Windows                 
                  </p>
                  <p>
                    <input type='radio'
                    name="Q9"
                    value="macOS"
                    onChange={handleAnswers}
                    className="me-2"
                    />
                    macOS                 
                  </p>
                  <p>
                  <input type='radio'
                    name="Q9"
                    value="Linux"
                    onChange={handleAnswers}
                    className="me-2"
                    />
                    Linux                
                  </p>
                  <p>
                  <input type='radio'
                    name="Q9"
                    value="Android"
                    onChange={handleAnswers}
                    className="me-2"
                    />
                    Android               
                  </p>
                  <p>
                  <input type='radio'
                    name="Q9"
                    value="IOS"
                    onChange={handleAnswers}
                    className="me-2"
                    />
                    IOS              
                  </p>
                </div>
                <div className="mb-3">
                <label className='mb-3'>
                Did you use an external webcam for the video conference? 
                  </label>
                  <p>
                    <input type='radio'
                    name="Q10"
                    value="Yes"
                    onChange={handleAnswers}
                    className="me-2"
                    />
                    Yes                 
                  </p>
                  {Questions.Q10 === "Yes" && (
                <textarea 
                name ='Q10_text'
                value = {Questions.Q10_text}
                onChange={handleAnswers}
                placeholder='Please provide the model and make name'
                required
                style={{width:"80%"}}
                ></textarea>
                )} 
                 <p>
                    <input type='radio'
                    name="Q10"
                    value="No"
                    onChange={handleAnswers}
                    className="me-2"
                    />
                    No                 
                  </p>   
                        
                  </div>
             
             

              <Button
                type="submit"
                className="mt-4 mb-4 me-5"
                id="submitBtn"
                onClick={check}
              >
                Submit
              </Button>


            </form>
          </div>
        </div>
      </Container>


    </div>
  );
}

export default Demographics;