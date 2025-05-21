import React, {useEffect, useState} from 'react'

function TextChartAnalytics({data}) {

  const [tempObj, setTempObj] = useState({})
  const bars = Object.keys(data[0] || {})
  const xAxisTitle = data[0]?.xAxisTitle
  // bars?.splice(bars.indexOf('id'), 1)
  bars?.splice(bars.indexOf('xAxisTitle'), 1)

  console.log(bars?.map((key, index) => key))

  const ObjectToMap = () => {

    for (let index = 0; index < bars?.length; index++) {
      const element = bars[index];
      
      // data
      // data?.map((item, dataIndex) => {
      //   console.log(Object.values(item)?.map((i) => i))
      // })
      
    }
  }

  ObjectToMap()

  // console.log(data.map((item, index) => item[]))

  return (
    <div className='analytics-table'>
      <table>
        <thead>
          <tr>
            {
              bars && bars.map((item, index) => (
                <th key={index}>{item === 'xAxis' ? xAxisTitle : item}</th>
              ))
            }
          </tr>
        </thead>
        <tbody className='text-chart-analytics-tbody'>
          {
            data?.map((item, index) => (
              <tr key={index}>
                {
                  Object.keys(item).map(key => key !== "xAxisTitle" && <td>{item[key]}</td>)
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default TextChartAnalytics