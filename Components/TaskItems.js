import React from 'react';

function TaskItems({ task }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <button>Done</button>
      <p>{task.title}</p>
      <button>Remove</button>
    </div>
  );
}

export default TaskItems;
