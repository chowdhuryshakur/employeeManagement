import React, { useEffect } from 'react';
import {
  Area, AreaChart, CartesianGrid, Label, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis
} from "recharts";
import Drag from '../../images/drag.png';
import WhiteCanvas from '../WhiteCanvas';

const data = [
  {
    name: 'Page A',
    uv: "4000.00",
    pv: "2400.00",
    amt: "2400",
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function AreaChartAnalytics({data}) {

  const colors = ['#3f51b5', '#009688', '#e91e63', '#673ab7', '#ff5722', '#00FF00', '#FF00FF', '#FFC0CB']

  const bars = Object.keys(data[0] || {})
  const specificLabel = bars?.filter((value, i) => value !== 'xAxis' && value !== 'xAxisTitle');

 bars?.splice(bars.indexOf('xAxis'), 1)

 console.log("area chart", specificLabel)

  useEffect(() => {}, [bars])
  
  return (
    <>
      {
        bars?.length ? (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 10,
                left: 15,
                bottom: 10
              }}
              width="100%"
              height="100%"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="xAxis">
                {
                  data?.map((item, index) => (
                    <Label className='xAxis-value' value={data && data?.map((item, index) => item.xAxisTitle)[0]} offset={-10} position="insideBottom" />
                  ))
                }
              </XAxis>
              <Line type="monotone"  strokeDasharray="3 3" dataKey="value" stroke="red" 
                  dot={{ stroke: 'red', strokeWidth: 5, r: 10,strokeDasharray:''}}
              />
              <YAxis>
                <Label className='yAxis-value' angle="-90" 
                value={specificLabel} 
                offset={-10} position="insideLeft" />
                {/* <Label cx={30} className='new-shape' value="Y-Axis Value" angle="-90" /> */}
              </YAxis>
              <Tooltip />
              
              {
              bars && specificLabel?.map((bar, index) => {
                  return <Area type="monotone" dataKey={bar} stroke={colors[index]} fill={colors[index]} />
                })
              }
              <Legend layout="horizontal" verticalAlign="top" align="center" />
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          <WhiteCanvas
            h2="Build visual with your data"
            p="Select or drup and drop fields from report canvas"
            icon={<img src={Drag} alt="drag" />}>
          </WhiteCanvas>
        )
      }
    </>
  )
}

export default AreaChartAnalytics