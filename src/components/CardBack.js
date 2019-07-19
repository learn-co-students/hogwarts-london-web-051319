import React from 'react'

const CardBack = ({hog, flipCard}) => {
  return (
    <div className="ui eight wide column" onClick={flipCard}>
      <div className="ui card" style={{height: '100%'}} >
        <div className="content">
          <div className="header">
            Name: {hog.name}
          </div>
          <hr/><br/>
          <div className='content'>
            <p>Specialty: {hog.specialty}</p>
            <p>This Pig is {hog.greased ? 'Greased' : 'Not Greased'}</p>
            <p>Highest Medal Achieved: {hog['highest medal achieved'].slice(0,1).toUpperCase() + hog['highest medal achieved'].slice(1)}</p>
            <p>{hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} Refrigerators equivalent in Pig</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardBack;