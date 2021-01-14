import React, { Component } from 'react'

export default class Calculator extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature:''};
    }
    handleChange(e){
        this.setState({temperature:e.target.value});
    }
    render() {
        const temperature = this.state.temperature;
        function BoilingVerdict(props){
            if(props.celcius >= 100){
                return <p>Water would boil.</p>
            }
            return <p>Water would not boil</p>
        }
        return (
            <fieldset>
                <legend>Enter Temperature in Celsius:</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange}
                />
                <BoilingVerdict
                    celcius={parseFloat(temperature)}
                />
            </fieldset>
        )
    }
}
