import React, { useCallback, useState } from 'react'
import Child from './child';

export default function Index() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);

    // const giveCount = () => {
    //     console.log('giveCount called!');
    //     return count;
    // }

    const giveCount = useCallback(() => {
        console.log('giveCount called!');
        return count;
    }, [count])


    /*
        when we use useCallback, it will return a memoized version of the callback that only changes if one of the dependencies has changed.
        This is useful to prevent unnecessary re-renders of child components that depend on the callback.
        In this case, the child component will only re-render when the `count` changes, not when `count1` changes.
    */


    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                click 
            </button>


            <button onClick={() => setCount1(count1 + 1)}>
                click  {count1}
            </button>


            <Child getCount={giveCount} />
        </div>
    );
}

{/* <Child getTodos={() => todos.filter(todo => showCompleted || !todo.done)} /> */ }