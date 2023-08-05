import React from 'react';
import '../style/classes.css';

import TrainerHead from '../images/trainers/Ropes.png';
import Pilates from '../images/classes/Pilates Class.jpeg';
import Yoga from '../images/classes/Yoga Class.webp';
import Running from '../images/classes/Running Class.jpeg';
import HIIT from '../images/classes/HIIT Class.png';
import Cycling from '../images/classes/Cycling Class.jpeg';
import Lifting from '../images/classes/Lifting Class.avif';

function Classes() {
  return (
    <div className='classes_container'>
      <div className='image_head_container'>
        <img src={TrainerHead} alt="" className='trainer_head'/>
      </div>
      <h1>Classes</h1>
      <div className="team">
        <ul className="auto-grid" role="list">
          <li>
            <a href="" className="profile">
              <h2 className="profile__name">Pilates</h2>
              <p>Kristen McGee</p>
              <img alt="Pilates" src={Pilates} />
            </a>
          </li>
          <li>
            <a href={Pilates} className="profile">
              <h2 className="profile__name">Yoga</h2>
              <p>Tara Stiles</p>
              <img alt="Yoga" src={Yoga} />
            </a>
          </li>
          <li>
            <a href="" className="profile">
              <h2 className="profile__name">Running</h2>
              <p>Usain Bolt</p>
              <img alt="Running" src={Running} />
            </a>
          </li>
          <li>
            <a href="" className="profile">
              <h2 className="profile__name">HIIT</h2>
              <p>Chloe Ting</p>
              <img alt="HIIT" src={HIIT} />
            </a>
          </li>
          <li>
            <a href="" className="profile">
              <h2 className="profile__name">Cycling</h2>
              <p>Marianne Vos</p>
              <img alt="Cycling" src={Cycling} />
            </a>
          </li>
          <li>
            <a href="" className="profile">
              <h2 className="profile__name">Weight Lifting</h2>
              <p>Dwayne Johnson</p>
              <img alt="Weight Lifting" src={Lifting} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Classes;
