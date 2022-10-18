import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css'
const Chart = (props) => {
 console.log(props.dataPoints);
 const datapointsValues = props.dataPoints.map(dataPoint =>dataPoint.value)
 console.log(datapointsValues);
 const totalMaxValue = Math.max(...datapointsValues);
 
 
  return (
    <div className='chart'>
      {
        props.dataPoints.map(dataPoint =>
           <ChartBar
           key = {dataPoint.label}
           value = {dataPoint.value}
           maxValue = {totalMaxValue}
           label = {dataPoint.label}
           />

          
            )
      }
    </div>
  );
}

export default Chart;
