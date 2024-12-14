import React from 'react';
import '../css/Task.css'

const TaskList: any = ({ task }: { task: any }) => {
    
    return (
        <>
            <div className="task__header">
                {task.title}
                
            </div>
            <div className='task__container'>
                
            </div>
        </>
    )
}

export default TaskList