import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css'
import { useDispatch, useSelector } from 'react-redux';
import { FaUserCircle } from "react-icons/fa";
import { logout } from '../rtk/slices/auth';
function MyNav() {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOut = (e) => {
    e.preventDefault();
    dispatch(logout({}))
      .unwrap()
      .then(() => {
        setTimeout(() => {
          window.location.replace('/');
        }, 0);
      })
      .catch(() => {
        setTimeout(() => {
          window.location.replace('/');
        }, 0);
      });
  };


  let authStatus = (!currentUser)
    ?
    <Link to='/login' className='nav-link'> <FaUserCircle /> Login</Link>
    :
    <>
      <Link className='nav-link'> <FaUserCircle /> {currentUser.username.toUpperCase()}</Link>
      <Link onClick={logOut} className='nav-link'> | Logout</Link>
    </>

  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link className='nav-tracks' to='/'>Valkyrie</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbarMargin">
            <Link to='/Employees' className='nav-link'>Employees</Link>
            <Link to='/Vacations' className='nav-link'>Vacations</Link>
            <Link to='/no' className='nav-link'>Not Found!</Link>
          </Nav>
          <Nav>
            {authStatus}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;