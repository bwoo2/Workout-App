import React from 'react';
import { Link } from 'react-router-dom';

import TrainerHead from '../images/trainers/Ropes.png';
import TheRock from '../images/trainers/The Rock.png';
import TaraStiles from '../images/trainers/Tara Stiles.png';
import KristenMcGee from '../images/trainers/Kristin McGee.png';
import ChloeTing from '../images/trainers/Chloe Ting.png';
import UsainBolt from '../images/trainers/Usain Bolt.png';
import MarianneVos from '../images/trainers/Marianne Vos.png';
import AnissaMeksen from '../images/trainers/Anissa Meksen.png';
import MichaelPhelps from '../images/trainers/Michael Phelps.png';

import '../style/trainers.css';

const trainers = [
  {
    image: KristenMcGee,
    name: "Kristen McGee",
    specialty: "Pilates",
    profile: "/trainers/KristenMcGee"
  },
  {
    image: TheRock,
    name: "Dwayne Johnson",
    specialty: "Weight Lifter",
    profile: "/trainers/DwayneJohnson"
  },
  {
    image: TaraStiles,
    name: "Tara Stiles",
    specialty: "Yoga",
    profile: "/trainers/TaraStiles"
  },
  {
    image: UsainBolt,
    name: "Usain Bolt",
    specialty: "Runner",
    profile: "/trainers/UsainBolt"
  },
  {
    image: ChloeTing,
    name: "Chloe Ting",
    specialty: "HIIT",
    profile: "/trainers/ChloeTing"
  },
  {
    image: MichaelPhelps,
    name: "Michael Phelps",
    specialty: "Swimmer",
    profile: "/trainers/MichaelPhelps"
  },
  {
    image: MarianneVos,
    name: "Marianne Vos",
    specialty: "Cyclist",
    profile: "/trainers/MarianneVos"
  },
  {
    image: AnissaMeksen,
    name: "Anissa Meksen",
    specialty: "MMA",
    profile: "/trainers/AnnisaMeksen"
  }
];

export const Trainer = ({image, name, specialty}) => {
  const trainerName = name.replace(' ', ' ');

  return (
    <div className='box_trainers'>
      <Link to={`/trainers/${trainerName}`}>
        <img src={image} alt="" className='trainer_image_page' />
      </Link>
      <Link to={`/trainers/${trainerName}`} className='trainer-name-link'>
        <h2 className='h2_name'>{name}</h2>
      </Link>
      <p className='p_desc'>{specialty}</p>
      <hr />
    </div>
  );
};

const App = () => {

  return (
    <div className='trainers_container'>
      <div className='image_head_container'>
        <img src={TrainerHead} alt="" className='trainer_head'/>
      </div>
      <h1>Personal Trainers</h1>
      <h2>Experience the Expertise of Our Certified Fitness Trainers</h2>
      <p>Align your fitness journey with our trainers' specialties for the most effective guidance.</p>
      <div className='trainers'>
        <div className='content_container_trainers'>
          <div className='box_container_trainers'>
            {trainers.map((trainer, index) => (
              <Trainer key={index} {...trainer} />
            ))}
          </div>       
        </div>
      </div>
    </div>
  );
};

export default App;
