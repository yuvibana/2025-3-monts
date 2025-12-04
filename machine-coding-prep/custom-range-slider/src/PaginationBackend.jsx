import React, { useEffect, useState } from 'react'

export default function PaginationBackend() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)

  const fetchData = async () => {
    setLoading(true)
    try {
      const skip = (page - 1) * limit
      const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
      const json = await res.json()
      setData(json.products)
      setTotal(json.total)
    } catch (err) {
      console.error("Error fetching data:", err)
    } finally {
      setLoading(false)
    }
  }


  useEffect(() => {
    fetchData()
  }, [page, limit])

  const totalPages = Math.ceil(total / limit)

  const goToPrevPage = () => {
    setPage((prev) => Math.max(prev - 1, 1))
  }
  const goToNextPage = () => {
    setPage((prev) => Math.min(prev + 1, totalPages))
  }


  if (loading) return <h1>Loading...</h1>
  if (!loading && data.length === 0) return <h1>No Data!</h1>


  return (
    <div style={{ height: '70vh' }}>
      <div className='grid_cards'>

        {data.map((item, index) =>
          <div
            key={item?.id}
            style={{ textAlign: "center", border: "1px solid #ddd", }}>
            <img
              src={item?.images[0]}
              alt={item?.title}
              width={120}
            />
            <h2 className='title'>{item?.title}</h2>
          </div>
        )}
      </div>
      <div className='pagination'>
        <button
          disabled={page === 1}
          onClick={goToPrevPage} style={{ padding: '10px' }}
        >Prev</button>
        {page} / of / {totalPages}
        <button
          disabled={page === totalPages}
          onClick={goToNextPage} style={{ padding: '10px' }}
        >Next</button>
        <select
          onChange={(e) => setLimit(Number(e.target.value))}
        >
          <option value="" disabled>Select page size</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={40}>40</option>
          <option value={50}>50</option>
        </select>
      </div>
    </div>
  )
}
