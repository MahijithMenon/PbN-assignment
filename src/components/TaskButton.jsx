import React from 'react';

const TaskButton = ({ name }) => {
  return (
    <button
      style={{
        backgroundColor: 'white',
        color: 'black',
        border: '1px solid transparent',
        padding: '0.5rem 1rem',
        fontSize: '1rem',
        position: 'relative',
        transition: 'border-color 0.3s ease-out',
      }}
      className="btn active"
    >
      {name}
    </button>
  );
};

export default TaskButton;
