import React from 'react';
import {
  CartesianGrid,
  LineChart,
  Legend,
  Line,
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

function LineChartComponent2() {
  const formattedData = data.map(i => ({
    name: i.date.split('T')[0],
    Response_time: i.Response_time // Use the correct key here
  }));

  return (
    <>
      <div className="chart-svg-wrapper">
        <ResponsiveContainer>
          <LineChart
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
            <Line type="monotone" dataKey="Response_time" stroke="#009688" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default LineChartComponent2;
