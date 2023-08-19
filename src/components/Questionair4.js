import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'

function Questionair4() {

  const[Questions,setQuestions] = useState({
    Q1:"",
    Q2:"",
    Q3:"",
    Q4:"",
    Q5:"",
    Q6:"",
    Q5_text:"",
    Q6_text:""
    
  })

  const handleAnswers = (event) => {

    setQuestions({ ...Questions, [event.target.name]: event.target.value });

  };

  const handleSubmit = async (e) => {
    e.preventDefault()


    axios.post("https://charming-loafers-fish.cyclic.cloud/Questionair_4", Questions)
    
      .then((response)=>{
        console.log("Data posted successfully",response.data)
        navigate("/PANAS4")
      })
      .catch((error)=>{
        console.log("Error in submitting",error)
      })
  }

  function check() {
    const buttons = document.querySelectorAll("input[type='radio']");
    buttons.forEach((button) => {
      if (!button.checked) {
        button.setAttribute("required", "");
      }

    });
  }


  const navigate = useNavigate();





  return (
    <div>
    <Container
      className="d-flex align-items-center justify-content-center "
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100 mt-3" style={{ maxWidth: "1000px" }}>
        <div className="form-container" >
          <h2 className='text-center mb-5'>Please answer these questions</h2>
          <h4>Round 4</h4>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column" }}
          >
           <div className="mb-3">
              <label className="mb-3">How would you rate the overall audiovisual quality ? (Circle one)
              </label>
              <p>
                <input
                  type="radio"
                  name="Q1"
                  value="Bad"                   
                  onChange={handleAnswers}
                  className="me-2"
                />
                Bad
              </p>
              <p>
                <input
                  type="radio"
                  name="Q1"
                  value="Poor"
                  onChange={handleAnswers}
                  className="me-2"
                />
                Poor
              </p>
              <p>
                <input
                  type="radio"
                  name="Q1"
                  value="Fair"
                  onChange={handleAnswers}
                  className="me-2"
                />
                Fair
              </p>
              <p>
                <input
                  type="radio"
                  name="Q1"
                  value="Good"
                  onChange={handleAnswers}
                  className="me-2"
                />
                Good
              </p>
              <p>
                <input
                  type="radio"
                  name="Q1"
                  value="Excellent"
                  onChange={handleAnswers}
                  className="me-2"
                />
                Excellent
              </p>
            </div>
              <div className="mb-3">
                <label className="mb-3">How would you rate the video quality of the connection ? (Circle one)
                </label>
                <p>
                  <input
                    type="radio"
                    name="Q2"
                    value="Bad"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  Bad
                </p>
                <p>
                <input
                  type="radio"
                  name="Q2"
                  value="Poor"
                  onChange={handleAnswers}
                  className="me-2"
                />
                Poor
              </p>
              <p>
                <input
                  type="radio"
                  name="Q2"
                  value="Fair"
                  onChange={handleAnswers}
                  className="me-2"
                />
                Fair
              </p>
              <p>
                <input
                  type="radio"
                  name="Q2"
                  value="Good"
                  onChange={handleAnswers}
                  className="me-2"
                />
                Good
              </p>
              <p>
                <input
                  type="radio"
                  name="Q2"
                  value="Excellent"
                  onChange={handleAnswers}
                  className="me-2"
                />
                Excellent
              </p>
            </div>
            <div className="mb-3">
              <label className="mb-3">How would you rate the audio quality of the connection ? (Circle one)
              </label>
              <p>
                <input
                  type="radio"
                  name="Q3"
                  value="Bad"
                  onChange={handleAnswers}
                  className="me-2"
                />
                Bad
              </p>
              <p>
                <input
                  type="radio"
                  name="Q3"
                  value="Poor"
                  onChange={handleAnswers}
                  className="me-2"
                />
                Poor
              </p>
              <p>
                <input
                  type="radio"
                  name="Q3"
                  value="Fair"
                  onChange={handleAnswers}
                  className="me-2"
                />
                Fair
              </p>
              <p>
                <input
                  type="radio"
                  name="Q3"
                  value="Good"
                  onChange={handleAnswers}
                  className="me-2"
                />
                Good
              </p>
              <p>
                <input
                  type="radio"
                  name="Q3"
                  value="Excellent"
                  onChange={handleAnswers}
                  className="me-2"
                />
                Excellent
              </p>
            </div>
            <div className="mb-3">
              <label className="mb-3">How would you judge the effort required to interrupt the other party (or parties) ? (Circle one)

              </label>
              <p>
                <input
                  type="radio"
                  name="Q4"
                  value="No effort"
                  onChange={handleAnswers}
                  className="me-2"
                />
                No effort
              </p>
              <p>
                <input
                  type="radio"
                  name="Q4"
                  value="Minor effort"
                  onChange={handleAnswers}
                  className="me-2"
                />
                Minor effort
              </p>
              <p>
                <input
                  type="radio"
                  name="Q4"
                  value="Moderate effort"
                  onChange={handleAnswers}
                  className="me-2"
                />
                Moderate effort
              </p>
              <p>
                <input
                  type="radio"
                  name="Q4"
                  value="Considerable effort"
                  onChange={handleAnswers}
                  className="me-2"
                />
                Considerable effort
              </p>
              <p>
                <input
                  type="radio"
                  name="Q4"
                  value="Extreme effort"
                  onChange={handleAnswers}
                  className="me-2"
                />
                Extreme effort
              </p>
            </div>
            <div className="mb-3">
              <label className="mb-3">Did you have any difficulty in communicating? (Circle one)           
              </label>
              <p>
                <input
                  type="radio"
                  name="Q5"
                  value="No"
                  onChange={handleAnswers}
                  className="me-2"
                />
                No 
              </p>
              <p>
                <input
                  type="radio"
                  name="Q5"
                  value="Yes"
                  onChange={handleAnswers}
                  className="me-2"
                />
                Yes
              </p>
              {Questions.Q5 === "Yes" && (
                <textarea 
                name ='Q5_text'
                value = {Questions.Q5_text}
                onChange={handleAnswers}
                placeholder='Please provide details'
                required
                style={{width:"80%"}}
                ></textarea>
              )}
            </div>
            <div className="mb-3">
              <label className="mb-3">Was the connection acceptable? (Circle one)
          
              </label>
              <p>
                <input
                  type="radio"
                  name="Q6"
                  value="No"
                  onChange={handleAnswers}
                  className="me-2"
                />
                No 
              </p>
              <p>
                <input
                  type="radio"
                  name="Q6"
                  value="Yes"
                  onChange={handleAnswers}
                  className="me-2"
                />
                Yes
              </p>
              {Questions.Q6 === 'Yes' && (
                  <textarea
                    name="Q6_text"
                    value={Questions.Q6_text}
                    onChange={handleAnswers}
                    placeholder="Please provide details"
                    required
                    style={{width:"80%"}}
                  />
                )}
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
  )
}

export default Questionair4