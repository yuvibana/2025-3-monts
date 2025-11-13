import React, { useEffect, useState } from 'react'
import ProductCart from './components/productCart'
import Pagination from './components/pagination'
import PagesSizeDropdown from './components/pagesSizeDropdown'

export default function App() {
  const [pageSize, setPageSize] = useState(10)

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)

  const fetchData = async () => {
    setLoading(true)
    try {
      const data = await fetch("https://dummyjson.com/products?limit=300")
      const json = await data.json();
      setData(json?.products);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])


  const totalPages = data.length;
  const noOfPages = Math.ceil(totalPages / pageSize);
  const start = currentPage * pageSize;
  const end = start + pageSize;

  const handlePageChange = (num) => {
    setCurrentPage(num)
  }
  const goToPrevPage = (num) => {
    setCurrentPage((prev) => prev - 1)
  }
  const goToNextPage = (num) => {
    setCurrentPage((prev) => prev + 1)
  }


  if (loading) {
    return <div>Loading...</div>
  }
  if (data.length === 0) {
    return <div>No Products!</div>
  }

  return (
    <>
      <PagesSizeDropdown
        pageSize={pageSize}
        setPageSize={setPageSize}
      />
      <div className='grid_cards'>
        {data && data.slice(start, end).map((item, index) => {
          return (
            <ProductCart key={index} data={item} />
          )
        })}
      </div>
      <Pagination
        currentPage={currentPage}
        goToPrevPage={goToPrevPage}
        noOfPages={noOfPages}
        goToNextPage={goToNextPage}
        handlePageChange={handlePageChange}
      />
    </>
  )
}
