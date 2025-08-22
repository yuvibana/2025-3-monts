What is useSessionStorage?
    Not a built-in React hook ❌, but a commonly written custom hook.
    It works like useState, but instead of storing values only in memory, it also saves them in the browser’s sessionStorage.
    Unlike localStorage, data in sessionStorage is cleared when the tab is closed.
    Useful when you want state persistence during a browsing session (but not permanently).
