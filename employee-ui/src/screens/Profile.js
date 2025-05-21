import React, { Fragment, useEffect, useState } from 'react';
import { Badge, Card, CardBody, Col, Button, Label, Row, Modal, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { formatDateToHumanReadable } from '../utils/helper';

function Profile() {
    
    const navigate = useNavigate()
    const [user, setUser] = useState(null)

    useEffect(() => {
      setUser(JSON.parse(localStorage.getItem('user')))
    }, [])
    
    return (
        <Fragment>
          {user ? <div className='p-3' style={{height:'100vh'}}>
            <h3>Profile</h3>
            <Row className='pt-3'>
              <Col sm='12' md="12" className='g-3'>
                <Card className='h-100'>
                  <CardBody>
                    <h4 className='mb-4'>Name: {user?.employee_name}</h4>
                    <p className='mb-1'>Email: {user?.email}</p>
                    <p className='mb-1'>Designation: {user?.designation}</p>
                    <p className='mb-1'>Reporting Manager: {user?.manager_id}</p>
                    <p className='mb-1'>created_at: {formatDateToHumanReadable(user?.created_at)}</p>
                    <p className='mb-1'>updated_at: {formatDateToHumanReadable(user?.updated_at)}</p>
                    <p className='mb-1'>Notification: {user?.preferences?.notifications ? 'True' : 'False'}</p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
        </div> : <h4>Login Please</h4>}
        </Fragment>
      );
}

export default Profile


