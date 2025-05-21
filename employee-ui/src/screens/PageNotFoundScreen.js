import React from 'react'
import { Button } from 'react-bootstrap'
import {CgArrowLeft} from 'react-icons/cg'
import {Link} from 'react-router-dom'

function PageNotFoundScreen() {
  return (
    <> 
      <div className="d-flex justify-content-center mt-5">

        {/* wrapper */}
        <div className="d-flex flex-column align-items-center justify-content-center h-100 w-100">
          <div className="d-flex flex-column align-items-center">
            <h1 style={{fontSize:'250px'}} className='fw-bold text-secondary'>404</h1>
            <h2>Oops, This page could not be found!</h2>
            <p>This page you're looking for might have been removed had this name changed or temporarily unavailable!</p>
          </div>
          {/* <Button type="button" class="btn btn-primary"> <Link to="/"><CgArrowLeft /> Back to home</Link> </Button> */}
          <Link to="/"><Button type="button" class="btn btn-primary"><CgArrowLeft /> Back to Home</Button></Link>
        </div>
      </div>
    </>
  )
}

export default PageNotFoundScreen