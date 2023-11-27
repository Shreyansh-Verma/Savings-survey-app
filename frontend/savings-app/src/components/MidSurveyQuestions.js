import React, { useState } from 'react';
import Question from './Question';

const MidSurveyQuestions = ({ handleResponse }) => {

    const MidQuestions = [
        { question: 'Current Saving Habits', options: ['Never', 'Rarely', 'Daily', 'Weekly', 'Monthly' ]},
        { question: 'Do you have a savings goal?', options: ['Yes', 'No' ]}
      ]      

    return (
      <div>
        <h2>Please answer the following questions</h2>
        <br/>
        {MidQuestions.map((question, index) => (
        <Question
          key={index}
          question={question.question}
          options={question.options}
          sectionInfo = {handleResponse}
          questionNumber = {index}
          />
      ))}
      </div>
    );
  };
  
  export default MidSurveyQuestions;