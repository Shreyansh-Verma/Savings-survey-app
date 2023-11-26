import React, { useState } from 'react';

const GoalSettingNudge = ({ savingsGoal }) => {
    return (
      
      <div>
          {(()=>{
          if(savingsGoal === 'Yes')
          {
            return(
              <p>
              Goal setting forms an important aspect of savings for future. It is good to see that you already have set some saving goals, we further recommend the following tools to aid you in your future goal settings.
              </p>)
          }
          else
          {
            return(
              <p>
              Goal setting forms an important aspect of savings for future. It looks like currently do not have proper savings goal, we recommend the following tools to aid you in your future goal settings.
              </p>)
          }
        })()}

        <ul>
        <li> <a href="https://www.mint.com/">Mint</a> </li>
        <li> <a href="https://www.youneedabudget.com/">YNAB (You Need a Budget)</a> </li>
        <li> <a href="https://www.smartypig.com/"> Smarty Pig</a> </li>
        <li> <a href="https://www.capitalone.com/"> Capital One </a> </li>
        </ul>
      </div>
    );
  };
  
  export default GoalSettingNudge;