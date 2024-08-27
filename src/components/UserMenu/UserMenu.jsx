// src/components/UserMenu/UserMenu.jsx

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import styles from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.auth.user.name);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.container}>
      <span className={styles.username}>Welcome, {name}</span>
      <button className={styles.button} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
