import React, {useState}from 'react';
import "./NewExpenseForm.css"

const NewExpenseForm = (props) => {

const [enteredTitle, setEnteredTitle] = useState('');
const [enteredDate, setEnteredDate] = useState('');
const [enteredAmount, setEnteredAmount] = useState('')


const titleChangeHandler = (event) =>{
    setEnteredTitle(event.target.value)
  }


const dateChangeHandler = (event) =>{
    setEnteredDate(event.target.value)
  }
  const amountChangeHandler = (event) =>{
    setEnteredAmount(event.target.value)
  }

const submitHandeler =(k) =>{
  k.preventDefault();

  const expenseData = {
    title: enteredTitle,
    date: new Date(enteredDate),
    price: +enteredAmount
  };
  props.onsaveExpenseData(expenseData);
  setEnteredAmount('');
 setEnteredDate('');
setEnteredTitle('');

}




  return (
    <form onSubmit={submitHandeler}>
        <div className='new-expense_controls'>
            
            <div className='new-expense_control'>
                <label>Title</label>
                 <input
                  type = "text" 
                  value={enteredTitle}
                  onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense_control'>
                <label>Amount</label>
                <input 
                type = "number" 
                min= "0.01"
                 step="0.01" 
                 value={enteredAmount} 
                 onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense_control'>
                <label>Date</label>
                <input
                 type = "date" 
                  min= "2019-01-01" 
                  step="2022-12-31"
                  value ={enteredDate}
                  onChange={dateChangeHandler}  />
            </div>
        </div>
          
        <div className='new-expense_actions'>
            <button type='button' onClick={props.stop }>Cancel</button>
            <button type='submit'>Submit</button>
           
        </div>
    </form>
  );
}

export default NewExpenseForm;
