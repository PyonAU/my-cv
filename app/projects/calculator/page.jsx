'use client';

import Calculator from './calculator-components/Calculator';
import NumberProvider from './calculator-components/NumberProvider';

const CalculatorPage = () => {
  return (
    <>
      <style jsx global>
        {`
          body {
            min-height: 100vh;
            background: linear-gradient(to right, #ee9ca7, #ffdde1);
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
      <NumberProvider>
        <Calculator />
      </NumberProvider>
    </>
  );
};

export default CalculatorPage;
