import React from 'react'
import "../styles/Line.css"

const Line = ({text}) => {
  return (
    <div className='linediv'>
    <div></div>
    <p>{text}</p>
    <div></div>
    </div>
  )
}

export default Line;