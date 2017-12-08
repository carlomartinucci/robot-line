import React, { Component } from 'react';

const Position = (props) => {
  return (
    <div className="position">
      <div className="number">
        {props.position}
      </div>
      {props.imgs.map(({src, className, key}) => (
        <img key={key} src={src} className={className} />
      ))}
    </div>
  )
}

export default Position
