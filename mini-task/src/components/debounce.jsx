import React, { useCallback, useEffect, useState } from 'react'

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay);
  }
}

export default function () {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  const handleSearch = ((e) => { setSearch(e.target.value); });

  const debouncedHandleSearch = useCallback(
    debounce(handleSearch, 500),
    [handleSearch]
  );

  useEffect(() => {
    if (!search) return;
    const fetchData = async () => {
      const res = await fetch(`https://api.github.com/search/users?q=${search}`);
      const json = await res.json();
      setData(json.items || []);
    }
    fetchData();
  }, [search])


  return (
    <div>
      <input
        type="text"
        onChange={debouncedHandleSearch} />
      <div>
        {data.length ? (
          data.map((user) => (
            <div key={user.id}>
              <a href={`${user.html_url}`} target="_blank" rel="noreferrer">
                <p>{user.login}</p>
              </a>
            </div>
          ))
        ) : (
          <p>No users found</p>
        )}
      </div>
    </div>
  )
}
