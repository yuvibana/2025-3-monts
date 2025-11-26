import React, { useState } from 'react'
import data from './data.json'

const DataList = ({ list }) => {
  const [isExpended, setIsExpended] = useState({})
  return (
    <div className='container'>
      {list.map((node, index) => {
        return <div key={index}>
          <div
            onClick={() => setIsExpended((prev) => ({
              ...prev,
              [node.name]: !prev[node.name]
            }))}
            style={{ display: 'flex', gap: "10px", cursor: 'pointer' }}>
            {
              node.isfolder &&
              <span
              > {isExpended?.[node.name] ? "-" : "+"} </span>
            }
            <span className='listname'>{node.name}</span>
          </div>
          {
            isExpended?.[node.name] && node.children && <div className='item-card'>
              <DataList list={node.children} />
            </div>
          }
        </div>
      })}
    </div>
  )
}


export default function App() {
  const listData = data;
  return (
    <>
      <div>
        <DataList list={listData} />
      </div>
    </>
  )
}
