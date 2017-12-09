import React from 'react';

const Commands = ({commands, blueIndex, redIndex}) => {
  return (
    <div>
      <div className='line'>
        {commands.split('').map((command, index) => (
          <div key={index} className="position no-margin" >
            <div className="number">
              {index}
            </div>
            {index === blueIndex ? <img className='blue' alt=''/> : null}
            {index === redIndex ? <img className='red' alt=''/> : null}
            <div className="command">
              {command}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Commands
