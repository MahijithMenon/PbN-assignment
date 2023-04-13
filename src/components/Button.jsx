import React from 'react';

function Button({ name }) {
  const buttonStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    fontWeight: 'bold',
    backgroundColor: '#fff',
    color: '#000',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const leftDivStyle = {
    width: '60%',
  };

  const rightDivStyle = {
    width: '40%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  };

  const circleStyle = {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const arrowStyle = {
    border: 'solid #007bff',
    borderWidth: '0 3px 3px 0',
    display: 'inline-block',
    padding: '3px',
    transform: 'rotate(45deg)',
  };
  return (
    <button style={buttonStyle}>
      <div style={leftDivStyle}>{name}</div>
      <div style={rightDivStyle}>
        <div style={circleStyle}>
          <i style={arrowStyle}></i>
        </div>
      </div>
    </button>
  );
}

export default Button;
