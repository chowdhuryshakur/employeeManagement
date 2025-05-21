import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "01/02/2019",
    uv: 4000,
    pv: 2400,
    amt: 2400,
    test: 2400,
  },
  {
    name: "02/03/2020",
    uv: 3000,
    pv: 1398,
    test: 1408,
    amt: 2210
  },
  {
    name: "04/05/2020",
    uv: 2000,
    pv: 1398,
    test: 4800,
    amt: 2290
  },
  {
    name: "05/03/2021",
    uv: 2780,
    pv: 1398,
    test: 4908,
    amt: 2000
  },
  {
    name: "06/09/2021",
    uv: 1890,
    pv: 1398,
    test: 4300,
    amt: 2181
  },
  {
    name: "07/05/2022",
    uv: 2390,
    pv: 1398,
    test: 2200,
    amt: 2500
  },
  {
    name: "08/01/2022",
    uv: 3490,
    pv: 1398,
    test: 5300,
    amt: 2100
  }
];

function AreaChartComponent() {
  return (
    <>
    <div className="chart-svg-wrapper">
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: -10,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#1560bd" fill="#1E90FF" />
          <Area type="monotone" dataKey="test" stroke="#1E90FF" fill="#1560bd" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
    </>
  )
}

export default AreaChartComponent