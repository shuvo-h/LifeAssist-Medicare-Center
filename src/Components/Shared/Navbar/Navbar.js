import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './navbar.css';
import { FaUserAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';


const App = () => {
  const {user, LogOut} = useAuth();
  const handleLogOut = () =>{
    LogOut();
  }
      

return (
      <Navbar className="navbar-container" expand="lg" >
        <Container>
          <Navbar.Brand><Link to='/home' className="text-white fw-bold text-decoration-none">LifeAssist Medicare Center</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center">
              <Nav.Link as={Link} to="/home" className="nav-item fw-bold">Home</Nav.Link>
              <Nav.Link as={Link} to="/services" className="nav-item  fw-bold">Services</Nav.Link>
              <Nav.Link as={Link} to="/doctors" className="nav-item fw-bold">Doctors</Nav.Link>
              <Nav.Link as={Link} to="/nurses" className="nav-item  fw-bold">Nurses</Nav.Link>
              <Nav.Link as={Link} to="/laboratory" className="nav-item  fw-bold">Laboratory</Nav.Link>
              <Nav.Link as={Link} to="/regular-appointment-form" className="nav-item nav-appointment-btn rounded fw-bold me-2">Appointment</Nav.Link>
              {
                user.email && ( user.photoURL? <img className="profile-img rounded-circle d-block mx-auto " src={user.photoURL} alt="" /> : <IconContext.Provider value={{ color: "white", size:"40", className: "global-class-name border rounded-circle p-1" }}><FaUserAlt /></IconContext.Provider>)
              }
              {
                  user.email ? <button onClick={handleLogOut} className="bg-light text-success fw-bold rounded border-0 ms-2"  to="/login">LogOut({user.displayName || user.email})</button> : <Link className="text-warning fw-bold d-flex align-items-center text-decoration-none border border-warning rounded-circle" to="/login">Login</Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default App;


