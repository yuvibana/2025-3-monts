import React, { useInsertionEffect, useState } from "react";

function useDynamicStyle(css) {
    useInsertionEffect(() => {
        const styleTag = document.createElement("style");
        styleTag.innerHTML = css;
        document.head.appendChild(styleTag);

        return () => {
            document.head.removeChild(styleTag);
        };
    }, [css]);
}

export default function DynamicStyledBox() {
    const [color, setColor] = useState("red");

    // Inject style before DOM mutations
    useDynamicStyle(`
    .box {
      width: 100px;
      height: 100px;
      background-color: ${color};
      transition: background-color 0.3s;
    }
  `);

    return (
        <div>
            <div className="box"></div>
            <button onClick={() => setColor(color === "red" ? "blue" : "red")}>
                Toggle Color
            </button>
        </div>
    );
}


// Why Not Just Use useEffect or useLayoutEffect?
    // With useEffect → styles are injected after paint, causing a flash of unstyled content (FOUC).
    // With useLayoutEffect → better, but might still be too late in some concurrent rendering cases.
    // With useInsertionEffect → styles are injected before DOM changes, so UI is always painted with correct styles.