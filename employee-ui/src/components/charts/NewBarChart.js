import React from 'react';
import {
  Bar, BarChart, CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip, XAxis, YAxis
} from "recharts";

const colors = ['#3f51b5', '#009688', '#e91e63', '#673ab7', '#ff5722', '#00FF00', '#FF00FF', '#FFC0CB']

const data = [
  {
    Platform: 'Facebook',
    Visitor: "4000.00",
    LastWeek: "2400.00",
    amt: "2400",
  },
  {
    Platform: 'Twitter',
    Visitor: 3000,
    LastWeek: 1398,
    amt: 2210,
  },
  {
    Platform: 'Instagram',
    Visitor: 2000,
    LastWeek: 9800,
    amt: 2290,
  },
  {
    Platform: 'LinkedIn',
    Visitor: 2780,
    LastWeek: 3908,
    amt: 2000,
  },
  {
    Platform: 'Youtube',
    Visitor: 1890,
    LastWeek: 4800,
    amt: 2181,
  },
  {
    Platform: 'Raddit',
    Visitor: 2390,
    LastWeek: 3800,
    amt: 2500,
  },
  {
    Platform: 'Direct',
    Visitor: 3490,
    LastWeek: 4300,
    amt: 2100,
  },
];

function NewBarChart() {

  return (
    <>
      <ResponsiveContainer width="100%" aspect={2}>
        <BarChart 
          width="100%" 
          height={250} 
          data={data} 
          barCategoryGap={10}
        >

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Platform" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* <Bar dataKey="LastWeek" fill="#7BC0F7" radius={[10, 10, 0, 0]} /> */}
          <Bar dataKey="Visitor" fill="#3B8AD8" radius={[10, 10, 0, 0]} />
        </BarChart>

        {/* <BarChart barCategoryGap={3} data={this.chartData()} id="lastyear" margin={{ top: 0, right: 0, bottom: 0, left: 0 }} maxBarSize={35} > <XAxis axisLine={{ strokeWidth: 0 }} dataKey="date" padding={{ left: 45, right: 15 }} tickLine={false} /> <CartesianGrid strokeDasharray="2 1" vertical={false} /> <ChartTooltip formatter={this.formatValue} /> <Bar dataKey="Key" fill={Colors.BLUE} radius={[0, 5, 5, 0]} /> <YAxis axisLine={{ strokeWidth: 0 }} mirror tick={{ dy: 10, dx: 10 }} tickCount={3} tickFormatter={this.formatValue} tickLine={false} /> </BarChart> */}
        </ResponsiveContainer>
    </>
  )
}


export default NewBarChart