import React from 'react';
import '../css/Task.css'

const Task: any = ({ task }: { task: any }) => {
        console.log(task.startDate);
        let day: number = task.startDate.getDate();
        console.log(day)

    
        function check(){
            let dialog: HTMLDialogElement = document.getElementById("dlg") as HTMLDialogElement;
            
        }

    return (
        <>
            <div className="task__header">
                {task.title}
            
            <div className='task__container'>
                <div className="task__title">{task.title} | 
                    <button className="dayButton" onClick = {() => check()}>{day}</button> 
                    <button className="dayButton">{day}</button> 
                    <button className="dayButton">{day}</button> 
                    <button className="dayButton">{day}</button> 
                    <button className="dayButton">{day}</button> 
                    <button className="dayButton">{day}</button> 
                    <button className="dayButton">{day}</button> 
                    <button className="dayButton">{day}</button> 
                    <button className="dayButton">{day}</button> 
                    <button className="dayButton">{day}</button> 
                    <button className="dayButton">{day}</button> 
                    <button className="dayButton">{day}</button> 
                    <button className="dayButton">{day}</button> 
                    <button className="dayButton">{day}</button>  
                    <button className="dayButton">{day}</button> 
                    <button className="dayButton">{day}</button> 
                    <button className="dayButton">{day}</button> 
                    <button className="dayButton">{day}</button> 
                    <button className="dayButton">{day}</button> 
                    <button className="dayButton">{day}</button>  
                    <button className="dayButton">{day}</button> 
                    <button className="dayButton">{day}</button> 
                    <button className="dayButton">{day}</button> 
                    <button className="dayButton">{day}</button> 
                    <button className="dayButton">{day}</button> 
                    <button className="dayButton">{day}</button>  
                    <button className="dayButton">{day}</button> 
                    <button className="dayButton">{day}</button> 
                    <button className="dayButton">{day}</button> 
                    <button className="dayButton">{day}</button> 
                    <button className="dayButton">{day}</button> 
                    <button className="dayButton">{day}</button>  
                    <button className="dayButton">{day}</button> 
                    <button className="dayButton">{day}</button> 
                    <button className="dayButton">{day}</button> 
                    <button className="dayButton">{day}</button> 
                    <button className="dayButton">{day}</button> 
                </div>
               
            </div>
            </div>
        </>
    )
}

export default Task