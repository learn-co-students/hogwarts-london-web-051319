import React from 'react'

class BackCard extends React.Component {
    render(){
        const {name, specialty} = this.props.hog
        return(
            <div 
            className = "ui card"
            onClick = {this.props.showDetails}>
                <div>
                    <p>{name}</p>
                    <p>{specialty}</p>
                    <p>{this.props.hog["highest medal achieved"]}</p>
                    <p> Weight in fridges: {this.props.hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]} </p>
                </div>
            </div>
        )
    }
}

export default BackCard