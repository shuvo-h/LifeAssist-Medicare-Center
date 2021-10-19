import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './navbar.css';


const App = () => {
  const {user, LogOut} = useAuth();
  const handleLogOut = () =>{
    LogOut();
  }
      

return (
      <Navbar className="navbar-container" expand="lg">
        <Container>
          <Navbar.Brand><Link to='/home' className="text-white fw-bold text-decoration-none">LifeAssist Medicare Center</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home" className="nav-item text-white fw-bold">Home</Nav.Link>
              <Nav.Link as={Link} to="/services" className="nav-item text-white fw-bold">Services</Nav.Link>
              <Nav.Link as={Link} to="/doctors" className="nav-item text-white fw-bold">Doctors</Nav.Link>
              <Nav.Link as={Link} to="/nurses" className="nav-item text-white fw-bold">Nurses</Nav.Link>
              <Nav.Link as={Link} to="/events" className="nav-item text-white fw-bold">Events</Nav.Link>
              <Nav.Link as={Link} to="/laboratories" className="nav-item text-white fw-bold">Laboratory</Nav.Link>
              <Nav.Link as={Link} to="/regular-appointment-form" className="nav-item nav-appointment-btn rounded fw-bold me-2">Appointment</Nav.Link>
              {
                  user.email ? <button onClick={handleLogOut} className="bg-light text-success fw-bold rounded border-0"  to="/login">LogOut({user.displayName || user.email})</button> : <Link className="text-warning fw-bold d-flex align-items-center text-decoration-none border border-warning rounded-circle" to="/login">Login</Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default App;


