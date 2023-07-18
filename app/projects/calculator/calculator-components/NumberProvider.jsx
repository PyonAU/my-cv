import { useState, createContext } from 'react';

export const NumberContext = createContext();

const NumberProvider = ({ children }) => {
  // State
  const [number, setNumber] = useState('');
  const [storedNumber, setStoredNumber] = useState('');
  const [operatorType, setOperatorType] = useState('');

  const handleDisplayValue = (num) => {
    if ((!number.includes('.') || num !== '.') && number.length < 8) {
      setNumber(`${(number + num).replace(/^0+/, '')}`);
    }
  };

  return (
    <NumberContext.Provider
      value={{
        number,
        handleDisplayValue,
      }}
    >
      {children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;
