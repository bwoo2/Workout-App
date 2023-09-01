import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/classes/pilates" className="profile">
              <h2 className="profile__name">Pilates</h2>
              <p>Kristen McGee</p>
              <img alt="Pilates" src={Pilates} />
            </Link>
          </li>
          <li>
            <Link to="/classes/yoga" className="profile">
              <h2 className="profile__name">Yoga</h2>
              <p>Tara Stiles</p>
              <img alt="Yoga" src={Yoga} />
            </Link>
          </li>
          <li>
            <Link to="/classes/running" className="profile">
              <h2 className="profile__name">Running</h2>
              <p>Usain Bolt</p>
              <img alt="Running" src={Running} />
            </Link>
          </li>
          <li>
            <Link to="/classes/HIIT" className="profile">
              <h2 className="profile__name">HIIT</h2>
              <p>Chloe Ting</p>
              <img alt="HIIT" src={HIIT} />
            </Link>
          </li>
          <li>
            <Link to="/classes/cycling" className="profile">
              <h2 className="profile__name">Cycling</h2>
              <p>Marianne Vos</p>
              <img alt="Cycling" src={Cycling} />
            </Link>
          </li>
          <li>
            <Link to="/classes/weights" className="profile">
              <h2 className="profile__name">Weight Lifting</h2>
              <p>Dwayne Johnson</p>
              <img alt="Weight Lifting" src={Lifting} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Classes;
