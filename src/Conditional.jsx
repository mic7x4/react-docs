import React, { Component } from 'react'

export default class Conditional extends Component {

    render() {
        function UserGreetings(props){
            return <h1>Welcome back</h1>
        }
        function GuestGreetings(props){
            return <h1>Please Sign up</h1>
        }
        function Greeting(props){
            const isLoggedIn = props.isLoggedIn;
            if(isLoggedIn){
                return <UserGreetings/>
            }
            return <GuestGreetings/>
        }
        function LoginButton(props) {
            return (
                <button onClick={props.onClick}>Login</button>
            )
        }
        function LogoutButton(props){
            return (
                <button onClick={props.onClick}>Logout</button>
            )
        }
        return (
            <div>
                <Greeting isLoggedIn={false}/>
            </div>
        )
    }
}
