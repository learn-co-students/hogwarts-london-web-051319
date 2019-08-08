import React from 'react';

class Filter extends React.Component {
    render() {
        const {greasedFilter, greasedOptions} = this.props
        return (
            <div>
                <select onChange={event => handleEvent(event.target.value)}>
                {
                    greasedOptions.map(<option selected={greasedOptions.value === value} greasedFilter={greasedOptions.value}>{greasedOptions.value}</option>)
                }
                </select>
            </div>
        )
    }
    
}

export default Filter