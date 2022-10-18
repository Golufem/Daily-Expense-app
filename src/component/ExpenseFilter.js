import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  let value;
  const onChangeHandler = (e)=>{
       value = e.target.value;
      console.log(value)
      props.onMoveYear(value)
  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={value} onChange={onChangeHandler}>
          <option selected value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;