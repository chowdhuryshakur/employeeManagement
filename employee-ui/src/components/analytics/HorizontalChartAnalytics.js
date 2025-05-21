import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Area,
  Bar, CartesianGrid, ComposedChart, Label, Legend,
  ResponsiveContainer, Tooltip, XAxis,
  YAxis
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: 'Page B',
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: 'Page C',
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: 'Page D',
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: 'Page E',
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: 'Page F',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
];

function HorizontalChartAnalytics({data}) {

  const colors = ['#3f51b5', '#009688', '#e91e63', '#673ab7', '#ff5722', '#00FF00', '#FF00FF', '#FFC0CB']

  const bars = Object.keys(data[0] || {})
  // bars?.splice(bars.indexOf('id'), 1)
  bars?.splice(bars.indexOf('xAxis'), 1)
  
  return (
    <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          width={500}
          height={400}
          data={data}
          margin={{
            top: 0,
            right: 0,
            bottom: 50,
            left: 25,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="xAxis" type="category" scale="band" >
            <Label className='xAxis-value' value={data && data?.map((item, index) => item.xAxisTitle)[0]} offset={-10} angle="-90" position="insideLeft" />
          </YAxis>
          <Tooltip />
          <Legend layout="horizontal" verticalAlign="top" align="center" />
          {/* <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}

          {
            bars && bars?.filter((item, index) => item !== 'xAxis' && item !== 'xAxisTitle').map((y, i) => (
                // <Bar dataKey={y} barSize={20} fill={colors[i]} />
                <Label dataKey={y} fill={colors[i]} stroke={colors[i]} />
            ))
          }

          {/* <XAxis dataKey="xAxis">
                <Label className='xAxis-value' value={data && data?.map((item, index) => item.XAxis)[0]} offset={-10} position="bottom" />
          </XAxis> */}

          {
            bars && bars?.filter((item, index) => item !== 'xAxis' && item !== 'xAxisTitle').map((y, i) => (
                <Bar dataKey={y} barSize={20} fill={colors[i]} />
            ))
          }

        </ComposedChart>
      </ResponsiveContainer>
  )
}

export default HorizontalChartAnalytics