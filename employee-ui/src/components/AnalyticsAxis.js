import React, { useEffect, useState } from 'react'
import { useDrop } from 'react-dnd'
import { BsX } from 'react-icons/bs'
import XAxis from './XAxis';
import YAxis from './YAxis';

function AnalyticsAxis({fileData, tableData, xData, setXData, yData, setYData, toggleFunc, filter, setFilter, xToggleFunc, xfilter, setxFilter, toggleReset}) {

  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "div",
    drop: (item) => getFieldObject(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  useEffect(() => {
    
  }, [tableData])

  const getFieldObject = (obj) => {
    console.log('obj', obj)
    // setBoard()
    // console.log(obj.id)
    // const dragTableData = tempStore?.filter((item) => obj === item.id);
    // console.log('dragTableData', dragTableData)
    const dataArr = []
    for (let i = 1; i < fileData?.dataArray[obj.sheet]?.length ; i++) { // first we map all sheet
      console.log("fileData?.dataArray[obj.sheet][i][obj.id]", fileData?.dataArray[obj.sheet][i][obj.id])
      dataArr.push(fileData?.dataArray[obj.sheet][i][obj.id]) // here, loop the map and matching sheet data wise clicked current index. if current and sheet header field current index is match then push the code on tempArray[]. 
    }
    setBoard((board) => [...board, {...obj, data: dataArr}]);
  };
  
  
  return (
    <div className="analytics-sidebar-item analytics-labels-wrapper">
      {/* y axis */}
      {/* <div className="y-axis">
        <label htmlFor="">Y-Axis</label>
        <div className="y-axis-drag-canvas" ref={drop} style={{border: isOver ? "2px dotted green" : "2px dotted lightgray"}}>
          
          {
            board && board?.map((item, index) => (
              <div className="field-item label-item" key={index}>
                <div className="label-content">
                  <span>{`${index+1}. ${item.label}`}</span>
                </div>
                <div className="label-action">
                  <BsX />
                </div>
              </div> 
            ))
          }
        </div>
      </div> */}
      <YAxis yData={yData} setYData={setYData} fileData={fileData} xData={xData} toggleFunc={toggleFunc} filter={filter} setFilter={setFilter} toggleReset={toggleReset}/>
      {/* x axis */}
      <XAxis xData={xData} setXData={setXData} fileData={fileData} xToggleFunc={xToggleFunc} xfilter={xfilter} setxFilter={setxFilter} toggleReset={toggleReset}/>
      {/* <div className="y-axis">
        <label htmlFor="">X-Axis</label>
        <div className="y-axis-drag-canvas"></div>
      </div> */}
      
    </div>
  )
}

export default AnalyticsAxis

