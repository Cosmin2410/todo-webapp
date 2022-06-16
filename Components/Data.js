import React from 'react';

function Test({ data }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333',
      }}
    >
      <p>{data}</p>
      <button>DONE</button>
      <button>REMOVE</button>
    </div>
  );
}

export default Test;
