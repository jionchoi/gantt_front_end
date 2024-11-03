import React from 'react'
import { Link } from 'react-router-dom'
import '../css/testC.css'
//for tasks' details (schedule and due date, and more)
const AddCategory = () => {
    

    return (
        <>
            <div className="category__container">
                <img src="/public/pop_cat.jpg" alt="category.name"/>
                <p className="category__title">Category</p>
                <div className="category__header123">
                    <p>type</p>
                    <p>Last Modified</p>
                    <p>priority</p>
                </div>
            </div>
        </>
    )
}

export default AddCategory
