import React from 'react'

function ErrorText({error}) {
  return (
    <>
    { error && <p className='error-text'>{error}</p> }
    </>
  )
}

export default ErrorText