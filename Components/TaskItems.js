import React from 'react';
import { Task } from './styles/Task.styled';
import { TaskDone } from './styles/Task.styled';
import { Buttons } from './styles/Buttons.styled';

function TaskItems({ task, completeTask, deleteTask }) {
  return (
    <Task>
      <Buttons onClick={() => completeTask(task.id)}>Done</Buttons>
      <TaskDone
        complet={task.completed ? 'line-through' : 'none'}
        opacity={task.completed ? '0.3' : '1'}
      >
        {task.title}
      </TaskDone>
      <Buttons onClick={() => deleteTask(task.id)}>Remove</Buttons>
    </Task>
  );
}

export default TaskItems;
