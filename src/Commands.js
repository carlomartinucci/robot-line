import React, { Component } from 'react';

const Commands = ({commands, blueIndex, redIndex}) => {
  return (
    <div>
      Commands: {commands}<br/>
      Blue next move: {commands[blueIndex]}<br/>
      Red next move: {commands[redIndex]}
    </div>
  )
}

export default Commands
