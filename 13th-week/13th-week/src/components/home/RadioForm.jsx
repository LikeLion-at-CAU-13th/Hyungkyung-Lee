import React from 'react'

export const radioOptions = [
  { label: '기획', value: '기획', name: 'button-types' },
  { label: '디자인', value: '디자인', name: 'button-types' },
  { label: '프론트엔드', value: '프론트엔드', name: 'button-types' },
  { label: '백엔드', value: '백엔드', name: 'button-types' },
];

const RadioForm = ({options, value, onChange}) => {
  return (
    <div>
        <div>파트</div>
        {options.map((option) => (
            <label key={option.value}>
                <input
                    type='radio'
                    name={option.name}
                    value={option.value}
                    checked={value==option.value}
                    onChange={onChange}
                />
                {option.label}
            </label>
        ))}
    </div>
  )
}

export default RadioForm