import React, { useState } from 'react';
import Question from './Question';

const IntroQuestions = ({ handleResponse }) => {

    const introQuestions = [
        { question: 'Age', options: ['Less than 18', '18-30 years', 'Above 30 years'] },
        { question: 'Gender', options: ['Male', 'Female'] },
        { question: 'Annual Income Range', options: ['Below Rs 10,000', 'Between Rs 10,000 - Rs 50,000', 'Between Rs 50,000 - Rs 100,000', 'Above Rs 100,000'] },
        { question: 'Education Level', options: ['No education', 'High School Graduate', 'Bachelors Degree', 'Masters Degree'] },
      ]      

    const [answers, setAnswers] = useState(Array(introQuestions.length).fill(''));


    return (
      <div>
        <h3>Please Enter your basic information</h3>
        {introQuestions.map((question, index) => (
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
  
  export default IntroQuestions;