import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Category.css'
//for tasks' details (schedule and due date, and more)
const AddCategory = () => {

    function changeTaskRow(): void{
        
    }

    function openModal(): void{
        let dialog: HTMLDialogElement = document.getElementById("dlg") as HTMLDialogElement;
        dialog.showModal();
        dialog.style.display = "flex";
    }   

    function closeModal(): void{
        let dialog: HTMLDialogElement = document.getElementById("dlg") as HTMLDialogElement;
        dialog.close();
        dialog.style.display = "none";
    }

    return (
        <>
            <div className="add__container"  onClick={() => openModal()}>
                <i className="bi bi-plus icon-plus"></i>
            </div>
            <div className='dialog__container'>
                <dialog id="dlg" className="add__task">
                    <form>
                        <label>Category Name </label> <br/>
                        <input type="text" /> <br/>
                        <label>Priority </label> <br/>
                        <select id="priority" name="priority">
                            <option value="URGENT">URGENT</option>
                            <option value="HIGH">HIGH</option>
                            <option value="MEDIUM">MEDIUM</option>
                            <option value="LOW">LOW</option>
                        </select> <br/>
                        <input type="submit"/>
                    </form>
                    <i className="bi bi-x" id="exit" onClick={() => closeModal()}></i>

                </dialog>
            </div>
        </>
    )
}

export default AddCategory
