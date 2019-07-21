import React from 'react'

class FrontCard extends React.Component {
    render(){
        const {name} = this.props.hog
        return(
            <div 
            className = "ui card"
            onClick = {this.props.showDetails}>
                <div>
                    {name}
                </div>
                <div className="image">
              <img src={require(`../hog-imgs/${name.toLowerCase().replace(/\s+/g, '_')}.jpg`)} alt='pig' />
            </div>
            </div>
        )
    }
}

export default FrontCard