import React, {useState} from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

const data = [
  {
    name: "01/02/2020",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "02/03/2020",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "04/04/2020",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "05/05/2020",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "06/06/2020",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "07/07/2020",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "08/08/2020",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

function BarChartComponent() {

  // source: https://codesandbox.io/s/the-color-changing-bar-chart-y1k2p?from-embed=&file=/src/ColorChangingAndCustomToolTip.js:1095-1340

  const [focusBar, setFocusBar] = useState(null);
  const [mouseLeave, setMouseLeave] = useState(true);

  const CustomToolTip = ({ active, payload, label }) => {
    console.log("active", active)
    console.log("payload", payload)
    console.log("label", label)
    if (active) {
      return (
        <div className={"Custom-Tooltip"}>
          <p className='tooltip-label'>{label}</p>
          {payload[0].dataKey + ": " + payload[0].value}
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <div className='chart-svg-wrapper'>
      <ResponsiveContainer>
        <BarChart
          width="100%"
          height="100%"
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: -10,
            bottom: 0
          }}
          barCategoryGap={0}
          maxBarSize={80}
          onMouseMove={(state) => {
            if (state.isTooltipActive) {
              setFocusBar(state.activeTooltipIndex);
              setMouseLeave(false);
            } else {
              setFocusBar(null);
              setMouseLeave(true);
            }
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tick={{ dy: 0, dx: 0 }} tickCount={8} axisLine={{ strokeWidth: 0 }} tickLine={false} />
          <Tooltip cursor={false} />
          <Legend />
          {/* <Bar dataKey="pv" fill="#1560bd" /> */}
          <Bar dataKey="uv" fill="#1E90FF" radius={[10, 10, 0, 0]}>

            {data.map((entry, index) => (
            <Cell
              fill={
                focusBar === index || mouseLeave
                  ? "#2B5CE7"
                  : "rgba(43, 92, 231, 0.2)"
              }
            />
          ))}

          </Bar>

          <Bar dataKey="pv" fill="#009688" radius={[10, 10, 0, 0]} >

            {data.map((entry, index) => (
            <Cell
              fill={
                focusBar === index || mouseLeave
                  ? "#009688"
                  : "rgba(43, 92, 231, 0.2)"
              }
            />
          ))}

          </Bar>
        </BarChart>
    </ResponsiveContainer>
      </div>
    </>
  )
}

export default BarChartComponent