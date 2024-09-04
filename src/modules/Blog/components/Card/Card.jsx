import React from 'react'
import './card.css'

const Card = ({author, title, img}) => {
  return (
    <div className="card-container">
        <div className="card">
            <img src={img} alt="" className='card-img'/>
            <p className='card-author'>
            {author}
            </p>
        </div>
    <p className="card-title">{title}</p>
</div>
  )
}

export default Card