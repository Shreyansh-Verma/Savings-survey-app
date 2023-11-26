import React, { useState } from 'react';
import Question from './Question';

const Nudges = ({ SectionInfo }) => {
    const nudges = [
          { question: 'Q1', options: ['Option A', 'Option B', 'Option C'] },
          { question: 'Q2', options: ['Option 1', 'Option 2', 'Option 3'] },
      ];

      

    return (
      <div>
        <h1>{SectionInfo}</h1>
        {nudges.map((question, index) => (
        <Question
          key={index}
          question={question.question}
          options={question.options}
          // onResponse={handleResponse}
        />
      ))}
      </div>
    );
  };
  
  export default Nudges;