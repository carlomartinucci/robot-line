import React from 'react';

const Position = (props) => {
  return (
    <div className="position">
      <div className="number">
        {props.position}
      </div>
      {props.imgs.map(({src, className, key}) => (
        <img key={key} src={src} className={className} alt='' />
      ))}
    </div>
  )
}

export default Position
