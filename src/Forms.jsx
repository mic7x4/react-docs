import React, { Component } from 'react'

export default class Forms extends Component {
    constructor(props){
        super(props);
        this.state = {value: ""};

        this.handleChange =  this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event){
        this.setState({value:event.target.value});
    }
    handleSubmit(event){
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <div style={{padding:"40px"}}>
                <form action="" onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name : </label>
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
