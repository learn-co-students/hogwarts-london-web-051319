import React from 'react'

const HogDetails = ({ hog, hide }) => {
  return <div>
    <div>Weight: {hog.weight}</div>
    <div>Medal: {hog.medal}</div>
    <button onClick={() => hide(hog)}>Hide Me!</button>
  </div>
}

export default HogDetails
