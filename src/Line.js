import React, { Component } from 'react';

import Position from './Position.js'

const Line = (props) => {
  const minPosition = Math.min(props.bluePosition, props.blueParachute, props.redPosition, props.redParachute) - 2
  const maxPosition = Math.max(props.bluePosition, props.blueParachute, props.redPosition, props.redParachute) + 2
  const positions = [...Array(maxPosition - minPosition).keys()].map((i) => i + minPosition)

  const positionToImages = position => {
    let imgs = []
    if (position === props.blueParachute) {
      imgs.push({src: 'parachute.png', className: '', key: 'pb'})
    }
    if (position === props.redParachute) {
      imgs.push({src: 'parachute.png', className: '', key: 'pr'})
    }
    if (position === props.bluePosition) {
      imgs.push({src: 'bot.png', className: 'blue', key: 'bb'})
    }
    if (position === props.redPosition) {
      imgs.push({src: 'bot.png', className: 'red', key: 'br'})
    }
    return imgs
  }

  console.log(minPosition, maxPosition)
  return (
    <div className="line">
      {positions.map((position) => <Position key={position} position={position} imgs={positionToImages(position)}/>)}
    </div>
  )
}

export default Line
