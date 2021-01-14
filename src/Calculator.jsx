import React, { Component } from 'react'
import TemperatureInput from './TemperatureInput';

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
        function toCelsius(fahrenheit){
            return (fahrenheit - 32) * 5 /9;
        }
        function toFahrenheit(celcius){
            return (celcius * 9 /5) +32;
        }
        function tryConvert(temperature, convert){
            const input = parseFloat(temperature);
            if(Number.isNaN(input)){
                return '';
            }
            const output = convert(input);
            const rounded = Math.round(output * 1000) / 1000;
            return rounded.toString();
        }
        return (
            <div>
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
            
                <TemperatureInput scale='c'/>
                <TemperatureInput scale='f'/>
            </div>
        )
    }
}
