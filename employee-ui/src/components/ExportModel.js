import React from 'react'
import { BsX } from 'react-icons/bs'
import { SiMicrosoftexcel } from 'react-icons/si'
// import {MdRestartAlt} from 'react-icons/gr'
import moment from 'moment'
import { useEffect } from 'react'
import { CSVLink } from "react-csv"

function ExportModel({exportModel, setExportModel, users}) {

  const onlyRequiredField = (arr) => {

    return arr?.map((item) => {
      return {
        Id: item._id,
        Name: item.name,
        Email: item.email,
        Phone: (item.phone == undefined) ? "No number" : item.phone,
        Role: item.role,
        Department: item.department,
        Created_Date: moment(item.createdAt).format('L'),
        Active_User: moment(item.createdAt).fromNow(),
      }
    })
  }

  useEffect(() => {

  },[])

  const exportModelhandle = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <div className={exportModel ? "create-user-wrapper active" : "create-user-wrapper"}>
        <form onSubmit={exportModelhandle} className="create-user-form">

          <div className="form-title">
            <h2>Export data</h2>
            {/* <p>Insert file name.</p> */}
            <BsX onClick={() => setExportModel(!exportModel)} className='time-icon' />
          </div>

          {/* export items */}
          <div className="export-wrapper">
            <CSVLink data={onlyRequiredField(users)} filename={"wipdata-users-list"}>
            <div className="export-item">
              <SiMicrosoftexcel className='excel-text' />
              <span>Export Excel File</span>
            </div>
            </CSVLink>
            {/* <BsFileEarmarkPdf className='pdf-text' />
            <BsFileEarmarkWord className='word-text' /> */}
          </div>
          
        </form>
      </div>
    </>
  )
}

export default ExportModel