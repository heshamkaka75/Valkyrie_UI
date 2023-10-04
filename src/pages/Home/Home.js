import { Container } from 'react-bootstrap'
import Footer from '../../Componants/Footer/Footer'
import MyNav from '../../Componants/Navbar/Nav'
import './Home.css'
import org from '../../assets/AppImages/orgs.jpeg'
const Home = () => {
  return (
    <>
      <MyNav />
      <Container className='homePage'>
        <h1>HR Mangement System - Valkyrie</h1>
        <center>
        <img src = {org} width="90%" height="50%" className="d-inline-block align-top" alt="React Bootstrap" />
        </center>
      </Container>
      <Footer />
    </>
  )
}
export default Home
