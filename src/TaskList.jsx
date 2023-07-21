import { TaskItem } from "./TaskItem";

export function TaskList({ tasks, toggleTask, deleteTask, completed }) {
  const filteredTasks = tasks.filter((task) => (completed ? task.completed : !task.completed));

  return (
    <ul className="task-list">
      {filteredTasks.map(task => {
        return (<TaskItem key={task.id} task={task} completed={completed} toggleTask={toggleTask} deleteTask={deleteTask} />)
      })}
    </ul>
  )
}