import { useState, useEffect } from 'react';

export default function useWindowSize(cb) {
  const [[windowWidth, windowHeight], setWindowSize] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      cb();
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return [windowWidth, windowHeight];
}
