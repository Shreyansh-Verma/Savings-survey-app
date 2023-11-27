// GoalSettingNudge.js

import React from 'react';
import '../App.css';

const GoalSettingNudge = ({ savingsGoal }) => {
  return (
    <div>
      {(() => {
        if (savingsGoal === 'Yes') {
          return (
            <p>
              Goal setting forms an important aspect of savings for the future. It is good to see that you already have set some saving goals. We further recommend the following tools to aid you in your future goal settings.
            </p>
          );
        } else {
          return (
            <p>
              Goal setting forms an important aspect of savings for the future. It looks like you currently do not have a proper savings goal. We recommend the following tools to aid you in your future goal settings.
            </p>
          );
        }
      })()}

      <ul>
        <li>
          <a onclick="func(0)" href="https://www.mint.com/">Mint</a>
        </li>
        <li>
          <a onclick="func(0)" href="https://www.youneedabudget.com/">YNAB (You Need a Budget)</a>
        </li>
        <li>
          <a onclick="func(0)" href="https://www.smartypig.com/">Smarty Pig</a>
        </li>
        <li>
          <a onclick="func(0)" href="https://www.capitalone.com/">Capital One</a>
        </li>
      </ul>
    </div>
  );
};

export default GoalSettingNudge;
