import React from 'react';
import '../css/Task.css'

const Task: any = ({ task }: { task: any }) => {
    
    return (
        <>
            <div className="task__header">
                {task.title}
            </div>
            <div className='task__container'>
                <div className="task__title">{task.title}</div>
                <div className="task__title">{task.title}</div>
                <div className="task__title">{task.title}</div>
                <div className="task__title">{task.title}</div>
                <div className="task__title">{task.title}</div>

            </div>
        </>
    )
}

export default Task