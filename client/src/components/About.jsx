import React from 'react';
import '../style/about.css';

import TrainerHead from '../images/trainers/Ropes.png';

function About() {
  return (
    <div className='about_us_container'>
      <div className='image_head_container'>
        <img src={TrainerHead} alt="" className='trainer_head'/>
      </div>
      <h1>About us</h1>
    </div>
  )
}

export default About