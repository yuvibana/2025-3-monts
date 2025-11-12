import React from 'react'

export default function Settings({ data, setData }) {
  const { theme } = data;
  const handleDataChange = (e) => {
    setData((prev) => ({
      ...prev,
      theme: e.target.name,
    }))
  }
  return (
    <div>
      <label>
        <input
          type='radio'
          name='dark'
          checked={theme === 'dark'}
          onChange={handleDataChange}
        />
        Dark
      </label>
      <br />
      <label>
        <input
          type='radio'
          name='light'
          checked={theme === 'light'}
          onChange={handleDataChange}
        />
        Light
      </label>
    </div>
  )
}
