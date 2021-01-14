import React, { Component } from 'react'

export default class SelectTag extends Component {
    constructor(props){
        super(props);
        this.state = {value:"coconut"};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event){
        this.setState({value:event.target.value});
    }
    handleSubmit(event){
        alert("Your favorite flavor is:" + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
