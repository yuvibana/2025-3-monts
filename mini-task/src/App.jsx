import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Debounce from './components/debounce'

/*

let arr = [1, 2, 5, 4, 6];
let arrU = arr.sort((a, b) => a - b);

for (let i = 1; i < arrU.length; i++) {
    let current = arrU[i];
    let previous = arrU[i - 1];

    if (current - previous > 1) {
        for (let j = 1; j < current - previous; j++) {
            console.log("Missing number is", previous + j);
        }
    }
}


*/


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Debounce />
    </>
  )
}

export default App
