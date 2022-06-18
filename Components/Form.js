import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TaskItems from './TaskItems';

function Form() {
  const [formData, setFormData] = useState({
    title: '',
    completed: false,
  });

  const [inputValue, setInputValue] = useState([]);

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
      <input
        type="field"
        onChange={handleChange}
        name="title"
        value={formData.title}
      />
      <button onClick={getDataBtn}>Add Task</button>
      <div>
        {inputValue.map((task) => {
          return <TaskItems key={task.id} task={task} />;
        })}
      </div>
    </div>
  );
}

export default Form;
