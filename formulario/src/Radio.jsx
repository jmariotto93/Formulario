import React from 'react'

const Radio = ({pergunta, options, id, onChange, value}) => {
  return (
    <fieldset style={{border: '2px solid #eee', marginBottom: '1rem'}}>
        <legend style={{fontWeight: 'bold'}}>{pergunta}</legend>
        {options.map((option) => (
            <label key={option}>
                <input 
                  id={id}
                  type="radio" 
                  checked={value === option} 
                  value={option} 
                  onChange={onChange} />
                {option}
            </label>
        ))}
    </fieldset>
  )
}

export default Radio