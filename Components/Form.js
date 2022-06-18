import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TaskItems from './TaskItems';
import useCustomActions from '../hooks/useCustomActions';
import { FormStyle } from './styles/Form.styled';

function Form() {
  const [formData, setFormData] = useState({
    title: '',
    completed: false,
  });

  const [inputValue, setInputValue, completeTask, deleteTask] =
    useCustomActions();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        id: uuidv4(),
        [name]: value,
      };
    });
  };

  const getDataBtn = () => {
    setInputValue([...inputValue, formData]);
    setFormData((prevFormData) => {
      return { ...prevFormData, title: '' };
    });
  };

  return (
    <div>
      <FormStyle>
        <input
          type="field"
          name="title"
          value={formData.title}
          onChange={handleChange}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              getDataBtn();
            }
          }}
        />
        <button onClick={getDataBtn}>Add Task</button>
      </FormStyle>
      <div>
        {inputValue.map((task) => {
          return (
            <TaskItems
              key={task.id}
              task={task}
              completeTask={completeTask}
              deleteTask={deleteTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Form;
