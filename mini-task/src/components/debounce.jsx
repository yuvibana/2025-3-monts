import React, { useEffect } from 'react'

export default function Debounce() {

  function dBounce(func, delay) {
    let timeId;
    return function (...args) {
      const context = this;
      clearTimeout(timeId);
      timeId = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  }

  function logger(e) {
    console.log("Logged value:", e.target.value);
  }

  const debouncedLogger = dBounce(logger, 2000);


  return (
    <div>
      <h1>Debounce Implementation</h1>
      <input
        type="text"
        onChange={debouncedLogger}
      />
    </div>
  )
}
