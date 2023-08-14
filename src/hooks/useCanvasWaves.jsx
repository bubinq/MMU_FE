import { useEffect, useRef } from "react";
import { Canvas } from "../utils.js";

const useCanvasWaves = () => {
  const ref = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    canvasRef.current = new Canvas(ref.current);
    return () => {
      if (canvasRef.current) {
        canvasRef.current.cleanup();
        canvasRef.current = null;
      }
    };
  }, []);

  return ref;
};

export default useCanvasWaves;
