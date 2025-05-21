import { Fragment, useEffect, useState } from "react"
import { Row, Col, Nav, Dropdown, Button, Modal, Form } from "react-bootstrap"
import { NavLink, useNavigate } from "react-router-dom"
import avatar from "../images/avatars/13.png"
import axios from "axios"
import { loginEndpoint } from "../apiEndpoints"
import toast from "react-hot-toast"

const Layout = ({children}) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    const [modal, setModal] = useState(false)
    const toggleModal = () => setModal(!modal)
    const [userInput, setUserInput] = useState({})
    const handleChange = e => {
     setUserInput({...userInput, [e.target.name]:e.target.value})
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        await axios.post(loginEndpoint, userInput).then(res => {
            setUser(res.data)
            localStorage.setItem('user', JSON.stringify(res.data))
            toggleModal()
            window.location.href='/'
        }).catch(error => {
            console.log(error)
            toast.error(error.response.data.error)
        })
    }

    return (
        <div style={{height:'100vh', overflow:'hidden'}}>
            <Row>
                <Col md='2' className="d-none d-md-block bg-secondary" style={{height:'100vh'}}>
                    <div className="py-3 ps-4">
                        <h3 className="text-bold text-white">Employee Management</h3>
                    </div>
                    <Nav>
                        <NavLink to='/' style={{width:'100%', height:'30px'}} className="ps-4 text-white text-decoration-none">Employess</NavLink>
                    </Nav>
                </Col>
                <Col sm='12' md='10' className="overflow-auto" style={{maxHeight:'100vh'}}>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse d-flex justify-content-end py-2" id="navbarTogglerDemo01">
                                {
                                    user ? <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic" className="d-flex align-items-center" style={{background:'transparent', border:'none', color: 'black'}}>
                                        <div className="d-flex align-items-center">
                                            <img src={avatar} width={'40px'}/>
                                            <h6 className="mb-0 ms-1">Hi, {user?.employee_name}</h6>
                                        </div>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                                        <Dropdown.Item onClick={() => {
                                            setUser()
                                            localStorage.clear()
                                            navigate('/')
                                        }}>Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown> : <Button onClick={() => setModal(true)}>Login Please</Button>
                                }
                            </div>
                        </div>
                    </nav>
                    { children }
                </Col>
            </Row>
            <Modal show={modal}>
              <Modal.Header closeButton onHide={toggleModal}>
                <Modal.Title>Login</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={onSubmit}>
                    <Row>
                      <Col sm='12'>
                          <label for="email">
                              Email
                              <span style={{ color: 'red' }}>*</span>
                          </label>
                          <input
                              type="email"
                              name="email"
                              id="email"
                              value={userInput?.email}
                              onChange={handleChange}
                              required
                              placeholder="email..."
                              className='d-block my-2 w-100 p-1'
                          />
                      </Col> 
                      <Col sm='12'>
                          <label for="password">
                              Password
                              <span style={{ color: 'red' }}>*</span>
                          </label>
                          <input
                              type="password"
                              name="password"
                              id="password"
                              value={userInput?.password}
                              onChange={handleChange}
                              required
                              placeholder="password..."
                              className='d-block my-2 w-100 p-1'
                          />
                      </Col> 
                      <Col sm='12' className='text-center'>
                        <Button type='submit'>Login</Button>
                      </Col>
                    </Row>
                </Form>
              </Modal.Body>
          </Modal>
        </div>
    )
}

export default Layout