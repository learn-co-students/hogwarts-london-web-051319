import React from 'react'
import Hogtile from './Hogtile'

class Index extends React.Component {
    state = {
        hogsFiltered: false,
        sortByWeight: true
    }

    toggleFilter = () => {
        this.setState({hogsFiltered: !this.state.hogsFiltered})
    }

    toggleSortFilter = () => {
        this.setState({sortByWeight: !this.state.sortByWeight})
    }

    filteredHogs = () => {
        return this.state.hogsFiltered ? this.props.hogs.filter(hog => hog.greased === true) : this.props.hogs
    }

    sortFilteredHogs = () => {
        return this.state.sortByWeight ? this.sortWeights() : this.sortNames() 
    }

    sortNames = () => {
        return this.filteredHogs().sort((a,b) => a.name.localeCompare(b.name))
    }

    sortWeights = () => {
        return this.filteredHogs().sort((a,b) => a["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]
                                        -b["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"])
    }

    render(){
        const hogsArray = this.sortFilteredHogs()
        return(
            <div>
                <p>
                   <button onClick={this.toggleFilter}> {this.state.hogsFiltered ? "Greased" : "All of the Hogs"} </button>
                   <button onClick={this.toggleSortFilter}> {this.state.sortByWeight ? "Sort by Weight" : "Sort by Name"} </button>
                </p>
                <div className="ui grid container">
                    {hogsArray.map(hog => <Hogtile key={hog.name} hog={hog}/>)}
                </div>
            </div>
        )
    }

}

export default Index

// return this.state.sortByWeight ? this.filteredHogs().sort((a,b) => a["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]-b["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]) : this.filteredHogs()
