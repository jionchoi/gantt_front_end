
import React from 'react'
import { Link } from 'react-router-dom'

//for tasks' details (schedule and due date, and more)
const CategoryDetail = ({ categoryName } : {categoryName: any}) => {
    

    return (
        <>
            <Link to={`/${categoryName.name}`} className="contact__item"> {/* this categoryName should be the name of the category */}
                <div className="contact__header">
                    <div className="contact__image">
                        <img src={categoryName.photoUrl} alt={categoryName.name} />
                    </div>
                    <div className="contact__details">
                        <p className="contact_name">name </p>
                        <p className="contact_title">{categoryName.title}</p>
                    </div>
                </div>
                <div className="contact__body">
                    <p><i className="bi bi-envelope"></i> {categoryName.email.substring(0, 20)} </p>
                    <p><i className="bi bi-geo"></i> {categoryName.address}</p>
                    <p><i className="bi bi-telephone"></i> {categoryName.phone}</p>
                    <p>{categoryName.status === 'Active' ? <i className='bi bi-check-circle'></i> :
                        <i className='bi bi-x-circle'></i>} {categoryName.status}</p>
                </div>
            </Link>
        </>
    )
}

export default CategoryDetail
