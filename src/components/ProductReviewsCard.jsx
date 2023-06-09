import React from 'react'
import '../styles/ProductReviewsCard.css';

const ProductReviewsCard = ({price,name,image,review,index}) => {
  return (
    <div className='ProductReviewCard'>
        <img src={image} alt="" />
        <h5>{review}</h5>
        <span>{name}</span>
        <b>{price}</b>
    </div>
  )
}

export default ProductReviewsCard;