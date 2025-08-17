What is useLayoutEffect?
    It is just a react hook and just like useEffect but it runs synchronously after the DOM mutation are done before the browser paint the screen.
    This means it blocks the browser from painting until your code inside it finishes.
    Because of this, it’s used only when you need to measure DOM elements or make visual changes before the user sees anything.

When to use it
    Measuring element sizes/positions right after render (avoiding flicker).
    Synchronizing animations with DOM updates.
    Setting scroll positions or focus before paint.

How it works in the render cycle
    React renders JSX → Updates DOM.
    useLayoutEffect runs before the browser paints.
    Browser paints the screen with the changes.
    This timing ensures the user never sees the "before" state that could cause a layout shift.
