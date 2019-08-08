import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogsList from './HogsList';
import Filter from './SortAndFilterOptions';

class App extends Component {

  state = {
    hogs: hogs,
    greasedOptions: [
      'all',
      'greased',
      'ungreased'
    ],
    filteredHogs: hogs
  }

  filterHogs = (option) => {
    if(option === 'greased') {
      this.setState({
        filteredHogs: this.state.hogs.filter(hog => hog.greased === true)
      })
    }  else if (option === 'ungreased') {
      this.setState({
        filteredHogs: this.state.hogs.filter(hog => hog.greased === false)
      })
    } else if (option === 'all') {
      this.setState({
        filteredHogs: this.state.hogs
      })
    } else {
      console.log("error")
    }
  }
  
  render() {
    const {greasedOptions} = this.state
    return (
      <div className="App">
          <Nav />
          <Filter greasedOptions={greasedOptions} handleEvent={this.filterHogs}/>
          <HogsList hogs={this.state.filteredHogs}/>
      </div>
    )
  }
}

export default App;
