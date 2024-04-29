import { useState, useEffect } from 'react';

const useWindowSize = (cb) => {
  const [[windowWidth, windowHeight], setWindowSize] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      cb();
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return [windowWidth, windowHeight];
};

export default useWindowSize;
