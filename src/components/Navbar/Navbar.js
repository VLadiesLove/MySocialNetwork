import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
    <nav className={style.nav}>
    <div>
      <NavLink to='/profile' > profile </NavLink> 
      </div>
    <div>
      <NavLink to='/dialogs' > dialogs </NavLink> 
    </div>
    <div>
      <NavLink to='/news' > news </NavLink> 
    </div>
    <div>
      <NavLink to='/music' > music </NavLink> 
    </div>
    <div>
      <NavLink to='/settings' > settings </NavLink> 
    </div>
    <div>
      <NavLink to='/users' > users </NavLink> 
    </div>
  </nav>);
}

export default Navbar;