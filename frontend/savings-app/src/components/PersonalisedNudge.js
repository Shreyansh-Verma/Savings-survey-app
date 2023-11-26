import React, { useState } from 'react';

const PersonalisedNudge = ({ savingHabit }) => {
    return (
      <div>
        {(()=>{
          if(savingHabit ==='Rarely' || savingHabit === 'Never')
          {
            return(
            <p>
            Hi, based on your survey responses. You do not seem to have a proper savings plan.We suggest setting specific savings goals to ensure consistent saving habits.
            Consider allocating a portion of your income regularly towards savings to build a safety net or work towards a specific financial target.
            Tools like automatic transfers to a savings account might help you save consistently without relying on surplus funds.
            </p>)
          }
          else
          {
            return(
            <p>
            Hi, based on your survey responses it is good to see you taking steps towards adequate savings. To further improve your savings behavior we suggest setting specific savings goals to ensure consistent saving habits.
            Consider allocating a portion of your income regularly towards savings to build a safety net or work towards a specific financial target.
            Tools like automatic transfers to a savings account might help you save consistently without relying on surplus funds.
            </p>)
          }
        })()}
      </div>
    );
  };
  
  export default PersonalisedNudge;