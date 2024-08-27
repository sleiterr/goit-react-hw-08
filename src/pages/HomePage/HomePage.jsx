import "react";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Phonebook App</h1>
      <p className={styles.text}>
        This application allows you to manage your contacts easily. Please log
        in or register to start using the app.
      </p>
    </div>
  );
};

export default HomePage;
