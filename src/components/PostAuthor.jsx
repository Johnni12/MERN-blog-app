import React from 'react'
import { Link } from 'react-router-dom'
import Avater from '../images/avatar1.jpg'

const PostAuthor = () => {
  return (
    <Link>
    <div className="post__author-avater">
     <img src={Avater} alt="" />
    </div>
    <div className="post__author-details">
     <h5>By: Kalu John</h5>
     <small>Just Now</small>
    </div>
    </Link>
  )
}

export default PostAuthor