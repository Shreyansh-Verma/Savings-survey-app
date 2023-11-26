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
        <h3>Please complete the following questionnaire</h3>
        {
      <div>
        <Question
        key={0}
        question={postQuestions[0].question}
        options={postQuestions[0].options}
        sectionInfo = {handleResponse}
        questionNumber = {0}
        />
      <h3>{postQuestions[1].question}</h3>
      {postQuestions[1].options.map((option, index) => (
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
      ))}
      </div> 
      }
      </div>
    );
  };
  
  export default PostSurvey;