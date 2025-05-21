import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsX } from 'react-icons/bs';
import { SiMicrosoftexcel } from 'react-icons/si';
import * as XLSX from 'xlsx';
import { apiUrl } from '../Variables';
// import {MdRestartAlt} from 'react-icons/gr'

function ImportModel({importModel, setImportModel, excelData, setExcelData, fileName, setFileName, setFileTypeError, sheetNames, setSheetNames, sheetData, setSheetData, onFileUploaded, fileData, setFileData, saveSuccess, setSaveSuccess, fileDeleteSuccess, setFileDeleteSuccess}) {

  // on change states
  const [excelFile, setExcelFile] = useState(null);
  const [analyticsData, setAnalyticsData] = useState(null)
  
  // handle File
  const acceptableFileName = ['xlsx', 'xls', 'csv'];

  // check file checker function
  const checkFileNameExtension = (name) => {
    return acceptableFileName.includes(name.split('.').pop().toLowerCase());
  }

  // read data form excel
  const readDataFromExcel = (data) => {
    const wb = XLSX.read(data)
    var first_sheet_name = wb.SheetNames[0];
    var worksheet = wb.Sheets[first_sheet_name];

    // update state with latest sheet name. 
    setSheetNames(wb.SheetNames)

    // experiment
    var sheet2arr = function(){
      var result = [];
      var row;
      var rowNum;
      var colNum;
      var range = XLSX.utils.decode_range(worksheet['!ref']);
      for(rowNum = range.s.r; rowNum <= range.e.r; rowNum++){
         row = [];
          for(colNum=range.s.c; colNum<=range.e.c; colNum++){
             var nextCell = worksheet[
                XLSX.utils.encode_cell({r: rowNum, c: colNum})
             ];
             if( typeof nextCell === 'undefined' ){
                row.push(void 0);
             } else row.push(nextCell.w);
          }
          result.push(row);
      }
      setExcelData(result[first_sheet_name])
      return result;
   };
   console.log(sheet2arr())
    // experiment
 
    let mySheetData = {}

    // loop throw all of sheets
    for (let i = 0; i < wb.SheetNames.length; i++) {

      let sheetName = wb.SheetNames[i];
      const worksheet = wb.Sheets[sheetName]

      setAnalyticsData(worksheet)

      console.log(worksheet) // this one will be help for chart

      const jsonData = XLSX.utils.sheet_to_json(worksheet, {
        blankrows: "",
        header: 1,
      })
      mySheetData[sheetName] = jsonData
    }
    setSheetData(mySheetData); 
    return mySheetData; 
  }

  
  // handle submit 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // First, Delete existing databse collections
      await axios.delete(`${apiUrl}/data/delete`)
    } catch (error) {
      console.log(error)
    }

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      setSaveSuccess(false)
      // Second, Create new file in database
      await axios.post(`${apiUrl}/data`, {fileName, initSheet: sheetNames[0], analyticsData, sheetArray: sheetNames, dataArray:excelData}, config)
      setSaveSuccess(true)  

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {

  },[saveSuccess, excelFile, fileDeleteSuccess])

  // file handler
  const handleFile = async (e) => {
    const myFile = e.target.files[0];
    
    // check if file does't exist, the return back
    if(!myFile) return

    // check file type. If file type is not valid our requirement then show an alert. 
    if(!checkFileNameExtension(myFile.name)){
      setFileTypeError(true)
      return
    }

    // read the excel metadata
    const data = await myFile.arrayBuffer();
    const mySheetData = readDataFromExcel(data)

    var colValues =[];

    function checkCols(workbook)  //your workbook variable
      {
        var first_sheet_name = workbook.SheetNames[0];
        var worksheet = workbook.Sheets[first_sheet_name];
        var cells = Object.keys(worksheet);
        for (var i = 0; i < Object.keys(cells).length; i++) {
            if( cells[i].indexOf('1') > -1)
            {
                colValues.push(worksheet[cells[i]].v); //Contails all column names
            }
        }
    }
    
    setExcelFile(myFile)
    setFileName(myFile.name)
    onFileUploaded(mySheetData)
  }

  return (
    <>
      <div className={importModel ? "create-user-wrapper active" : "create-user-wrapper"}>
        <form onSubmit={handleSubmit} className="create-user-form">

          <div className="form-title">
            <h2>Import File</h2>
            {/* <p>Insert file name.</p> */}
            {fileName && <span className='badge department-badge'>{fileName}</span>}
            <BsX onClick={() => setImportModel(!importModel)} className='time-icon' />
          </div>

          {/* export items */}
          <div className="export-wrapper">
            
            <div className="export-item import-item">
              <label>
                <SiMicrosoftexcel className='excel-text' />
                Select An Excel File
                <input onChange={handleFile} type="file" hidden placeholder='Import excel file' />
              </label>
            </div>

              { fileName && <button onClick={() => setImportModel(!importModel)} type='submit' className='btn btn-import'>Import</button>
              }
            
            {/* <BsFileEarmarkPdf className='pdf-text' />
            <BsFileEarmarkWord className='word-text' /> */}
          </div>
          
        </form>
      </div>
    </>
  )
}

export default ImportModel