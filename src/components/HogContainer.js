import React from 'react'
import HogDetails from './HogDetails'

const HogContainer = ({ hogs, selectHog, selectedHog }) => {
  return <div className='ui three column grid'>
    {hogs.map((hog, i) => {
      return <div className='column'>
        <div className='ui fluid card' key={i} onClick={() => selectHog(hog)}>
          <div className='header'>{hog.name}</div>
          <img src={require(`../hog-imgs/${hog.name.toLowerCase().split(' ').join('_')}.jpg`)} />
          {
            selectedHog && (selectedHog.name === hog.name) ? <HogDetails hog={hog} /> : <div />
          }
        </div>
      </div>
    })}

  </div>
}

export default HogContainer
