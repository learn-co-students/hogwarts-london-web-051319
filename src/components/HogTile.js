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
        <div className="ui eight wide column" >
          <div className="ui card">
            <div className="image" onClick={this.flipCard}>
              <img src={require(`../hog-imgs/${this.props.hog.name.toLowerCase().replace(/\s+/g, '_')}.jpg`)} alt='pig' />
            </div>
            <div className='content' onClick={this.flipCard}>
              <p className="header">{this.props.hog.name}</p>
            </div>
            <div className='extra content'>
              <span className="right floated" onClick={this.props.addHiddenPig}>
                Hide
              </span>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="ui eight wide column" onClick={this.flipCard}>
          <div className="ui card" style={{height: '100%'}} >
            <div className="content">
              <div className="header">
                Name: {this.props.hog.name}
              </div>
              <hr/><br/>
              <div className='content'>
                <p>Specialty: {this.props.hog.specialty}</p>
                <p>This Pig is {this.props.hog.greased ? 'Greased' : 'Not Greased'}</p>
                <p>Highest Medal Achieved: {this.props.hog['highest medal achieved'].slice(0,1).toUpperCase() + this.props.hog['highest medal achieved'].slice(1)}</p>
                <p>{this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} Refrigerators equivalent in Pig</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default HogTile