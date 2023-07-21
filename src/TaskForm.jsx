import { useState } from "react";

export function TaskForm({ setTasks }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem.length < 1) return;
    setTasks(currentTasks => {
      return [
        ...currentTasks,
        { id: crypto.randomUUID(), title: newItem, completed: false }
      ]
    });
    setNewItem('');
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input className="task-input" type="text" id="item" placeholder="Add a task" value={newItem} onChange={e => setNewItem(e.target.value)} />
      <button className="btn btn-add">Add</button>
    </form>
  )
}