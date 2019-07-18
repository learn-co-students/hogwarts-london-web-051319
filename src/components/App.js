import React, { Component } from 'react'
import '../App.css'
import Nav from './Nav'
import HogContainer from './HogContainer'
import allHogs from '../porkers_data'

class App extends Component {
  constructor () {
    super()
    this.state = {
      currentHogs: allHogs,
      selectedHog: null,
      selectedFilter: false,
      sortOption: null,
      hiddenHogs: []
    }
  }

  selectHog = (selectedHog) => {
    this.setState ({
      selectedHog
    })
  }

  filterHogs = () => {
    this.setState(
      {
        selectedFilter: !this.state.selectedFilter,
        currentHogs: this.filteredHogs()
      }
    )
  }

  filteredHogs = () => {
    let hogsToFilter = allHogs.filter(hog => hog.greased === this.state.selectedFilter)
    let filteredBoys = hogsToFilter.filter(hog => !this.state.hiddenHogs.includes(hog))
    return filteredBoys
  }

  hide = (pig) => {
    this.setState ({
      hiddenHogs: [...this.state.hiddenHogs, pig],
      currentHogs: this.state.currentHogs.filter(hog => hog.name !== pig.name)
    })
  }

  changeSortHogs = (e) => {
    this.setState({
      sortOption: e.target.name
    })
  }

  

  sortHogs = (hogs) => {
    return hogs.sort((a, b) => {

      if (this.state.sortOption === 'name') {
        if (a.name < b.name) return -1;
        else if (a.name > b.name) return 1;
    }
      

      if (this.state.sortOption === 'weight') {
        return a.weight - b.weight
      } 
      
      
    })
  }

  render () {

    const hogsToRender = this.state.sortOption ? this.sortHogs(this.state.currentHogs) : this.state.currentHogs

    return (
      <div className='App'>
        <Nav filter={this.filterHogs} 
        greased={this.state.selectedFilter} 
        sortHogs={this.changeSortHogs}/>
        <HogContainer hogs={hogsToRender} 
        selectedHog={this.state.selectedHog} 
        selectHog={this.selectHog} 
        filter={this.state.selectedFilter}
        hide={this.hide}
        />
      </div>
    )
  }
}

export default App
