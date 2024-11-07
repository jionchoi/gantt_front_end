import React from 'react';
import '../css/Task.css'
/* TO-DO 
    1. make it auto save
    2. Add task button on the very bottom        
*/

const Task: any = ({ task }: { task: any}) => {
    return (
        <div className='task__container'>
            <div className="task__header">
                {task.title}
            </div>
            <div className="task__something">
                
            </div>
        </div>
    )
}

export default Task