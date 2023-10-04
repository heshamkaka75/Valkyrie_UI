import React from 'react'
import './NotFound.css'
import imageNotFound from '../../assets/AppImages/notFound.png'
import MyNav from '../../Componants/Navbar/Nav'
import Footer from '../../Componants/Footer/Footer'
import { Button } from 'react-bootstrap'
const NotFound = () => {
  return (
    <>
    <MyNav />
    <div className='pageError'>
      <center>
      <img src = {imageNotFound} width="500" height="500" className="d-inline-block align-top" alt="React Bootstrap" />
      <h2>Page NotFound!</h2>
      <Button>Back To Home</Button>
      </center>
    </div>
    <Footer />
    </>
  )
}

export default NotFound