import React from 'react';

class Filter extends React.Component {
    render() {
        const {greasedOptions, handleEvent} = this.props
        return (
            <div>
                <select onChange={event => handleEvent(event.target.value)}>
                {
                    greasedOptions.map((option => <option value={option}>{option}</option>))
                }
                </select>
            </div>
        )
    }
    
}

export default Filter