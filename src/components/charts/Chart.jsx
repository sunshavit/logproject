import { Chart as ChartJs, registerables } from "chart.js";
import { useEffect, useRef } from "react";

ChartJs.register(...registerables);

export function Chart({ config }) {
  const canvasRef = useRef();
  useEffect(() => {
    if (!canvasRef.current) return;
    const chartInstance = new ChartJs(canvasRef.current, config);
    return () => chartInstance.destroy();
  }, [config]);
  return <canvas ref={canvasRef} />;
}
