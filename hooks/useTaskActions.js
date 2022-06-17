import { useState } from 'react';

const useTaskActions = (completed) => {
  const [taskComplet, setTaskComplete] = useState(completed);
  const [deleteTask, setDeleteTask] = useState(false);

  const finishTask = () => {
    setTaskComplete((prevTaskComplete) => !prevTaskComplete);
  };

  const removeTask = () => {
    setDeleteTask((prevDeleteTask) => !prevDeleteTask);
  };

  return { taskComplet, finishTask, deleteTask, removeTask };
};

export default useTaskActions;
