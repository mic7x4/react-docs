import React, { Component } from 'react'

export default class MultipleInputs extends Component {
    constructor(props){
        super(props);
        this.state = {
            isGoing : true,
            numberOfGuests: 7
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name] : value
        });
    }
    render() {
        return (
            <div>
               <form action="">
                   <label htmlFor="">is Going</label>
                   <input 
                        type="checkbox"
                        name="isGoing"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange}
                        />
                        <br/>
                        <label htmlFor="">Number of Guest</label>
                        <input 
                            type="number"
                            name="number of input"
                            value={this.state.numberOfGuests}
                            onChange={this.handleInputChange}
                        />
                </form> 
            </div>
        )
    }
}
