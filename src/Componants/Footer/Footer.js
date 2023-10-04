import React from 'react'
import { FaFacebook,FaInstagram,FaTwitter,FaYoutube,FaLinkedin} from "react-icons/fa";
import './Footer.css'
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className='footer'>
        <Container>
            <Row sm={12} md={12} lg={12}>
            <Col sm={12} md={12} lg={9} >
                <h6>All Right Recive 2023</h6>
            </Col>
            <Col sm={12} md={12} lg={3}>
            <h6 className='SMletter-spacing'>
                <FaFacebook /> <FaInstagram /> <FaTwitter /> <FaYoutube /> <FaLinkedin />
            </h6>
            </Col>
            </Row>
            </Container>
    </div>
  )
}

export default Footer