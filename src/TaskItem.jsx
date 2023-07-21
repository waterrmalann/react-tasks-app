import { RiCloseFill } from "react-icons/ri"

export function TaskItem({ task, completed, toggleTask, deleteTask }) {
  return (
    <li key={task.id}>
      <label className={completed ? "task-item completed" : "task-item"}>
        <input className="task-item__check" type="checkbox" checked={task.completed} onChange={e => toggleTask(task.id, e.target.checked)} />
        {task.title}
        <button className="btn btn-delete" onClick={() => deleteTask(task.id)}><RiCloseFill size={30} /></button>
      </label>
    </li>
  )
}