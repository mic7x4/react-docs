import React, { Component } from 'react'

export default class TextArea extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:"Please write an essay about your favorite Book"
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value:event.target.value});
    }
    handleSubmit(event){
        alert("An Assay was Submitted: " + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    <label htmlFor="essay">Essay</label>
                    <textarea  cols="30" rows="10" value={this.state.value} onChange={this.handleChange}></textarea>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
