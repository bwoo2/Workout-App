import React from 'react';
import '../style/blog.css';

import TrainerHead from '../images/trainers/Ropes.png';

function Blog() {
  return (
    <div className='blog_container'>
      <div className='image_head_container'>
        <img src={TrainerHead} alt="" className='trainer_head'/>
      </div>
      <h1>Blogs</h1>
    </div>
  )
}

export default Blog