import React from 'react';
import Question from './Question';

const Section = ({ questions, onNext }) => {
  const handleResponse = (response) => {
    onNext(response);
  };

  return (
    <div>
      {questions.map((question, index) => (
        <Question
          key={index}
          question={question.question}
          options={question.options}
          onResponse={handleResponse}
        />
      ))}
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default Section;