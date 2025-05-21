import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const dataStatic = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

function PieChartAnalytics({data}) {
  
  
  const getFirstIndexObj = () => {
    const tempArr = []
    data?.map((item, index) => {
      tempArr.push(Object.values(item)[0])
    })
    return tempArr; 
  }

  const [getData, setGetData] = useState({
    labels: data?.map(item => item.xAxis),
    datasets: [
      {
        label: '# of Votes',
        data: getFirstIndexObj(),// [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          '#CFF5E7',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          '#CFF5E7',
        ],
        borderWidth: 1,
      },
    ],
  })
  return (
    <div className="pie-chart-analytics-wrapper">
      <Pie data={getData} />
    </div>
  )
}

export default PieChartAnalytics