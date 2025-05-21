import React from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 }
];
const data02 = [
  { name: "A1", value: 100 },
  { name: "A2", value: 300 },
  { name: "B1", value: 100 },
  { name: "B2", value: 80 },
  { name: "B3", value: 40 },
  { name: "B4", value: 30 },
  { name: "B5", value: 50 },
  { name: "C1", value: 100 },
  { name: "C2", value: 200 },
  { name: "D1", value: 150 },
  { name: "D2", value: 50 }
];

function PieChartComponent() {
  return (
    <>
    <div className="chart-svg-wrapper pie-chart-column-wrap">
        <ResponsiveContainer>
        <PieChart 
          className="pie-chart-style"
          width="100%"
          height="100%">
          <Pie
            data={data01}
            dataKey="value"
            outerRadius={60}
            fill="#1E90FF"
          />
          <Pie
            data={data02}
            dataKey="value"
            innerRadius={70}
            outerRadius={90}
            fill="#1560bd"
            label
          />
        </PieChart>
        </ResponsiveContainer>
        <ResponsiveContainer>
        <PieChart 
          className="pie-chart-style"
          width="100%"
          height="100%">
          <Pie
            data={data01}
            dataKey="value"
            outerRadius={60}
            fill="#1560bd"
          />
          <Pie
            data={data02}
            dataKey="value"
            innerRadius={70}
            outerRadius={90}
            fill="#1E90FF"
            label
          />
        </PieChart>
        </ResponsiveContainer>
    </div>
    </>
  )
}

export default PieChartComponent