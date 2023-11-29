import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const ratingOptions = ['Not at all', 'A little', 'Moderately', 'Quite a bit', 'Extremely'];

function PANAS2() {
  const [ratings, setRatings] = useState({
    active: '',
    interested: '',
    excited: '',
    determined: '',
    inspired: '',
    attentive: '',
    distressed: '',
    annoyed: '',
    scared: '',
    irritated: '',
    nervous: '',
    guilty: '',
  });

  const handleRatingChange = (item, value) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [item]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      ...ratings,
    };
    //local testing
    // Please change post URL with: http://localhost:3000/submit_panas_2
    axios
      .post('https://drab-jade-bonobo-vest.cyclic.cloud/submit_panas_2', formData)
      .then((response) => {
        console.log('Form submitted successfully!');
        navigate('/Questionair3');
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };
 // Modified again
  const navigate = useNavigate();

  return (
    <div>
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <div className="w-100 mt-3" style={{ maxWidth: '1000px' }}>
          <div className="form-container">
            <h2 className="text-center mb-5">Positive and Negative Affect Schedule (PANAS) - Please rate your feelings using the scale below:</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
              {Object.keys(ratings).map((item) => (
                <div className="mb-3" key={item}>
                  <label htmlFor={item}>{item.charAt(0).toUpperCase() + item.slice(1)}:</label>
                  <div className="my-2">
                    {ratingOptions.map((option, index) => (
                      <label key={option} className="radio-label">
                        <input
                          type="radio"
                          name={item}
                          value={index + 1} // Radio button values start from 1
                          checked={ratings[item] === (index + 1).toString()}
                          onChange={() => handleRatingChange(item, (index + 1).toString())}
                          required
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
              <Button type="submit" className="mt-4 mb-4 me-5" id="submitBtn">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default PANAS2;
