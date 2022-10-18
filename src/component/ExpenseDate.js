import './ExpenseDateStkyle.css'
const ExpenseDate = (props) => {
  
    
  const day = props.date.getDate();
  const month = props.date.toLocaleString('en-US', {month : 'long'});
  const year = props.date.getFullYear()
    
    
  
    return (
    <div className="dates">
       
            <div className='month'>{month}</div>
            <div className='year'>{year}</div>
            <div className='day'>{day}</div>
    </div>
  );
}

export default ExpenseDate;
