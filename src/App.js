import React, {useState} from 'react';
import "./component/App.css";
import styled from 'styled-components';


import Card from './component/Card';

import NewExpense from './component/NewExpense/NewExpense';
// import Chart from './component/Chart/Chart';

import Expenses from './component/Expenses';
 const Button = styled.h2`
 
 border:`

 
  
   const  initial_data = [
    {
      id: "e1",
      date: new Date(2022,7,22),
      title: "Car Insurance",
      price: 345.01

    },
    {
      id: "e2",
      date: new Date(2022,3,5),
      title: "Housing",
      price: 130.45

    },
    {
      id: "e3",
      date: new Date(2021,11,7),
      title: "Feeding",
      price: 100.67

    },
    
    {
      id: "e4",
      date: new Date(2022,5,17),
      title: "Clothing",
      price: 150.73

    }
  ]
  const App = () => {
    const [data,setData] =useState(initial_data);
  const dataIsHere = (expenseData) =>{
    setData((prevState)=>{
    return [expenseData,...initial_data ]
    });
    console.log(expenseData)
  }
   
  
  
  return (
    <Card className='main'>
      <NewExpense onMoveDatahere = {dataIsHere}/>
      {/* <Chart></Chart> */}
      <Expenses datum = {data}/>
    </Card>
  );
}

export default App;
