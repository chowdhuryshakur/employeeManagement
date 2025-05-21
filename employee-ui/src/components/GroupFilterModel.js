import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsX } from 'react-icons/bs';
import Select from 'react-select';
import { apiUrl } from '../Variables';

function GroupFilterModel({groupFilterToggle, setGroupFilterToggle, groupId, setGroupId}) {

  const [data, setData] = useState({})
  const [filter, setFilter] = useState({
    sheet: "receivable",
    column: "",
    amount: "",
    operation: "",
    intervalTime: 0,
    groupId: groupId,
  })

  useEffect(() => {
    setFilter({...filter, groupId: groupId})

    // fetch group condition
    const fetchGroupCondition = async () => {
      const {data:filterConditon} = await axios.get(`${apiUrl}/chatlog/group-condition/${groupId}`)
      console.log('filterConditon', filterConditon)
      setFilter(filterConditon || {
        sheet: "receivable",
        column: "",
        amount: "",
        operation: "",
        intervalTime: 0,
        groupId: groupId,
      })
    }

    // fetch data
    const fetchData = async() => {
      const {data:getDataArr} = await axios.get(`${apiUrl}/scrap/xero`)
      setData(getDataArr[0])
    } 
    fetchData()
    fetchGroupCondition()
  },[groupId])

  // console.log("data", data)
  // console.log("filter", filter)  
  // console.log("column", filter?.sheet?.length && Object.keys(data?.xero?.[filter?.sheet][0] || {}))

  // submit handler
  const groupFilterHandler = async (e) => {
    e.preventDefault()

    // DELETE existing condition
    // try {
    //   await axios.delete(`${apiUrl}/chatlog/group-condition`)
    // } catch (error) {
    //   console.log("All group filter condition delete error: ", error)
    // }
    
    // POST and update new condition
    try {
      const config = {headers: {'Content-Type': 'application/json'}}
      const res = await axios.post(`${apiUrl}/chatlog/group-condition`, filter, config)
      setGroupFilterToggle(!groupFilterToggle)
      setGroupId('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className={groupFilterToggle ? "create-user-wrapper active" : "create-user-wrapper"}>
        <form onSubmit={groupFilterHandler} className="create-user-form">

          <div className="form-title">
            <h2>Group Conditions</h2>
            <p>Choose a condition and it will save for the future.</p>
            <BsX onClick={() => {
              setGroupFilterToggle(!groupFilterToggle)
              }} className='time-icon' />
          </div>

          {/* export items */}
          <div className='create-group-wrapper'>

            {/* choose sheets */}
            <div className="form-group">
              <label htmlFor="">Choose sheet </label>
              <Select 
                value={{value : filter?.sheet, label: filter?.sheet}}
                onChange={(selected) => setFilter({...filter, sheet: selected.value})}
                options={ filter && Object.keys(data?.xero || {})?.map((item, index) => {
                  return {value : item, label: item}
                })}
              />
            </div>

            {/* sheet column */}
            <div className="form-group">
              <label htmlFor="">Choose column </label>
              <Select 
                value={{value : filter?.column, label: filter?.column}}
                onChange={(selected) => setFilter({...filter, column: selected.value})}
                options={ filter?.sheet?.length && Object.keys(data?.xero?.[filter?.sheet][0] || {}).map((item, index) => {
                  return {value : item, label: item}
                })}
              />
            </div>

            {/* row - amount and filter */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="">Amount</label>
                  <input value={filter.amount}  onChange={(e) => setFilter({...filter, amount: e.target.value})} type="number" placeholder='Amount' />
              </div>

              <div className="form-group">
                <label htmlFor="">Operations</label>
                <Select 
                  value={[{value: ">", label: "Greater Than"}, {value: "<", label: "Less Than"}, {value: "===", label: "Equal"}, {value: ">==", label: "Greater Than Equal"}, {value: "<==", label: "Less Than Equal"}].find(e => e.value === filter.operation)}
                  onChange={(selected) => setFilter({...filter, operation: selected.value})}
                  options={[{value: ">", label: "Greater Than"}, {value: "<", label: "Less Than"}, {value: "===", label: "Equal"}, {value: ">==", label: "Greater Than Equal"}, {value: "<==", label: "Less Than Equal"}]}
                />
              </div>
            </div>

              {/* date filter */}
              {/* <div className="form-group">
                <label>Interval Time (in minute)</label>
                <input value={filter.intervalTime} onChange={(e) => setFilter({...filter, intervalTime: e.target.value})} type="number" max='60' placeholder='Schedule interval' />
              </div> */}

            <div className="form-group">
              <button type='submit' className='btn create-group-btn'>Save</button>
            </div>
          </div>
          
        </form>
      </div>
    </>
  )
}

export default GroupFilterModel