import React from 'react';
import {
  CartesianGrid, Label, Line, LineChart, ResponsiveContainer, Tooltip, XAxis,
  YAxis
} from "recharts";


function LineChartAnalytics({data}) {
  
  const colors = ['#3f51b5', '#009688', '#e91e63', '#673ab7', '#ff5722', '#00FF00', '#FF00FF', '#FFC0CB']

  const bars = Object.keys(data[0] || {})
  // bars?.splice(bars.indexOf('id'), 1)
  bars?.splice(bars.indexOf('xAxis'), 1)
  bars?.splice(bars.indexOf('xAxisTitle'), 1)

  // push teting

  return (
    <>
    <ResponsiveContainer>
      <LineChart
        width="100%"
        height="100%"
        data={data}
        margin={{
          top: 10,
          right: 0,
          left: 15,
          bottom: 10
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="xAxis">
          <Label className='xAxis-value' value={data && data?.map((item, index) => item.xAxisTitle)[0]} offset={-10} position="insideBottom" />
        </XAxis>
        <YAxis> 
          <Label className='yAxis-value' angle="-90" value={bars} offset={-10} position="insideLeft" />
        </YAxis>
        <Tooltip />
        {
          bars && bars?.map((bar, index) => {
            return <Line
              type="monotone"
              dataKey={bar}
              stroke={colors[index]}
              activeDot={{ r: 8 }}
            />
          })
        }
        {/* <Legend /> */}
        <Line type="monotone" stroke="#007a6e" />
      </LineChart>
    </ResponsiveContainer>
    </>
  )
}

export default LineChartAnalytics