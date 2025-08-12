1. Why Use useCallback?
    In React, when a component re-renders, all functions inside it are re-created. This can cause unnecessary re-renders in child components or inefficient behavior, especially when:
    Passing callback functions as props to child components that use React.memo
    Using callback functions inside dependencies of useEffect, useMemo, etc.

    const memoizedCallback = useCallback(() => {
    // function logic
    }, [dependencies]);


