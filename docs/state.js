const defaultState = {
  parachutes: [0,5]
}

const tick(robotColor) => {
  const letter = this.state.commands[this.state[robotColor].commandIndex]
  const action = actions[letter] || nullFunction
  action(robotColor)
}

const nullFunction = () => {}

const actions = {
  'L': move(-1),
  'R': move(+1),
  'S': skipIf(),
  0: indexTo(0),
  1: indexTo(1),
  2: indexTo(2),
  3: indexTo(3),
  4: indexTo(4),
  5: indexTo(5),
  6: indexTo(6),
  7: indexTo(7),
  8: indexTo(8),
  9: indexTo(9),
}

const move = (direction) => (robotColor) => {
  setState((prevState) => {
    const {commandIndex, positions} = prevState[robotColor]
    const lastPosition = positions[positions.length]
    return {[robotColor]: {
      commandIndex: commandIndex + 1,
      positions: positions.concat(lastPosition + direction),
    }}
  })
}

const skipIf = () => (robotColor) => {
  setState((prevState) => {
    const {commandIndex, positions} = prevState[robotColor]
    const lastPosition = positions[positions.length]
    const nextIndex = lastPosition === prevState.blue.positions[0] || lastPosition === prevState.red.positions[0] ? commandIndex + 2 : commandIndex + 1
    return {[robotColor]: {
      commandIndex: nextIndex,
      positions: positions.concat(lastPosition),
    }}
  })
}

const indexTo = (index) => (robotColor) => {
  setState((prevState) => {
    const {commandIndex, positions} = prevState[robotColor]
    const lastPosition = positions[positions.length]
    return {[robotColor]: {
      commandIndex: index,
      positions: positions.concat(lastPosition),
    }}
  })
}


