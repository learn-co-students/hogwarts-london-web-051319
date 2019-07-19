import React from 'react'
import hogs from '../porkers_data';
import FrontCard from './FrontCard'
import BackCard from './BackCard'

class Hogtile extends React.Component {
    state = {
        cardfront: true
    }

    showDetails = () => {
        this.setState({cardfront: !this.state.cardfront})
    }

    render() {
        let displayCard
        this.state.cardfront ? displayCard = <FrontCard hog={this.props.hog} showDetails={this.showDetails}/> : displayCard = <BackCard hog={this.props.hog}  showDetails={this.showDetails}/>
        return(
            <div>
                <div className = "ui eight wide column">
                    {displayCard}
                </div>
            </div>
        )
    }
}

export default Hogtile