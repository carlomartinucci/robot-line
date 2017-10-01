import React, { Component } from 'react';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commands: props.commands,
      blue: {
        commandIndex: 0,
        positions: [props.bluePosition]
      },
      red: {
        commandIndex: 0,
        positions: [props.redPosition]
      },
    }
    this.handleClick = this.handleClick.bind(this)
    this.move = this.move.bind(this)
    this.skipIf = this.skipIf.bind(this)
    this.indexTo = this.indexTo.bind(this)
    this.actions = {
      'L': this.move(-1),
      'R': this.move(+1),
      'S': this.skipIf(),
      0: this.indexTo(0),
      1: this.indexTo(1),
      2: this.indexTo(2),
      3: this.indexTo(3),
      4: this.indexTo(4),
      5: this.indexTo(5),
      6: this.indexTo(6),
      7: this.indexTo(7),
      8: this.indexTo(8),
      9: this.indexTo(9),
    }
  }

  handleClick() {
    console.log(this.state)
    this.tick("red")
    this.tick("blue")
  }

  tick(robotColor) {
    const letter = this.state.commands[this.state[robotColor].commandIndex]
    const action = this.actions[letter] || this.nullFunction
    action(robotColor)
  }

  nullFunction () {}

  move (direction) {
    return (robotColor) => {
      console.log("move", direction, robotColor)
      this.setState((prevState) => {
        const {commandIndex, positions} = prevState[robotColor]
        const lastPosition = positions[positions.length - 1]
        return {[robotColor]: {
          commandIndex: commandIndex + 1,
          positions: positions.concat(lastPosition + direction),
        }}
      })
    }
  }

  skipIf () {
    return (robotColor) => {
      console.log("skipIf", robotColor)
      this.setState((prevState) => {
        const {commandIndex, positions} = prevState[robotColor]
        const lastPosition = positions[positions.length - 1]
        const nextIndex = lastPosition === prevState.blue.positions[0] || lastPosition === prevState.red.positions[0] ? commandIndex + 2 : commandIndex + 1
        return {[robotColor]: {
          commandIndex: nextIndex,
          positions: positions.concat(lastPosition),
        }}
      })
    }
  }

  indexTo (index) {
    return (robotColor) => {
      console.log("indexTo", index, robotColor)
      this.setState((prevState) => {
        const {commandIndex, positions} = prevState[robotColor]
        const lastPosition = positions[positions.length - 1]
        return {[robotColor]: {
          commandIndex: index,
          positions: positions.concat(lastPosition),
        }}
      })
    }
  }

  render() {
    return (
      <div className="Game">
        <div>commands: {this.state.commands}</div>
        <div>Turn # {this.state.blue.positions.length}</div>
        <br/>

        <div>BLUE</div>
        <div>position: {this.state.blue.positions[this.state.blue.positions.length - 1]}</div>
        <div>next action: {this.state.commands[this.state.blue.commandIndex]}</div>
        <br/>
        
        <div>RED</div>
        <div>position: {this.state.red.positions[this.state.red.positions.length - 1]}</div>
        <div>next action: {this.state.commands[this.state.red.commandIndex]}</div>
        <br/>

        <div>parachutes: {this.state.blue.positions[0]}, {this.state.red.positions[0]}</div>
        <button onClick={this.handleClick}>click</button>
      </div>
    );
  }
}

export default Game;
