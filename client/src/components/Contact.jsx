import React from 'react';
import '../style/contact.css';

import TrainerHead from '../images/trainers/Ropes.png';

function Contact() {
  return (
    <div className='contact_container'>
      <div className='image_head_container'>
        <img src={TrainerHead} alt="" className='trainer_head'/>
      </div>
      <h1>Contact</h1>
    </div>
  )
}

export default Contact