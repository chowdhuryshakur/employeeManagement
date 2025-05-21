import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";


// Assuming this data array is generated outside and imported or defined within this file
const data = []; // Your generated data should be here

const startDate = new Date("2024-03-01");
const endDate = new Date("2024-03-31");
for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
  data.push({
    date: d.toISOString(),
    Response_time: Math.floor(Math.random() * (120 - 30 + 1)) + 30
  });
}

const formattedData = data.map(i => ({
  name: i.date.split('T')[0],
  Response_time: i.Response_time // Use the correct key here
}));


function LineChartComponent() {
  return (
    <>
    <div className="chart-svg-wrapper">
      <ResponsiveContainer>
       
        <BarChart
          width='100%'
          height='100%'
          data={formattedData}
          margin={{
            top: 0,
            right: 0,
            bottom: 0,
            left: -10
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name"/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Response_time" fill="#009688" />
        </BarChart>
      </ResponsiveContainer>
    </div>
    </>
  )
}

export default LineChartComponent