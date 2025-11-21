import React from 'react'

export default function TaskList({
    tasks,
    handleDlt,
    handleCompleted,
    handleEdit,
}) {
    if (!tasks) return;
    return (
        <div>
            {tasks && tasks?.map((task) => <li
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                key={task?.id}>
                <p>{task?.text}</p>
                <input
                    type='checkbox'
                    checked={task?.completed}
                    onChange={() => handleCompleted(task?.id)}
                    style={{ height: '20px', width: '20px' }}
                />
                <button
                    onClick={() => handleEdit(task?.id, task.text)}
                >Edit</button>

                <button
                    onClick={() => handleDlt(task?.id)}
                >Delete</button>
            </li>)}
        </div>
    )
}
