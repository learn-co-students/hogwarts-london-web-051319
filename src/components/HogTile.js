import React from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'

class HogTile extends React.Component {
  state = {
    cardFront: true
  }

  flipCard = () => {
    this.setState({cardFront: !this.state.cardFront})
  }

  render() {  
    if (this.state.cardFront) {
      return <CardFront hog={this.props.hog} flipCard={this.flipCard} addHiddenPig={this.props.addHiddenPig} />
    } else {
      return <CardBack hog={this.props.hog} flipCard={this.flipCard} />
    }
  }
}

export default HogTile