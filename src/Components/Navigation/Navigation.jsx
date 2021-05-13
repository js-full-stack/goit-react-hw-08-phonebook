import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  navList: {
    display: 'flex',
  },
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const Navigation = () => (
  <nav>
    <ul style={styles.navList}>
      <li>
        <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
          Главная
        </NavLink>
      </li>

      <li>
        <NavLink to="/phonebook" style={styles.link} activeStyle={styles.activeLink}>
          Телефонная книга
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
