import React, { useState } from 'react';

const Question = ({ question, options, sectionInfo, questionNumber }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    sectionInfo(e.target.value, questionNumber);
  };

  return (
    <div>
      <h3>{question}</h3>
      <form>
        {options.map((option, index) => (
          <div key={index}>
            <label>
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
