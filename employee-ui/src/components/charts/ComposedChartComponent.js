import React from 'react';
import {
  Area,
  Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis,
  YAxis
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 590,
    pv: 800,
    amt: 1400
  },
  {
    name: "Page B",
    uv: 868,
    pv: 967,
    amt: 1506
  },
  {
    name: "Page C",
    uv: 1397,
    pv: 1098,
    amt: 989
  },
  {
    name: "Page D",
    uv: 1480,
    pv: 1200,
    amt: 1228
  },
  {
    name: "Page E",
    uv: 1520,
    pv: 1108,
    amt: 1100
  },
  {
    name: "Page F",
    uv: 1400,
    pv: 680,
    amt: 1700
  }
];

function ComposedChartComponent() {
  return (
    <>
    <div className="chart-svg-wrapper">
      <ResponsiveContainer>
        <ComposedChart
      width={400}
      height={250}
          data={data}
          margin={{
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
      </div>
    </>
  )
}

export default ComposedChartComponent