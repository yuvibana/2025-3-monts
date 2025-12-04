import React, { useState, useRef, useEffect } from 'react';

const RageSlider = ({ range, setRange }) => {
  const sliderRef = useRef(null);
  const dragging = useRef(false);

  const startDrag = () => {
    dragging.current = true;
  };

  const stopDrag = () => {
    dragging.current = false;
  };

  const onDrag = (e) => {
    if (!dragging.current) return;

    const slider = sliderRef.current;
    const rect = slider.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const newValue = (x / rect.width) * 100;

    // clamp 
    if (newValue < 0) newValue = 0;
    if (newValue > 100) newValue = 100;
    setRange(Math.round(newValue))

  };

  return (
    <div
      ref={sliderRef}
      className="outer"
      style={{
        position: "relative",
        border: "1px solid #ddd",
        height: "30px",
        userSelect: "none"
      }}
      onMouseMove={onDrag}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
    >
      <div
        style={{
          position: "absolute",
          bottom: "-10px",
          display: "flex",
          alignItems: "center",
          gap: "2px",
          width: "100%"
        }}
      >
        <div
          style={{
            width: `${range}%`,
            padding: "10px 20px",
            background: "green",
          }}
        ></div>

        <div
          onMouseDown={startDrag}
          style={{
            background: "green",
            cursor: "pointer",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            transform: `translateX(${range - 1}%)`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default function App() {
  const [range, setRange] = useState(10);

  return (
    <div style={{ width: "400px", margin: "80px auto" }}>
      <RageSlider range={range} setRange={setRange} />
      <h2>Value: {range}</h2>
    </div>
  );
}
