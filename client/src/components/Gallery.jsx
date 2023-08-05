import React from 'react';
import '../style/gallery.css';

import TrainerHead from '../images/trainers/Ropes.png';
import GymDumbells from '../images/gallery/Gym Dumbells.png';
import GymPhoto from '../images/gallery/Gym Photo.png';
import WomanCycling from '../images/gallery/WomanCycling.png';
import BuffPushUps from '../images/gallery/Buff Pushups.png';
import Boxing from '../images/gallery/Boxing.png';
import CyclingClass from '../images/gallery/Cycling Class.png';
import PeopleYoga from '../images/gallery/People Yoga.png';

function Gallery() {

  const imageData = [
    { src: GymDumbells, title: "Gym Dumbells", description: "Description for Gym Dumbells" },
    { src: Boxing, title: "Boxing", description: "Description for Boxing" },
    { src: CyclingClass, title: "Cycling Class", description: "Description for Cycling Class" },
    { src: PeopleYoga, title: "People Yoga", description: "Description for People Yoga" },
    { src: WomanCycling, title: "Woman Cycling", description: "Description for Woman Cycling" },
    { src: GymPhoto, title: "Gym Photo", description: "Description for Gym Photo" },
    { src: BuffPushUps, title: "Buff Pushups", description: "Description for Buff Pushups" }
  ];

  return (
    <div className='gallery_container'>
      <div className='image_head_container'>
        <img src={TrainerHead} alt="Trainer Head" className='trainer_head'/>
      </div>
      <h1>Gallery</h1>
      <div className="wrap">
        {imageData.map((data, index) => 
          <div key={index} className="tile"> 
            <img src={data.src} alt={data.title} />
            {/* <div className="text">
              <h2 className="animate-text">{data.title}</h2>
              <p className="animate-text">{data.description}</p>
            </div> */}
          </div>
        )}
      </div>
    </div>
  )
}

export default Gallery;
