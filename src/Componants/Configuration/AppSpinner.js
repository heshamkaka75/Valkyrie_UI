import React from 'react'
import { Spinner } from 'react-bootstrap'

export const AppSpinner = () => {
  return (
    <div className='appSpinner'> 
    <Spinner style={ {width: '75px', height: '75px'} } animation="grow" variant="warning" /> 
    <Spinner style={ {width: '75px', height: '75px'} } animation="grow" variant="success" /> 
    <Spinner style={ {width: '75px', height: '75px'} } animation="grow" variant="danger" /> 
    <h3 style={ {'color':'#768975'}}>Loading...</h3>
    </div>
  )
}
