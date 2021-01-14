import React, { Component } from 'react'

export default class SignupDialog extends Component {
    constructor(props){
        super(props);
        this.state ={login:''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);

    }
    handleChange(e){
        this.state({login:e.target.value});
        console.log("123")
    }
    handleSignUp(){
        alert(`Welcome abroad , ${this.state.login}`);
    }
    render() {
        function FancyBorder(props){
            return (
                <div className={'FancyBorder FancyBorder-' + props.color}></div>
            )
        }
        function Dialog(props){
            return (
                <div>
                    <FancyBorder color="blue">
                    <h1 className="Dialog-title">
                        {props.title}
                    </h1>
                    <p className="Dialog-message">
                        {props.message}
                    </p>
                    {props.children}
                </FancyBorder>

                <h2>This is it</h2>
                </div>
            )
        }
        return (
            <Dialog title="Mars Exploration Program" message="How should we refer to you?"> 
                <input value={this.state.login} onChange={this.handleChange}/>
                <button onClick={this.handleSignUp}>Sign Me up</button>
            </Dialog>
        )
    }
}
