import React from 'react'
import HogCard from '../components/HogCard'

class HogContainer extends React.Component {

  render() {
    return (
      <div>
        {
          this.props.hogs.map(hog => <HogCard hog={hog} hey={hog.id} displayMoreInfo={this.props.displayMoreInfo} />)
        }
      </div>
    )
  }
}

export default HogContainer