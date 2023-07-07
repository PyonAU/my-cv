import { useState, useRef, useEffect } from 'react';
import useWindowSize from './useWindowSize';

function Canvas(props) {
  // State
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  // Ref
  const canvasRef = useRef();
  const ctx = useRef();

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    ctx.current = canvasRef.current.getContext('2d');
    ctx.current.fillStyle = props.bucketColor;
    ctx.current.fillRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
  }, []);

  useEffect(() => {
    ctx.current.fillStyle = props.bucketColor;
    ctx.current.fillRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
  }, [props.bucketColor]);

  const [windowWidth, windowHeight] = useWindowSize(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    ctx.current.fillStyle = props.bucketColor;
    ctx.current.fillRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
  });

  return <canvas ref={canvasRef} width={width} height={height} />;
}

export default Canvas;
