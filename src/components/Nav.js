import piggy from '../porco.png'
import React from 'react'

const Nav = ({filter, greased, sortHogs}) => {
  return (
    <div className='navWrapper'>
      <span className='headerText'>Hogwarts</span>
  			<div className='TwirlyPig'>
        <a href='https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231'>
          <img src={piggy} className='App-logo' alt='piggy' />
        </a>
        <button className='button' name='filter' onClick={filter}>{greased ? 'Non-greased pigs' : 'Greased pigs'}</button>
        <button className='button' name='weight' onClick={sortHogs}>sort by weight</button>
        <button className='button' name='name' onClick={sortHogs}>sort by name</button>
      </div>
      <span className='normalText'>A React App for County Fair Hog Fans</span>
    </div>
  )
}

export default Nav
