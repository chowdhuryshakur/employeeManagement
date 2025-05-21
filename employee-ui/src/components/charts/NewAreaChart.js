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
      name: '20/04/2023',
      Interaction: 1201,
      Duration: 1200
  },
  {
      name: '04/03/2023',
      Interaction: 1500,
      Duration: 1200
  },
  {
      name: '10/11/2023',
      Interaction: 5000,
      Duration: 1000
  },
  {
      name: '30/07/2023',
      Interaction: 1000,
      Duration: 5000
  },
  {
      name: '23/01/2023',
      Interaction: 9000,
      Duration: 4000
  },
  {
      name: '29/09/2023',
      Interaction: 1100,
      Duration: 8000
  },
];
function AreaChartAnalytics({plotdata, keys}) {

  // push teting

  return (
    <>
      {/* <h1 className="text-heading">
            Line Chart Using Rechart
        </h1> */}
        <ResponsiveContainer width="100%" aspect={2}>
            <LineChart width="100%" height={250} data={plotdata}>
            <XAxis dataKey={keys[0]}/>
            
            <Tooltip />
            <Legend />
            <YAxis/>
            <CartesianGrid stroke="#eee" strokeDasharray="1 1"/>
            <Line type="monotone" strokeWidth={4} dataKey={keys[1]} stroke="#0D8BF1" />
            {/* <Line type="monotone" dataKey="Duration" stroke="#82ca9d" /> */}
          </LineChart>
        </ResponsiveContainer>

        {/* <BarChart barCategoryGap={3} data={this.chartData()} id="lastyear" margin={{ top: 0, right: 0, bottom: 0, left: 0 }} maxBarSize={35} > <XAxis axisLine={{ strokeWidth: 0 }} dataKey="date" padding={{ left: 45, right: 15 }} tickLine={false} /> <CartesianGrid strokeDasharray="2 1" vertical={false} /> <ChartTooltip formatter={this.formatValue} /> <Bar dataKey="Key" fill={Colors.BLUE} radius={[0, 5, 5, 0]} /> <YAxis axisLine={{ strokeWidth: 0 }} mirror tick={{ dy: 10, dx: 10 }} tickCount={3} tickFormatter={this.formatValue} tickLine={false} /> </BarChart> */}
    </>
  )
}


export default AreaChartAnalytics