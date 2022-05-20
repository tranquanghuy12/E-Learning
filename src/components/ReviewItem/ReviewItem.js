import React from 'react'
import './main.scss'
export default function ReviewItem({reviewDetail}) {
  const {name,address,description,img} = reviewDetail
  return (
    <div className='item'>
      <div className="shadow-effect">
        <img src={img} alt="" className='img-circle'/>
        <p className='text__description'>{description}</p>
      </div>
      <div className="testimonial-name">
        <h5>{name}</h5>
        <small>{address}</small>
      </div>
    </div>
  )
}
