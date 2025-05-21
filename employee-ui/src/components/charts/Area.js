import React from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

// Sample chart data
const pdata = [
  {
      name: 'MongoDb',
      student: 1201,
      fees: 1200
  },
  {
      name: 'Javascript',
      student: 1500,
      fees: 1200
  },
  {
      name: 'PHP',
      student: 5000,
      fees: 1000
  },
  {
      name: 'Java',
      student: 1000,
      fees: 5000
  },
  {
      name: 'C#',
      student: 9000,
      fees: 4000
  },
  {
      name: 'C++',
      student: 1000,
      fees: 8000
  },
];
function AreaChartAnalytics() {

  // push teting

  return (
    <>
      {/* <h1 className="text-heading">
            Line Chart Using Rechart
        </h1> */}
        <ResponsiveContainer width="100%" aspect={2}>
            <LineChart width="100%" height={250} data={pdata}>
            <XAxis dataKey="name"/>
            
            <Tooltip />
            <Legend />
            <YAxis/>
            <CartesianGrid stroke="#eee" strokeDasharray="1 1"/>
            <Line type="monotone" strokeWidth={4} dataKey="student" stroke="#0D8BF1" />
            <Line type="monotone" dataKey="fees" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>

        {/* <BarChart barCategoryGap={3} data={this.chartData()} id="lastyear" margin={{ top: 0, right: 0, bottom: 0, left: 0 }} maxBarSize={35} > <XAxis axisLine={{ strokeWidth: 0 }} dataKey="date" padding={{ left: 45, right: 15 }} tickLine={false} /> <CartesianGrid strokeDasharray="2 1" vertical={false} /> <ChartTooltip formatter={this.formatValue} /> <Bar dataKey="Key" fill={Colors.BLUE} radius={[0, 5, 5, 0]} /> <YAxis axisLine={{ strokeWidth: 0 }} mirror tick={{ dy: 10, dx: 10 }} tickCount={3} tickFormatter={this.formatValue} tickLine={false} /> </BarChart> */}
    </>
  )
}


export default AreaChartAnalytics