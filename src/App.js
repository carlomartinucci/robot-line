import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Game from './Game.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commands: "LS0LLLLLL3",
      started: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    const newValue = value.toUpperCase().split("").filter((letter) => ["L", "R", "S", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].indexOf(letter) > -1).slice(0,10).join("")
    this.setState({ commands: newValue });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      started: true
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Robot Line</h1>
        </header>
          {
            this.state.started ? (
              <Game bluePosition={0} redPosition={5} commands={this.state.commands} />
            ) : (
              <form onSubmit={this.handleSubmit}>
                <input
                  onChange={this.handleChange}
                  value={this.state.commands}
                />
                <button>
                  Set commands and start
                </button>
              </form>
            )
          }
        <footer>
          Simple implementation of XKCD Puzzle <a href="http://wiki.xkcd.com/irc/Puzzles#Robots_on_a_number_line" target="_blank">Robots on a number line</a><br/>
          <a href="https://carlomartinucci.github.io/" target="_blank">Carlo Martinucci</a>, 2017
        </footer>
      </div>
    );
  }
}

export default App;
