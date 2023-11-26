import React, { useState } from 'react';

const SocialNudge = ({ incomeIndx }) => {
    const incomeRange = ['below Rs 10,000' , 'between Rs 10,000 to Rs 50,000', 'between Rs 50,000 to Rs 100,000', 'above Rs 100,000']
    const savingResponse = ['between Rs 0 to Rs 2,000', 'between Rs 2,000 to Rs 10,000','between Rs 10,000 and Rs 20,000', 'above Rs 20,000']
    return (
      <div>
        <p>
        Based on your responses your monthly income lies {incomeRange[incomeIndx]} .A common guideline advises using half of your monthly income for basic living needs, allocating 30% for lifestyle expenses, and saving 20% for the future and this is generally followed by people of all the income brackets. 
        The ideal saving of people in your income range is {savingResponse[incomeIndx]}. You may use this as a reference to adjust your savings behavior.
        </p>  
      </div>
    );
  };
  
  export default SocialNudge;