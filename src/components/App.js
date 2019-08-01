import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from '../container/HogContainer'
import MenuContainer from '../container/MenuContainer'


class App extends Component {

  state = {
    hogs: [],
    sortOption: "all",
    filterOption: ""
  }

  componentDidMount() {
    this.setState({ hogs })
  }

  setTerm = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  filterHogs = (hogs) => {
    if (this.state.sortOption === "all") return hogs;
    else if (this.state.sortOption === "greased") {
      return hogs.filter(hog => hog.greased)
    }
    else if (this.state.sortOption === "non-greased") {
      return hogs.filter(hog => !hog.greased)
    }
  }

  sortHogs = hogs => {
    const sortedHogs = [...hogs]
    if (this.state.filterOption === "") return hogs;

    else if (this.state.filterOption === "name") {
      return sortedHogs.sort((a,b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if (nameA > nameB) {
          return 1;
        }
        else if (nameA < nameB) {
          return - 1;
        }
        return 0;
      })
    }

    else if (this.state.filterOption === "weight") {
      return sortedHogs.sort((a,b) => {
        return a["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"] - b["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]
      })
    }
  }

  displayMoreInfo = (hog) => {
    const updatedHogs = this.state.hogs.map(h => {
      if(h.name === hog.name) {
        return {
          ...hog,
          showDetails: !h.showDetails
        }
      }
      
      return h;
    })

    this.setState({
      hogs: updatedHogs
    })
  }

  render() {
    const hogs = this.filterHogs(this.state.hogs)
    const sortedAndFilteredHogs = this.sortHogs(hogs)
    return (
      <div className="App">
          < Nav />
          <MenuContainer setTerm={this.setTerm} sortOption={this.state.sortOption} />
          <HogContainer hogs={sortedAndFilteredHogs} displayMoreInfo={this.displayMoreInfo} />

      </div>
    )
  }
}

export default App;
