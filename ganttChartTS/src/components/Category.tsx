import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Category.css'

const Category: any = ({ categoryName }: { categoryName: any }) => {
    return (
        <Link to={`${categoryName.name}`} className="category__container">
            <div className="category__container">
                <img src="/public/pop_cat.jpg" alt="category.name"/>
                <p className="category__title">Category</p>
                <div className="category__header123">
                    <p>type</p>
                    <p>Last Modified</p>
                    <p>priority</p>
                </div>
            </div>
        </Link>
    )
}

export default Category