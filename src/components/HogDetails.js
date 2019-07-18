import React from 'react'

const HogDetails = ({ hog }) => {
  return <div>
    <div>Weight: {hog.weight}</div>
    <div>Medal: {hog.medal}</div>
  </div>
}

export default HogDetails
