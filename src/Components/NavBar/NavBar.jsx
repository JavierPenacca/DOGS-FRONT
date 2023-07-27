import React from 'react';
import SearchBar from './SearchBar';
import ButtonLanding from '../Buttons/ButtonLanding';
import ButtonForm from '../Buttons/ButtonForm';
import ButtonHome from '../Buttons/ButtonHome';
import styles from './NavBar.module.css';

const NavBar = ({ handleChange, handleSubmit }) => {
  return (
    <div className={styles.nav}>
      <div className={styles.left}>
        <ButtonLanding />
        <ButtonHome />
      </div>
      <div className={styles.center}>
        <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
      <div className={styles.right}>
        <ButtonForm />
      </div>
    </div>
  );
};

export default NavBar;
