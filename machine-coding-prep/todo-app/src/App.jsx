import { useEffect, useState, useRef } from "react"
import InputBox from "./components/InputBox";
import TaskFrom from "./components/TaskFrom";
import TaskList from "./components/TaskList";
import './index.css'

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks')
    return saved ? JSON.parse(saved) : []
  });
  const [text, setText] = useState('')
  const [editId, setEditId] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    if (tasks.some(t => t.text === text.trim() && t.id !== editId)) {
      alert("Task already exists!");
      return;
    }

    if (editId !== null) {
      setTasks((prev) =>
        prev.map(task => task.id === editId ? { ...task, text: text } : task)
      )
      setEditId(null);
      setText('');
    } else {
      const newTask = { id: Date.now(), text, completed: false };
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      setText('');
    }
  }

  const handleCompleted = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task?.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const handleDlt = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id)
    setTasks(updatedTasks)
  }

  const handleEdit = (id, text) => {
    setText(text)
    setEditId(id)
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  return (
    <div className="wrapper">
      <div>
        <TaskFrom
          handleSubmit={handleSubmit}
          text={text}
          setText={setText}
        />
        <TaskList
          tasks={tasks}
          handleDlt={handleDlt}
          handleCompleted={handleCompleted}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  )
}
