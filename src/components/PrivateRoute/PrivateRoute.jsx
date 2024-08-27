// src/components/Navigation/Navigation.jsx

import { NavLink } from "react-router-dom";
import styles from "../Navigation/Navigation.module.css";
import { useSelector } from "react-redux";

const Navigation = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
