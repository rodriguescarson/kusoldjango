import React from 'react';
import { Bar } from 'react-chartjs-2';
import Typography from '@mui/material/Typography';
import './style.css';


<div id="img-container">
   <Typography gutterBottom variant="h4" padding="2rem" font-weight="500" color="white" component="div">
        Analytics Of Services
        </Typography></div>

const rand = () => Math.round(Math.random() * 20 - 10);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      type: 'line',
      label: 'Service 1',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 2,
      fill: false,
      data: [rand(), rand(), rand(), rand(), rand(), rand()],
    },
    {
      type: 'bar',
      label: 'Service 2',
      backgroundColor: 'rgb(255, 99, 132)',
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
      borderColor: 'white',
      borderWidth: 2,
    },
    {
      type: 'bar',
      label: 'Service 3',
      backgroundColor: 'rgb(75, 192, 192)',
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
    },
  ],
};

const MultiType = () => (
  < div id="chart">
    <div className='header'>
      <h1 className='title'>MultiType Chart</h1>
      <div className='links'>
    
      </div>
    </div>
    <Bar data={data} />
    
  </div>
);

export default MultiType;