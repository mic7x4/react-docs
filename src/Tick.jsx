import React, { Component } from 'react'


export default class Tick extends Component {

     constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
      this.timerId = setInterval(
          () => this.tick(),1000
      );

      
  }

  componentWillUnmount() {
      clearInterval(this.timerID);
  }
  tick(){
      this.setState({
          date:new Date(),
      })
  }
    render() {
        return (
            <div>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <button >Spinner</button>
            </div>
        )
    }
}
