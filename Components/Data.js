import useTaskActions from '../hooks/useTaskActions';
import { Task } from './styles/Task.styled';
import { TaskDone } from './styles/Task.styled';
import { Buttons } from './styles/Buttons.styled';

const Data = ({ task, completed }) => {
  const { taskComplet, finishTask, deleteTask, removeTask } =
    useTaskActions(completed);

  return (
    <Task remove={deleteTask ? 'none' : 'flex'}>
      <Buttons onClick={finishTask}>DONE</Buttons>

      <TaskDone
        complet={taskComplet ? 'line-through' : 'none'}
        opacity={taskComplet ? '0.3' : '1'}
      >
        {task}
      </TaskDone>

      <Buttons onClick={removeTask}>REMOVE</Buttons>
    </Task>
  );
};
export default Data;
