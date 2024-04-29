'use client';

import { useState } from 'react';
import Calculator from './calculator-components/Calculator';
import NumberProvider from './calculator-components/NumberProvider';
import useWindowSize from '../../hooks/useWindowSize';
import styles from './CalculatorPage.module.css';

const CalculatorPage = () => {
  const [width, setWidth] = useState();
  const [windowWidth] = useWindowSize(() => {
    setWidth(window.innerWidth);
  });

  return (
    <>
      <style jsx global>
        {`
          body {
            min-height: 100vh;
            background: linear-gradient(to right, #ee9ca7, #ffdde1);
          }
        `}
      </style>
      {width > 800 || width === undefined ? (
        <NumberProvider>
          <Calculator />
        </NumberProvider>
      ) : (
        <div className={styles.mobileMessage}>
          <h2>Please use application on larger screen</h2>
        </div>
      )}
    </>
  );
};

export default CalculatorPage;
