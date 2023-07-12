import { useState, useRef, useEffect } from 'react';
import useWindowSize from './useWindowSize';

function Canvas(props) {
  // State
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawnArray, setDrawnArray] = useState([]);

  // Ref
  const canvasRef = useRef();
  const ctx = useRef();

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  // Draw what is stored in DrawnArray
  const restoreCanvas = () => {
    for (let i = 1; i < drawnArray.length; i++) {
      ctx.current.beginPath();
      ctx.current.moveTo(drawnArray[i - 1].x, drawnArray[i - 1].y);
      ctx.current.lineWidth = drawnArray[i].size;
      ctx.current.lineCap = 'round';

      if (drawnArray[i].erase) {
        ctx.current.strokeStyle = props.bucketColor;
      } else {
        ctx.current.strokeStyle = drawnArray[i].color;
      }
      ctx.current.lineTo(drawnArray[i].x, drawnArray[i].y);
      ctx.current.stroke();
    }
  };

  // Store Drawn Lines in DrawnArray
  const storeDrawn = (x, y, size, color, erase) => {
    setDrawnArray((prevState) => {
      const line = {
        x,
        y,
        size,
        color,
        erase,
      };
      return [...prevState, line];
    });
  };

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

    if (props.isCleared) {
      setDrawnArray([]);
    } else if (!props.clear) {
      restoreCanvas();
    }
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
    props.setStorage({
      save: false,
      load: false,
      clear: false,
    });
    props.setIsDownloadImage(false);
  };

  const drawing = (event) => {
    const coords = [
      event.clientX - canvasRef.current.offsetLeft,
      event.clientY - canvasRef.current.offsetTop,
    ];

    if (isDrawing) {
      ctx.current.lineTo(...coords);
      ctx.current.stroke();
      props.eraserIcon
        ? storeDrawn(
            coords[0],
            coords[1],
            50,
            props.bucketColor,
            props.eraserIcon
          )
        : storeDrawn(
            coords[0],
            coords[1],
            props.sliderSize,
            props.brushColor,
            props.eraserIcon
          );
    } else if (props.drawing) {
      props.drawing(...coords);
    } else {
      storeDrawn(undefined);
    }
  };

  const stopDrawing = () => {
    ctx.current.closePath();
    setIsDrawing(false);
  };

  useEffect(() => {
    if (props.save) {
      localStorage.setItem('canvas', JSON.stringify(drawnArray));
    }
  }, [props.save]);

  useEffect(() => {
    const loadSavedDrawing = localStorage.getItem('canvas');
    if (loadSavedDrawing) {
      setDrawnArray(JSON.parse(loadSavedDrawing));
    }
  }, [props.load]);

  useEffect(() => {
    if (props.load) {
      restoreCanvas();
    }
  }, [drawnArray]);

  useEffect(() => {
    if (props.clear) {
      localStorage.removeItem('canvas');
    }
    setDrawnArray([]);
  }, [props.clear]);

  useEffect(() => {
    if (props.isDownloadImage) {
      const url = canvasRef.current.toDataURL('image/jpeg');
      const link = document.createElement('a');
      link.download = 'filename.jpeg';
      link.href = url;
      link.click();
    }
  }, [props.isDownloadImage]);

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
