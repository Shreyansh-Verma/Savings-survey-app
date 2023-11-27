import React, { useState } from 'react';
import './Nudge.css';

const PersonalisedNudge = ({ savingHabit }) => {
    return (
      <div>
        {(()=>{
          if(savingHabit ==='Rarely' || savingHabit === 'Never')
          {
            return(
            <p className = "styled-paragraph-new">
            Hi, based on your survey responses. You do not seem to have a proper savings plan.
            <br/>
            <br/>
            We suggest setting specific savings goals to ensure consistent saving habits.
            <br/>
            <br/>
            Consider allocating a portion of your income regularly towards savings to build a safety net or work towards a specific financial target.
            Tools like automatic transfers to a savings account might help you save consistently without relying on surplus funds.
            </p>)
          }
          else
          {
            return(
            <p className = "styled-paragraph-new">
            Hi, based on your survey responses it is good to see you taking steps towards adequate savings. 
            <br/>
            <br/>
            To further improve your savings behavior we suggest setting specific savings goals to ensure consistent saving habits.
            <br/>
            <br/>
            Consider allocating a portion of your income regularly towards savings to build a safety net or work towards a specific financial target.
            Tools like automatic transfers to a savings account might help you save consistently without relying on surplus funds.
            </p>)
          }
        })()}
      </div>
    );
  };
  
  export default PersonalisedNudge;