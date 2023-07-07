import { useState, useRef, useEffect } from 'react';
import useWindowSize from './useWindowSize';

function Canvas(props) {
  // State
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [isDrawing, setIsDrawing] = useState(false);

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
  }, [props.bucketColor, props.isCleared]);

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

  const startDrawing = (event) => {
    ctx.current.lineJoin = 'round';
    ctx.current.lineCap = 'round';

    if (props.brushIcon) {
      ctx.current.lineWidth = props.sliderSize;
      ctx.current.strokeStyle = props.brushColor;
    }
    if (props.eraserIcon) {
      ctx.current.lineWidth = 50;
      ctx.current.strokeStyle = props.bucketColor;
    }

    ctx.current.beginPath();

    ctx.current.moveTo(
      event.clientX - canvasRef.current.offsetLeft,
      event.clientY - canvasRef.current.offsetTop
    );

    setIsDrawing(true);
    props.setIsCleared(false);
  };

  const drawing = (event) => {
    const coords = [
      event.clientX - canvasRef.current.offsetLeft,
      event.clientY - canvasRef.current.offsetTop,
    ];

    if (isDrawing) {
      ctx.current.lineTo(...coords);
      ctx.current.stroke();
    } else if (props.drawing) {
      props.drawing(...coords);
    }
  };

  const stopDrawing = () => {
    ctx.current.closePath();
    setIsDrawing(false);
  };

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      onMouseDown={startDrawing}
      onMouseUp={stopDrawing}
      onMouseOut={stopDrawing}
      onMouseMove={drawing}
    />
  );
}

export default Canvas;
