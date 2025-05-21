import React, { useEffect, useState } from 'react';
import { Badge, Card, CardBody, Col, Button, Label, Row, Table, Form, Dropdown } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { allEmployeesEndpoint, subordinateEmployeesEndpoint } from '../apiEndpoints';

function Dashboard() {
  const [employees, setEmployees] = useState([])
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  const [filteredData, setFilteredData] = useState()
  const [filter, setFilter] = useState()

  useEffect(() => {
      axios.get(allEmployeesEndpoint, {
        headers: { Authorization: `Bearer ${user?.token}` }
      }).then(res => setEmployees(res.data)).catch(err => {
        toast.error('Please logout and login again!')
        console.log(err)
      })
  }, [])

  const handleFetchSubordinates = async () => {
    await axios.get(`${subordinateEmployeesEndpoint}/${filter?.id}`)
    .then(res => setFilteredData(res.data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    handleFetchSubordinates()
}, [filter])

  return (
    <div className='p-3' style={{height:'100vh'}}>
      <div className='d-flex justify-content-between'>
        <h3>Subordinates Employee Under {filter?.employee_name || 'None'} ({filter?.designation})</h3>
        <div className='d-flex'>
          <Dropdown className='me-2'>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {filter ? filter?.employee_name : 'Select an employee'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {
                employees?.map(item => <Dropdown.Item key={item?.id} onClick={() => setFilter(item)}>{item?.employee_name}</Dropdown.Item>)
              }
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <Row className='pt-3'>
        {filteredData?.length > 0 ? <Table striped bordered hover>
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Employee Name</th>
              <th>Employee Email</th>
              <th>Designation</th>
            </tr>
          </thead>
          <tbody>
            {
              filteredData?.map(item =>  <tr>
                <td>{item?.id}</td>
                <td>{item?.employee_name}</td>
                <td>{item?.email}</td>
                <td>{item.designation}</td>
              </tr>)
            }
          </tbody>
        </Table> : <div className='text-center text-danger'>No data found!</div>}
      </Row>
  </div>
  );
}

export default Dashboard
