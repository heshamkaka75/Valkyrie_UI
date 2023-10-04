import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Logins.css'
import { login } from '../../Componants/rtk/slices/auth'
import { Col, Container, Row } from "react-bootstrap";
import 'react-toastify/dist/ReactToastify.css';
import { clearMessage, setMessage } from "../../Componants/rtk/slices/message";
import MyNav from '../../Componants/Navbar/Nav';
import Footer from '../../Componants/Footer/Footer'
import { CDBBreadcrumb, CDBIcon, CDBContainer } from "cdbreact";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MdMail } from "react-icons/md";
import Swal from 'sweetalert2'

const Login = () => {

  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(login({ username, password }))
      .unwrap()
      .then(() => {
        setTimeout(() => {
          window.location.replace('/');
        }, 0);
      })
      .catch((d) => {
        setLoading(false);
        Swal.fire({
          icon: 'error',
          title: 'something wrong',
          text: 'login error',
        })

      });
  };

  if (isLoggedIn) {
    window.location.replace('/');
  }

  return (
    <>
      <MyNav />

      <div className="pageHeaderBreadcrumb">
        <h2>Login</h2>
        <div className="itemInBreadcrumb">
          <CDBContainer>
            <CDBBreadcrumb color="none" className="align-items-center">
              <li className="breadcrumb-item" ><Link className="p-0" to="/">Home</Link></li>
              <CDBIcon className="mx-2 text-muted" fas icon="angle-double-right" />
              <li className="breadcrumb-item active">Login</li>
            </CDBBreadcrumb>
          </CDBContainer>
        </div>
      </div>

      <Container>
        <div className="Login_Form">
          <Row sm={12} md={12} lg={12}>
            <Col sm={12} md={12} lg={6} >
              <Form>

                <div className="form-half">
                  <Col sm={12} md={12} lg={6} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>UserName</Form.Label>
                      <Form.Control required name="username" type="text" placeholder='UserName' value={username} onChange={(e) => setUserName(e.target.value)} />
                    </Form.Group>
                  </Col>
                  <Col sm={12} md={12} lg={6} >
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control required name="password" type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                  </Col>
                </div>

                <Form.Group className="mb-3" controlId="formBasicPassword"></Form.Group>
                <Button variant="primary" type="submit" onClick={handleLogin}>Login</Button>

              </Form>
            </Col>

          </Row>

        </div>
      </Container>


    </>
  );
};

export default Login;
