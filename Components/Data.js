import useTaskActions from '../hooks/useTaskActions';

const Data = ({ data, completed }) => {
  let stylesCompleted = {
    textDecoration: 'line-through',
  };

  let stylesNotCompleted = {
    textDecoration: 'none',
  };

  const { taskComplet, finishTask, deleteTask, removeTask } =
    useTaskActions(completed);

  return (
    <div className={deleteTask ? 'remove div' : 'div'}>
      <p style={taskComplet ? stylesCompleted : stylesNotCompleted}>{data}</p>
      <button onClick={finishTask}>DONE</button>
      <button onClick={removeTask}>REMOVE</button>
    </div>
  );
};
export default Data;
