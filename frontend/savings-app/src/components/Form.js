import React, { useState, useEffect } from 'react';
import Section from './Section';
import IntroQuestions from './IntroQuestions';
import SectionInfo from './SectionInfo';
import Nudges from './Nudges';
import PersonalisedNudge from './PersonalisedNudge';
import GoalSettingNudge from './GoalSettingNudge';
import PostSurvey from './PostSurvey';
import SocialNudge from './SocialNudge';
import MidSurveyQuestions from './MidSurveyQuestions';
import axios from 'axios';

// import SubmitButton from './SubmitButton';
import './Form.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'


// const BACKEND_URL = 'http://localhost:5000/api/store-answers';
const BACKEND_URL = 'https://savings-app-backend.onrender.com/api/store-answers';


const Form = () => {

  const [section, setSection] = useState(1);
  const [responses, setResponses] = useState([]);
  const [includeNudge, setIncludeNudge] = useState(0);
  const [introAnswers, setIntroAnswers] = useState(Array(4).fill(''));
  const [prevQuestionIndx, setPrevQuestionIndx] = useState(0)
  const [midSurveyAnswers, setMidSurveyAnswers] = useState(Array(2).fill(''));
  const [postSurveyAnswers, setPostSurveyAnswers] = useState(Array(2).fill(''));

  const incomeRange = {
    'Below Rs 10,000': 0,
    'Between Rs 10,000 - Rs 50,000': 1,
    'Between Rs 50,000 - Rs 100,000': 2,
    'Above Rs 100,000': 3,
  }

  const handleSubmit = () => {
    let answersArray = [];
    if (!includeNudge) {
      if (!areAllQuestionsAnswered(midSurveyAnswers)) {
        alert("Please answer all the questions");
        return;
      }
      answersArray = [
      { nudgeType:  includeNudge},
      { answer: [introAnswers, midSurveyAnswers] },
    ];
    }
    else {
      if (postSurveyAnswers[0] === '' || postSurveyAnswers[1].length === 0) {
        alert("Please answer all the questions");
        return;
      }
      answersArray = [
        { nudgeType:  includeNudge},
        { answer: [introAnswers, midSurveyAnswers, postSurveyAnswers] },
      ];
    }
    const answersJSON = JSON.stringify({ answers: answersArray });
    console.log("answersJSON = ",answersJSON);
    axios.post(BACKEND_URL, { answersJSON })
    .then(response => {
      console.log('Response:', response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
    
    setSection(section+1);
  }

  const handleNextSection = () => {
    if (prevQuestionIndx == 0) {
      console.log('intro - ', introAnswers);
      if (!areAllQuestionsAnswered(introAnswers)) {
        alert("Please answer all the questions");
      }
      else {
        setPrevQuestionIndx(prevQuestionIndx + 1);
        setSection(section + 1);
      }
    }
    else if (prevQuestionIndx == 1) {
      if (!areAllQuestionsAnswered(midSurveyAnswers)) {
        alert("Please answer all the questions");
      }
      else {
        setPrevQuestionIndx(prevQuestionIndx + 1);
        setSection(section + 1);
      }
    }
    else if (prevQuestionIndx == 5) {
      if (postSurveyAnswers[0] === '' || postSurveyAnswers[1].length === 0) {
        alert("Please answer all the questions");
      }
      else {
        setPrevQuestionIndx(prevQuestionIndx + 1);
        setSection(section + 1);
      }
    }
    else {
      setPrevQuestionIndx(prevQuestionIndx + 1);
      setSection(section + 1);
    }
  };

  useEffect(() => {
    setIncludeNudge(Math.floor(Math.random() * 2));
  }, []);

  const handleResponseIntro = (response, index) => {
    const updatedAnswers = [...introAnswers];
    updatedAnswers[index] = response;
    setIntroAnswers(updatedAnswers);
  };


  const handleResponseMid = (response, index) => {
    const updatedAnswers = [...midSurveyAnswers];
    updatedAnswers[index] = response;
    setMidSurveyAnswers(updatedAnswers);
  };

  const handleResponsePost = (response, index) => {
    const updatedAnswers = [...postSurveyAnswers];
    updatedAnswers[index] = response;
    setPostSurveyAnswers(updatedAnswers);
  };

  const areAllQuestionsAnswered = (arr) => {
    return arr.every(answer => answer !== '');
  };

  const ExperimentFlow = [
    <IntroQuestions handleResponse={handleResponseIntro} />,
    <MidSurveyQuestions handleResponse={handleResponseMid} />,
    <PersonalisedNudge savingHabit={midSurveyAnswers[0]} />,
    <GoalSettingNudge savingsGoal={midSurveyAnswers[1]} />,
    <SocialNudge incomeIndx={incomeRange[introAnswers[2]]} />,
    <PostSurvey handleResponse={handleResponsePost} />
  ]

  const ControlFlow = [
    <IntroQuestions handleResponse={handleResponseIntro} />,
    <MidSurveyQuestions handleResponse={handleResponseMid} />
  ]

  return (
    <div className="container">
      {/* <h1>Form Title, {includeNudge}</h1>  */}
      {(() => {
        if (includeNudge) {
          if (section <= ExperimentFlow.length) {
            if (section !== ExperimentFlow.length) {
              return (
                  <div>
                    {ExperimentFlow[section - 1]}
                    <button onClick={handleNextSection}>Next</button>
                  </div>
              )
            }
            else {
              return (
                <div>
                  {ExperimentFlow[section - 1]}
                  <button onClick={handleSubmit}>Submit</button>
                </div>
              )
            }
          }
          else {
            return (<div>
              <h1>
                Response Recorded!
                Thanks for participating in the survey!
              </h1>
            </div>)
          }
        }
        else {
          if (section <= ControlFlow.length) {
            if (section !== ControlFlow.length) {
              return (
                <div>
                  {ControlFlow[section - 1]}
                  <button onClick={handleNextSection}>Next</button>
                </div>
              )
            }
            else {
              return (
                <div>
                  {ControlFlow[section - 1]}
                  <button onClick={handleSubmit}>Submit</button>
                </div>
              )
            }
          }
          else {
            return (
              <div>
                <h1>
                  Response Recorded!
                  Thanks for participating in the survey!
                </h1>
              </div>
            )
          }
        }
      })()}
    </div>
  );
};

export default Form;
