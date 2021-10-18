import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './navbar.css';

const App = () => {
  const {user, LogOut} = useAuth();
  const handleLogOut = () =>{
    LogOut();
  }
      
  const [isSmallDevice,setIsSmallDevice] = useState(false);

const handleNavCollapse = () =>{
  isSmallDevice ? setIsSmallDevice(false) : setIsSmallDevice(true);
}
return (
  <div>

      <nav className={isSmallDevice? "mob-nav-container-expand nav-container mob-nav-container" : "nav-container mob-nav-container"}>
            <div className={!isSmallDevice ? "brand-name  mob-brand-name-show": "mob-brand-name-hide"}>
            LifeAssist Medicare Center
            </div>
            <div className={isSmallDevice ? "mob-nav-list-show" : "nav-list mob-nav-list"}>
                <ul className="nav-items mob-nav-items">
                    <Link className="nav-item mob-nav-item" to="/home">Home</Link>
                    <Link className="nav-item mob-nav-item" to="/">Services</Link>
                    <Link className="nav-item mob-nav-item" to="/">Doctors</Link>
                    <Link className="nav-item mob-nav-item" to="/">Events</Link>
                    <Link className="nav-item mob-nav-item" to="/">Equipments</Link>
                    {
                      user.email ? <button onClick={handleLogOut} className="nav-item mob-nav-item"  to="/login">LogOut({user.displayName || user.email})</button> : <Link className="nav-item mob-nav-item" to="/login">Login</Link>
                    }
                    
                </ul>
            </div>
            <div className="collapse-icon mob-collapse-icon" onClick={handleNavCollapse}>
                icon
            </div>
      </nav>


    </div>
  );
};

export default App;


