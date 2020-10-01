import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = (props) => {
  return (<header className={styles.header}>
    <div className={styles.loginBlock}>
      {props.isAuth ? props.login 
      : <NavLink to={"/login"} > LOGIN</NavLink>}
      
    </div>
  </header>);
}

export default Header;