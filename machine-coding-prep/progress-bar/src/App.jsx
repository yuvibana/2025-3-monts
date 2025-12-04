import React, { useEffect, useState } from 'react'

const ProgressBar = ({ progress }) => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(progress)
    }, 300);
    return () => clearTimeout(timer)
  }, [progress])
  return (
    <>
      <div className='outer'>
        <div className='inner'
          style={{ width: `${width}%`, color: `${width < 2 ? 'black' : 'white'}` }}
        >{progress}%</div>
      </div>
    </>
  )
}

export default function App() {

  const progresses = [10, 30, 50, 80, 90];


  return (
    <div style={{ width: "700px", margin: '0 auto', padding: "30px" }}>
      {progresses.map(p => <ProgressBar key={p} progress={p} />)}
    </div>
  )
}
