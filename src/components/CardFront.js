import React from 'react'

const CardFront = ({hog, flipCard, addHiddenPig}) => {
  return (
    <div className="ui eight wide column" >
      <div className="ui card">
        <div className="image" onClick={flipCard}>
          <img src={require(`../hog-imgs/${hog.name.toLowerCase().replace(/\s+/g, '_')}.jpg`)} alt='pig' />
        </div>
        <div className='content' onClick={flipCard}>
          <p className="header">{hog.name}</p>
        </div>
        <div className='extra content'>
          <span className="right floated" onClick={addHiddenPig}>
            Hide
          </span>
        </div>
      </div>
    </div>
  )
}

export default CardFront;