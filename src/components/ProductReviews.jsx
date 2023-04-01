import React from 'react'
import ProductReviewsCard from './ProductReviewsCard';
import '../styles/productReviews.css';

const ProductReviews = ({ProductReviews}) => {
  return (
    <div className='productReviews'>
    {ProductReviews.map((item, index)=>(
        <ProductReviewsCard name={item.name} price={item.price} image={item.image} review={item.review} index={item.index} key={item.image} />
    ))}
    </div>
  )
}

export default ProductReviews;