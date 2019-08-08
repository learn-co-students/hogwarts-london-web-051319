import React from 'react'

class HogCard extends React.Component {

    state = {
        showDetails: false
    }

    toggleDetails = () => {
        this.setState({ showDetails: !this.state.showDetails})
    }

    render() {

        const {name, specialty, weight, greased} = this.props
        return(
            <div>
            <div><h1>{name}</h1></div>
            <img src={require(`../hog-imgs/${name.toLowerCase().split(' ').join('_') + '.jpg'}`)} />
            <button onClick={()=>this.toggleDetails(specialty)}>{this.state.showDetails ? 'hide details' : 'show Details'}</button>
            <ul>
                <li>{this.state.showDetails ? `Specialty: ${specialty}` : null}</li>
                <li>{this.state.showDetails ? `Greased: ${greased ? 'Greased' : 'Not Greased'}` : null}</li>
                {/* {this.state.showDetails ? `Specialty: ${specialty}` : null}                 */}
            </ul>
            </div>
        )
    }
}

export default HogCard