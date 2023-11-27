import React, { useState } from 'react';
import './Nudge.css'

const SocialNudge = ({ incomeIndx }) => {
    const incomeRange = ['Below Rs 10,000' , 'Between Rs 10,000 to Rs 50,000', 'Between Rs 50,000 to Rs 100,000', 'Above Rs 100,000']
    const savingResponse = ['Between Rs 0 to Rs 2,000', 'Between Rs 2,000 to Rs 10,000','Between Rs 10,000 and Rs 20,000', 'Above Rs 20,000']
    return (
      <div>
        <p className ="styled-paragraph-new">
        Based on your responses your monthly income lies {incomeRange[incomeIndx]}.
        <br/>
        <br/>
        A common guideline advises using half of your monthly income for basic living needs, allocating 30% for lifestyle expenses, and saving 20% for the future and this is generally followed by people of all the income brackets. 
        <br/>
        <br/>
        The ideal saving of people in your income range is {savingResponse[incomeIndx]}. You may use this as a reference to adjust your savings behavior.
        </p>  
      </div>
    );
  };
  
  export default SocialNudge;