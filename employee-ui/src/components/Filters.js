import React, { useState } from 'react';
import { MdImportExport, MdRestartAlt } from 'react-icons/md';
import Select from 'react-select';
import {useAppContext} from '../context/AppContext'

function Filters({exportHandler, setSearch, Roles, Departments, handleRole, handleDepartment, users, setUsers}) {

  const [filters, setFilters] = useState({
    name: "",
    role: "",
    department: ""
  })
  const {selectRole ,setSelectRole} = useState('roles') ;
  const [departmentState, setDepartmentState] = useState(Departments)
  const [selectedValue , setSelectedValue ] = useState(Departments[0]);

  const {userInfo} = useAppContext();

  const handleFilterInput = (event) => {
    let value = event.target.options;
    setSelectedValue(value);
    // props.handleRegionSearch(value);  
};

  // handle submit 
  const handleInput = (field) => (e) => {
    
    const {value} = e.target; 
    setFilters({
      ...filters,
      [field] : e.target.value
    })

    switch(field) {
      case "role" : {
        handleRole(value)
        break;
      }
      case "department" : {
        handleDepartment(value)
      }
      default : break;
    }

  }

  const filterDepartment = () => {

  }


console.log("setSelectRole" , selectRole)
const getValue =(e) =>{
  setSelectRole(e.target.value)
}
  return (
    <>
      <div className="table-filter-container">

        {/* filter */}
        <div className="table-filter">
          <div className="form-group">
            <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder='Search...' />
          </div>

          {/* Role */}
          <div className="form-group">
            <select value={selectRole} onChange={getValue} id="isAdmin">
              <option value="select-user" disabled selected>Roles</option>
              <option value="admin" >admin</option>
              <option value="editor" >editor</option>
              {/* {
                Roles?.map((item, index) => (
                  <option key={index} value={item}>{item}</option>
                ))
                // console.log(role)
              } */}
            </select>
          </div>

          {/* Department */}
          <div className="form-group">
            <select 
            onChange={(dep) => {
              setDepartmentState(users.filter((filtered) => !dep.includes(filtered.department)))
            }}
            value={filters.department} id="department">
              {
                Departments?.map((item, index) => (
                  <option key={index} value={item}>{item}</option>
                ))
              }
            </select>
            {/* <Select 
              options={Departments}
              // components={animatedComponents}
              // isMulti
              closeMenuOnSelect={false}
              onChange={handleFilterInput}
              value={selectedValue} 
              placeholder="Select a role"
            /> */}
          </div>

          {/* reset */}
          <div className="form-group">
            <MdRestartAlt 
              className='reset-button'
              onClick={(e) => {
                e.preventDefault()
                setFilters({
                  name: "",
                  role: "",
                  department: ""
                })
                setUsers(users)
              }}
            />
          </div>
        </div>

        {/* export button */}
        {
            (() => {
              if(userInfo?.role === 'admin') {
                return (
                  <div onClick={exportHandler} className="table-export">
                    <span className='export-button'> <MdImportExport /> Export </span>
                  </div>
                )
              } else if(userInfo?.role === 'editor') {
                return (
                  <div onClick={exportHandler} className="table-export">
                    <span className='export-button'> <MdImportExport /> Export </span>
                  </div>
                )
              } else {
                return (
                  <div className="table-export export-disabled">
                    <span className='export-button'> <MdImportExport /> Export </span>
                  </div>
                )
              }
            })()
          }
        

        </div>
    </>
  )
}

export default Filters