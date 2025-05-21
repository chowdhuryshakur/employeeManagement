import axios from 'axios';
import React, { useState } from 'react';
import { BsX } from 'react-icons/bs';
import { SiMicrosoftexcel } from 'react-icons/si';
import * as XLSX from 'xlsx';
import { apiUrl } from '../Variables';
// import {MdRestartAlt} from 'react-icons/gr'

function ImportModel({importModel, setImportModel, excelData, setExcelData, fileName, setFileName, setFileTypeError, sheetNames, setSheetNames, sheetData, setSheetData, onFileUploaded, fileData, setFileData, setSaveSuccess}) {

  // on change states
  const [excelFile, setExcelFile] = useState(null);
  const [excelFileError, setExcelFileError] = useState(null);  

  
  // handle File
  const acceptableFileName = ['xlsx', 'xls', 'csv'];

  // check file checker function
  const checkFileNameExtension = (name) => {
    return acceptableFileName.includes(name.split('.').pop().toLowerCase());
  }

  // file handler
  // const handleFile = (e) => {

  //   let myFile = e.target.files[0];
  //   // console.log(myFile.type)
  //   setFileTypeError(false)

  //   // if there is no file then return back
  //   if(!myFile) return
    
  //   // check file name is valid or not. 
  //   if(!checkFileNameExtension(myFile.name)) {
  //     setFileTypeError(true)
  //     return;
  //   }
    
  //   // save file name in state
  //   setFileName(myFile.name)

  //   if(myFile){
  //     if(myFile && fileType.includes(myFile.type)){
  //       let reader = new FileReader();
  //       reader.readAsArrayBuffer(myFile);
  //       reader.onload=(e)=>{
  //         setExcelFileError(null);
  //         setExcelFile(e.target.result);
  //       } 
  //     }
  //     else{
  //       setExcelFileError('Please select only excel file types');
  //       setExcelFile(null);
  //     }
  //   }
  //   else{
  //     console.log('plz select your file');
  //   }
  // }

  // submit function
  // const handleSubmit= (e) => {
  //   e.preventDefault();

  //   if(excelFile !== null){

  //     const workbook = XLSX.read(excelFile, {type:'buffer'});
  //     console.log(workbook)
  //     setSheetNames(workbook.SheetNames)
  //     const worksheetName = workbook.SheetNames[0];
  //     const worksheet=workbook.Sheets[worksheetName];
  //     const data = XLSX.utils.sheet_to_json(worksheet, {
  //       blankrows: "",
  //       header: 1,
  //     });
              
  //     readDataFromExcel(data)
  //     setExcelData(data);

  //     // storing data in browser local storage
  //     localStorage.setItem('tempData', JSON.stringify(data));
  //     localStorage.setItem('fileName', JSON.stringify(fileName));
  //     localStorage.setItem('sheetName', JSON.stringify(sheetNames));
  //   }
  //   else{
  //     setExcelData(null);
  //     console.log("handle submit error")
  //   }
  // }

  // read data form excel
  
  const readDataFromExcel = (data) => {
    const wb = XLSX.read(data)

    // update state with latest sheet name. 
    setSheetNames(wb.SheetNames)

    let mySheetData = {}

    // loop throw all of sheets
    for (let i = 0; i < wb.SheetNames.length; i++) {

      let sheetName = wb.SheetNames[i];
      const worksheet = wb.Sheets[sheetName]
      
      const jsonData = XLSX.utils.sheet_to_json(worksheet, {
        blankrows: "",
        header: 1,
      })
      mySheetData[sheetName] = jsonData
    }
    setSheetData(mySheetData); 
    setExcelData(mySheetData)
    return mySheetData; 
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // delete existing file from database
      await axios.delete(`${apiUrl}/data/delete`)

      // create and save new file
      await axios.post(`${apiUrl}/data`, {fileName, sheetArray: sheetNames, dataArray:excelData})
      setSaveSuccess(true)  
    } catch (error) {
      console.log(error)
    }
  }

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