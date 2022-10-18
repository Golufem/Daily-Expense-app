import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenseslist.css'

const ExpensesList = (props) => {
    if(props.item.length ===0){
        return( <p className='expenses-list__fallback' >There is no expenses in the selected year</p>)
    }
return (
    <ul className='expenses-list' >
         {props.item.map(expenses => (
        <ExpenseItem
          key = {expenses.id}
          title ={ expenses.title}
          date = {expenses.date}
          price = {expenses.price}
        />
      ))}
      
    </ul>
  );
}

export default ExpensesList;
