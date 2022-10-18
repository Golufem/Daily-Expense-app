import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItemStyle.css";
import Card from "./Card";

const ExpenseItem = (props) => {


  return (
   


    <Card className="Expenses">
      <div className="Expense_date">
       <ExpenseDate date = {props.date}></ExpenseDate>
      </div>
      <div className="ExpenseInfo">
        <div className="title">{props.title}</div>
        <div className="price">${props.price}</div>
      </div>
      
    </Card>
  );
}

export default ExpenseItem;
