import React from 'react'
import HogTile from './HogTile'

class Index extends React.Component {
  state = {
    filter: false,
    sortByWeight: false
  }

  filteredHogs = () => {
    return this.state.filter ? this.props.hogs.filter(hog => hog.greased) : this.props.hogs
  }

  sortedHogs = () => {
    if (this.state.sortByWeight) {
      return this.filteredHogs().sort((a,b) => a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])
    } else {
      return this.filteredHogs().sort((a,b)=> a.name < b.name ? -1 : (a.name > b.name ? 1 : 0))
    }
  }

  toggleFilter = () => {
    this.setState({filter: !this.state.filter})
  }

  toggleSort = () => {
    this.setState({sortByWeight: !this.state.sortByWeight})
  }

  render() {
    return (
      <div>
      <button onClick={this.toggleFilter}>FILTER FOR GREASE: {this.state.filter ? 'ON' : 'OFF'}</button>
      <button onClick={this.toggleSort}>Sorted by {this.state.sortByWeight ? 'Weight' : 'Name'}</button>
      <br /><br />
      <div className="ui grid container">
        {this.sortedHogs().map(hog => <HogTile hog={hog} />)}
      </div>
      </div>
    )
  }
}

export default Index