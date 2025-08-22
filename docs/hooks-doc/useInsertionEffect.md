What is useInsertionEffect?

    Similar to useLayoutEffect, but it runs even earlier:
    👉 before any DOM mutations are made.

    Its main purpose is to let CSS-in-JS libraries (like Emotion, styled-components) insert styles synchronously so React doesn’t render UI with missing styles.