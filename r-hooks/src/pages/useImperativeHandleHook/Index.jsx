import React from 'react'
import FancyInput from './FancyInput';

/*
  useImperativeHandle Hook
  useImperativeHandle is a React hook that allows you to customize the instance value that is exposed when using React.forwardRef.
  It allow the parent component to call methods on the child component.
*/

export default function Index() {

  const fancyInput = React.useRef(null);
  // fancyInput is a ref that will be passed to FancyInput component
  // It will be used to call methods defined in FancyInput using useImperativeHandle

  return (
    <div className='useImperativeHandleHook'>
      <FancyInput ref={fancyInput} />
      <button onClick={() => fancyInput.current.clear()}>clear</button>
      <button onClick={() => fancyInput.current.focus()}>focus</button>
    </div>
  )
}
