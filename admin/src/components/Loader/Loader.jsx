import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = ({ size }) => {
  return (
    <>
        <Spinner animation='border' size={size} />
    </>
  )
}

export default Loader