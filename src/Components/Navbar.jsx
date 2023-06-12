import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";

function Navbarr(props){
    return(
        <Navbar bg="dark" variant="light">
                <Container className='nav_cont'>
                  <Navbar.Brand onClick={()=>{props.setState(true)}}><FontAwesomeIcon style={{color: 'white'}} icon={faBars} /></Navbar.Brand>
                  <Nav className="me-auto nav_link">
                    {/* <Nav.Link href="/home" className='link'>Home</Nav.Link> */}
                    <Nav.Link className='link' style={{color: 'white'}} onClick={()=>{
                      props.setValid(!props.valid);
                    }}>Hourwise_Analysis</Nav.Link>
                  </Nav>
                </Container>
            </Navbar>
    );
}

export default Navbarr;