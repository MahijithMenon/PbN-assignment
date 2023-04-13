import React from 'react';

const Task = ({ name }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: '1rem',
        borderRadius: '5px',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
        marginBottom: '1rem',
        width: '100%',
      }}
    >
      <div
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundImage: 'url(https://example.com/photo.jpg)',
          backgroundSize: 'cover',
          marginRight: '1rem',
        }}
      ></div>
      <div style={{ position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            top: '-10px',
            right: '-5px',
            width: '10px',
            height: '20px',
            backgroundColor: 'blue',
            transform: 'rotate(45deg)',
            borderRadius: '5px',
          }}
        ></div>
        <p style={{ marginBottom: '0' }}>{name}</p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              backgroundColor: 'green',
              marginRight: '0.5rem',
            }}
          ></div>
          <div
            style={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              backgroundColor: 'red',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Task;
