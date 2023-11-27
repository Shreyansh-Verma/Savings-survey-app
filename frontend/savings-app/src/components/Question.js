import React, { useState } from 'react';
import App from '../App';

const Question = ({ question, options, sectionInfo, questionNumber }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    sectionInfo(e.target.value, questionNumber);
  };

  return (
    <div>
      <h3 className='text2'>{question}</h3>
      <form>
        {options.map((option, index) => (
          <div key={index}>
            <label className='text3'>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
              {option}
            </label>
          </div>
        ))}
        {/* <button type="submit">Submit</button> */}
      </form>
    </div>
  );
};

export default Question;
