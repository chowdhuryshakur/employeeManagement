import React, {useState} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);



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
export const options = {
  responsive: true,
  plugins: {
    // title: {
    //   display: true,
    //   text: 'Chart.js Line Chart',
    // },
  },
};

function PieChartAnalytics({data}) {

  console.log("data", data?.map(item => item[Object.keys(item)[0]]))
  
  
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
        data: data?.map(item => item[Object.keys(item)[0]]),// [12, 19, 3, 5, 2, 3],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderWidth: 1,
      },
    ],
  })
  return (
    <div className="pie-chart-analytics-wrapper">
      {/* <Pie data={getData} /> */}
      <Line options={options} data={getData} />
    </div>
  )
}

export default PieChartAnalytics