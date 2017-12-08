import React, { Component } from 'react';

import Game from './Game.js'

// LS0LLLLLL3

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commands: "",
      started: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    const commands = value.toUpperCase().split("").filter((letter) => ["L", "R", "S", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].indexOf(letter) > -1).slice(0,10).join("")
    this.setState({ commands });
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
        <header>
          <h1 className="title">
            <img src='bot.png' alt='' />&nbsp;
            Robots on a<br/>
            Number Line
            &nbsp;<img src='parachute.png' alt='' />
          </h1>
        </header>
        <br/>
        <br/>
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
                <p>
                  Two robots are parachuted onto a spot of a discrete number line that stretches infinitely in either direction.
                  They are an unknown distance apart.
                  Where they land, they drop their parachute.
                  They begin executing the same set of instructions at the same time.
                  Unfortunately, these are not very good robots, and they only understand commands in character form.
                  There is only room for 10 instructions. Possible instructions are as follows:
                </p>
                <p>
                  L: Move left one space<br/>
                  R: Move right one space<br/>
                  S: Skip the next instruction if and only if there is a parachute at my feet<br/>
                  0-9: Move to this position in the instructions (If the instructions are LRS1, the 1 would move the robot back to the 'R')<br/>
                </p>
                <p>
                  Every step takes the same amount of time to execute, including parachute skips and moving through the instructions.
                  There is no variable storage.
                  The robots begin executing from step 0.
                  What set of instructions will result in the two robots ultimately finding each other on the infinite number line in every case?
                  There are multiple possible answers.
                </p>
                <br/>
                <br/>
                <br/>
                <br/>
              </form>
            )
          }
        <footer>
          Simple implementation of XKCD Puzzle &nbsp;
          <a href="http://wiki.xkcd.com/irc/Puzzles#Robots_on_a_number_line" target="_blank" rel="noopener noreferrer">
            Robots on a number line
          </a>. &nbsp;
          <a href="https://carlomartinucci.github.io/" target="_blank" rel="noopener noreferrer">
            Carlo Martinucci
          </a>, 2017
        </footer>
      </div>
    );
  }
}

export default App;
