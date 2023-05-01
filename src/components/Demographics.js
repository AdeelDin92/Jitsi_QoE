import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'




function Demographics() {
  const [Questions, setQuestions] = useState({
    Q1:"",
    Q2:""
   


  });

  const handleAnswers = (event) => {

    setQuestions({ ...Questions, [event.target.name]: event.target.value });

  };




  const handleSubmit = async (e) => {
    e.preventDefault()


    axios.post("http://localhost:4000/Demographics", Questions)
      .then(function (response) {
        console.log(response.data)
        if(response.status = 200) {
          naviagte("/Training")
        }
      })
      .catch(function (error) {
        console.log(error)
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
  const naviagte = useNavigate();

  return (
    <div>
      <Container
        className="d-flex align-items-center justify-content-center "
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100 mt-3" style={{ maxWidth: "1000px" }}>
          <div className="form-container" >
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column" }}
            >
             <div className="mb-3">
                <label className="mb-3">What is your Gender?</label>
                <p>
                  <input
                    type="radio"
                    name="Q1"
                    value="Male"                   
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  Male
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q1"
                    value="Female"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  Female
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q1"
                    value="Other"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  Other
                </p>
              </div>
              <div className="mb-3">
                <label className="mb-3">What is your age?</label>
                <p>
                  <input
                    type="radio"
                    name="Q2"
                    value="18-25"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  18-25
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q2"
                    value="26-35"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  26-35
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q2"
                    value="36-45"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  36-45
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q2"
                    value="older than 45"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  45-60
                </p>
              </div>
             
             

              <Button
                type="submit"
                className="mt-4 mb-4"
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