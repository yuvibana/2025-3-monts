import { useEffect, useState } from "react"

const useWindowSize = () => {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])
    return size;
}

export default function UseCustomHook() {
    const { width, height } = useWindowSize();
    return (
        <div>
            <h1>useCustomHook</h1>
            <p>Width: {width}px</p>
            <p>Height: {height}px</p>
        </div>
    )
}
