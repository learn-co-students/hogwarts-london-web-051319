import React from 'react'

const Button = ({text, handleClick}) => {
  return (
    <button className='ui button small' onClick={handleClick}>{text}</button>
  )
}

export default Button;