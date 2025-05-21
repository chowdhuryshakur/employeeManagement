import React from 'react';
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  LineChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

// Dummy data for the LineChartComponent1
const startDate = new Date("2024-03-01");
const endDate = new Date("2024-03-31");
const data = [];

for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
  data.push({
    date: date.toISOString(), // This ensures the date string includes 'T'
    averageSessTime: Math.floor(Math.random() * (120 - 30 + 1)) + 30 // Random average session time between 30 and 120
  });
}

function LineChartComponent1() {
  return (
    <>
    <div className="chart-svg-wrapper">
      <ResponsiveContainer>
        <LineChart
          width="100%"
          height="100%"
          data={data?.map(i => { return   {
            name: i.date.split('T')[0],
            Average_session_time: i.averageSessTime
          }})}
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
          <Line type="monotone" dataKey="Average_session_time" stroke="#009680" activeDot={{ r: 8 }} />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
    </>
  )
}

export default LineChartComponent1