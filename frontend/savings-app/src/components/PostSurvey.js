import React, { useState } from 'react';
import Question from './Question';

const PostSurvey = ({ handleResponse }) => {

    const postQuestions = [
        { question: 'Do you plan to start saving?', options: ['Yes', 'No'] },
        { question: 'If Yes, then which of the factors influenced you to start saving', options: ['Social Comparison', 'Personalised Feedback', 'Goal Setting Info', 'None'] },
      ]      

      const [selectedOptions, setSelectedOptions] = useState([]);

      const handleOptionChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;
    
        if (isChecked) {
          handleResponse([...selectedOptions, value], 1);
          setSelectedOptions([...selectedOptions, value]);
        } else {
          const updatedOptions = selectedOptions.filter((option) => option !== value);
          handleResponse(updatedOptions, 1);
          setSelectedOptions(updatedOptions);
        }
      };

    return (
      <div>
        <h2>Please complete the following questionnaire</h2>
        <br/>
        {
      <div>
        <Question
        key={0}
        question={postQuestions[0].question}
        options={postQuestions[0].options}
        sectionInfo = {handleResponse}
        questionNumber = {0}
        />

<br/>
      <h3 className='text2' >{postQuestions[1].question}</h3>
      <br/>
      
      {postQuestions[1].options.map((option, index) => (
        <>
        <div key={index}>
          <label>
            <input
              type="checkbox"
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={handleOptionChange}
            />
            {option}
          </label>
        </div>
        <br/>
        </>
      ))}
      </div> 
      }
      </div>
    );
  };
  
  export default PostSurvey;