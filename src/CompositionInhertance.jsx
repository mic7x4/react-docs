import React, { Component } from 'react';
import './Composition.css';

export default class CompositionInhertance extends Component {
    render() {
        function FancyBorder(props){
            return (
                <div className={'FancyBorder FancyBorder-'+props.color}>
                    {props.children}
                </div>
            )
        }

        function WelcomeDialog(){
            return (
                <FancyBorder color='blue'>
                    <h1 className="Dialog-title">
                        Welcome
                    </h1>
                    <p className="Dialog-message">
                        Thank you for visiting our spacecraft
                    </p>
                </FancyBorder>
            )
        }
        function Contacts(){
            return <div className="Contacts"/>
        }
        function Chat(){
            return <div className="Chat"/>
        }
        function SplitPane(props){
            return (
                <div className="SplitPane">
                    <div className="SplitPane-left">
                        {props.left}
                    </div>
                    <div className="SplitPane-right">
                        {props.right}
                    </div>
                </div>
            )
        }
        return (
            <SplitPane
                left={<Contacts/>}
                right ={<Chat/>}
            />
        )
    }
}
