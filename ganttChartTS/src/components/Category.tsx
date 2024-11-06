import React from 'react'
import { Link } from 'react-router-dom'
import '../css/testC.css'

const Category = ({ categoryName }: { categoryName: any }) => {
    return (
        // <Link to={`/categoryName`} className="contact__item">
        //     <div className="contact__header">
        //         <div className="contact__image">
        //             <img src={categoryName.photoUrl} alt={categoryName.name} />
        //         </div>
        //         <div className="contact__details">
        //             <p className="contact_name">name </p>
        //             <p className="contact_title">{categoryName.title}</p>
        //         </div>
        //     </div>
        //     <div className="contact__body">
        //         <p><i className="bi bi-envelope"></i> {categoryName.email.substring(0, 20)} </p>
        //         <p><i className="bi bi-geo"></i> {categoryName.address}</p>
        //         <p><i className="bi bi-telephone"></i> {categoryName.phone}</p>
        //         <p>{categoryName.status === 'Active' ? <i className='bi bi-check-circle'></i> :
        //             <i className='bi bi-x-circle'></i>} {categoryName.status}</p>
        //     </div>
        // </Link>

        // <Link to={`${categoryName.name}`} className='category_item'>
        //     <div className='category__header'>
        //         <div className='category__image'>
        //             <img src={"vite.svg"} alt={categoryName.name} />
        //         </div>
        //         <div className='category__details'>
        //             <p className="contact_name">{categoryName.name}</p>
        //             <p className="contact_title">{categoryName.type}</p>
        //         </div>
                
        //     </div>
        // </Link>
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