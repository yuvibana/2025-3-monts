import React from 'react'

export default function Interest({ data, setData, errors }) {
  const { interest } = data;

  const handleDataChange = (e) => {
    const { checked, name } = e.target;
    setData(prev => ({
      ...prev,
      interest: checked
        ? [...prev.interest, name]
        : prev.interest.filter((i) => i !== name)
    }));
  };

  return (
    <div>
      <label>
        <input
          type='checkbox'
          name='coding'
          checked={interest.includes('coding')}
          onChange={handleDataChange}
        />
        coding
      </label>
      <br />
      <label>
        <input
          type='checkbox'
          name='music'
          checked={interest.includes('music')}
          onChange={handleDataChange}

        />
        music
      </label>
      {errors.interest && <p style={{ color: 'red' }}>{errors.interest}</p>}
    </div>
  )
}
