'use client';

import { useState } from 'react';
import Menu from './Menu';
import styles from './MenuBar.module.css';

const MenuBar = () => {
  const [isSlide, setIsSlide] = useState(false);

  const handleMenuClick = () => {
    setIsSlide((preValue) => !preValue);
  }

  return (
    <>
      <Menu isSlide={isSlide} handleMenuClick={handleMenuClick} />
      <div
        className={isSlide ? styles.change : styles.menuBar}
        onClick={handleMenuClick}
      >
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
      </div>
    </>
  );
};

export default MenuBar;
