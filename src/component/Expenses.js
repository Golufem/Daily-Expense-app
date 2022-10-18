import React, {useState} from 'react';
// import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';


const Expenses = (props) => {
  const [filteredYear, setFilteredYear]= useState("2022");
  const  getDatafromExpenseFilter = (selectedYear) =>{

    setFilteredYear(selectedYear)
    console.log(filteredYear)
  }
  const filteredExpenses = props.datum.filter(
    (expenses => (expenses.date.getFullYear().toString()===filteredYear)));   

   

  return (
   <div>
    <ExpensesFilter selectected ={filteredYear} onMoveYear = {getDatafromExpenseFilter}/>
    <div className='mother'>
    <ExpensesChart expenses= {filteredExpenses}></ExpensesChart>
    <ExpensesList item = {filteredExpenses}/>



      
    </div>
   </div>
  );
}

export default Expenses;
