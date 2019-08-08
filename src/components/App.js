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
    filter: {
      type: 'all'
    }
  }

  // changeFilter = type => {
  //   this.setState({
  //     greasedFilters: {
  //       ...this.state.greasedFilter,
  //       greasedOptions: 
  //     }
  //   })
  // }
  
  render() {
    const {filter, greasedOptions} = this.state
    return (
      <div className="App">
          <Nav />
          <Filter filter={filter} greasedOptions={greasedOptions} handleEvent={this.changeFilter}/>
          <HogsList hogs={this.state.hogs}/>
      </div>
    )
  }
}

export default App;
