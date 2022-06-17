import React from 'react';

function Data({ data, completed }) {
  let stylesCompleted = {
    textDecoration: 'line-through',
  };

  let stylesNotCompleted = {
    textDecoration: 'none',
  };

  return (
    <div className="div">
      <p style={completed ? stylesCompleted : stylesNotCompleted}>{data}</p>
      <button>DONE</button>
      <button>REMOVE</button>
    </div>
  );
}

export default Data;
