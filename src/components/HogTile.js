import React from 'react'

class HogTile extends React.Component {
  state = {
    cardFront: true
  }

  flipCard = () => {
    this.setState({cardFront: !this.state.cardFront})
  }

  render() {  
    if (this.state.cardFront) {
      return (
        <div className="ui eight wide column" onClick={this.flipCard}>
          <div className="ui card">
            <div className="image">
              <img src={require(`../hog-imgs/${this.props.hog.name.toLowerCase().replace(/\s+/g, '_')}.jpg`)} />
            </div>
            <div className='content'>
              <p className="header">{this.props.hog.name}</p>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="ui eight wide column" onClick={this.flipCard}>
          <div className="ui card">
            <div className="content">
              <div className="header">
                Name: {this.props.hog.name}
              </div>
              ::after
              <p>Specialty: {this.props.hog.specialty}</p>
              <p>{this.props.hog.greased ? 'Greased' : 'Not Greased'}</p>
              <p>{this.props.hog['highest medal achieved']} Medal</p>
              <p>{this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} Refrigerators equivalent in pig</p>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default HogTile