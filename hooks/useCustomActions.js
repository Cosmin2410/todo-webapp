import { useState, useEffect } from 'react';

const useCustomActions = (id) => {
  const [inputValue, setInputValue] = useState([]);

  const completeTask = (id) => {
    const flipTask = inputValue.map((value) => {
      if (value.id === id) {
        return { ...value, completed: !value.completed };
      }
      return value;
    });
    setInputValue(flipTask);
  };

  const deleteTask = (id) => {
    let deleteTasks = inputValue.filter((dltTask) => dltTask.id !== id);
    setInputValue(deleteTasks);
  };

  return [inputValue, setInputValue, completeTask, deleteTask];
};

export default useCustomActions;
