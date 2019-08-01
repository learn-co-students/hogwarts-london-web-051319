import React from 'react'

class HogCard extends React.Component {

  state = {
    showDetails: false
  }

  displayMoreInfo = () => {
    this.setState({
      showDetails: !this.state.showDetails
    })
  }

  render() {
    const hog = this.props.hog
    const image = hog.name.toLowerCase().split(" ").join("_") + ".jpg"
    return (
      <div onClick={() => this.props.displayMoreInfo(hog)}>
        <h3>{hog.name}</h3>
        <img src={require(`../hog-imgs/${image}`)}/>
        { hog.showDetails ? (
          <div>
            <p>Medal: {hog["highest medal achieved"]}</p>
            <p>Weight: {hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]} </p>
            
          </div>
        ) : null }
      </div>
    )
  }
}

export default HogCard