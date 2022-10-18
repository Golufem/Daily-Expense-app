import React, {useState} from 'react';
import './NewExpense.css'
import NewExpenseForm from './NewExpenseForm';
import Card from '../Card';

const NewExpense = (props) => {
const [isEditing,setEditing] = useState(false)
 const saveExpenseDataHandler = (enterExpenseData) =>{
  const expenseData = {
    ...enterExpenseData,
    id: Math.random().toString()
  };
  props.onMoveDatahere(expenseData);
  setEditing(false);
 }
const  butttonOnClickHandler =()=>(
 setEditing(true)
) 
const  butttonOnClickHandlerStopEditing =()=>(
  setEditing(false)
 ) 
if (isEditing ===false){
  return (
    <Card className='new-expense'>
      
      <button onClick={butttonOnClickHandler}>Add New Expenses</button>
       
    </Card>
  );
}
   return (
    <Card className='new-expense'>
      
      <NewExpenseForm onsaveExpenseData = {saveExpenseDataHandler} stop = {butttonOnClickHandlerStopEditing}/>
       
    </Card>
  );
}

export default NewExpense;
