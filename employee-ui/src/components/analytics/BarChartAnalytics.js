import React from 'react';
import {
  Bar, BarChart, CartesianGrid, Label, ResponsiveContainer,
  Tooltip, XAxis, YAxis
} from "recharts";

const colors = ['#3f51b5', '#009688', '#e91e63', '#673ab7', '#ff5722', '#00FF00', '#FF00FF', '#FFC0CB']

function BarChartAnalytics({data}) {

  const bars = Object.keys(data[0] || {})
  const specificLabel = bars?.filter((value, i) => value !== 'xAxis' && value !== 'xAxisTitle');
 // bars?.splice(bars.indexOf('id'), 1)
 bars?.splice(bars.indexOf('xAxis'), 1)

//  console.log("bar chart", data?.map((item, index) => item.xAxisTitle)[0])

  return (
    <>

      <ResponsiveContainer>
        <BarChart
          width="100%"
          height="100%"
          data={data}
          radius={8}
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
          <YAxis><Label className='xAxis-value' value={specificLabel} offset={-10} angle="-90" position="insideLeft" /></YAxis>
          {/* yaxis */}
          {/* <YAxis>
            <Label className='yAxis-value' angle="-90" 
            value={`test`} 
            offset={0} tick={{ dx: -7 }} position="insideTop" />
          </YAxis> */}
          
          <Tooltip cursor={{fill: 'rgba(0, 128, 0, 0.13)'}} />
          {/* <Legend /> */}
            {
             bars && specificLabel?.map((bar, index) => {
                return <Bar dataKey={bar} fill={colors[index]} />
              })
            }
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}

export default BarChartAnalytics