import React from 'react'
import { Link } from 'react-router-dom'
import '../css/testC.css'
//for tasks' details (schedule and due date, and more)
const AddCategory = () => {

    function changeTaskRow(): void{
        
    }

    function openModal(): void{
        document.getElementsByClassName("add__task")[0].showModal();
    }   

    function closeModal(): void{

    }

    return (
        <>
            <div className="add__container" onClick={() => openModal()}>
                <i className="bi bi-plus icon-plus"></i>
            </div>
            <dialog className="add__task">

            </dialog>
        </>
    )
}

export default AddCategory
