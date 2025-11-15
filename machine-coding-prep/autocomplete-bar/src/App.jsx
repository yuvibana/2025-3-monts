import { useEffect, useState, useRef } from "react"

export default function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const cacheRef = useRef({});

  const fetchData = async () => {

    if (!input.trim()) {
      setData([]);
      return;
    }

    if (cacheRef.current[input]) {
      console.log("Loaded from cache:", input);
      setData(cacheRef.current[input])
      return;
    }

    console.log('Api Called', input);

    setLoading(true);
    try {
      const r = await fetch(`https://dummyjson.com/recipes/search?q=${input}`);
      const jsonData = await r.json();

      cacheRef.current[input] = jsonData?.recipes;
      setData(jsonData?.recipes);

    } catch (err) {
      console.log('Error in getting Data from Api => ', err);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const timer = setTimeout(fetchData, 400);
    return () => {
      clearTimeout(timer)
    }
  }, [input])


  return (
    <div className="wrapper">
      <input
        placeholder="Search recipes"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
      />
      {
        show &&
        <div className="list-wrapper">
          {
            loading ? <p>Loading</p> :
              <>
                {
                  data.length === 0 ? (<p>No recipes</p>) :
                    (data && data.map((r) =>
                      <p key={r.id}>{r.name}</p>
                    ))
                }
              </>
          }
        </div>
      }
    </div>
  )
}
