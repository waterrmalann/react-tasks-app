import { useEffect, useState } from 'react';
import './App.css';
import { TaskList } from './TaskList';
import { TaskForm } from './TaskForm';

function App() {
  const [tasks, setTasks] = useState(() => {
    let data = localStorage.getItem("tasks");
    if (!data) return [];
    return JSON.parse(data);
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  let completedTasks = tasks.reduce((c, task) => task.completed ? c + 1 : c, 0);

  function toggleTask(id, completed) {
    setTasks(currentTasks => {
      return currentTasks.map(task => {
        if (task.id === id) {
          return { ...task, completed }
        }
        return task
      })
    });
  }

  function deleteTask(id) {
    setTasks(currentTasks => {
      return currentTasks.filter(task => task.id !== id)
    });
  }

  return (
    <div className="container">
      <h1>Tasks</h1>
      <TaskForm setTasks={setTasks} />
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} completed={false} />
      <hr className="task-list-divider" />
      {completedTasks > 0 && (
        <details className="completed-task-accordion">
          <summary><h4>Completed ({completedTasks})</h4></summary>
          <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} completed={true} />
        </details>
      )}
    </div>
  );
}

export default App;
