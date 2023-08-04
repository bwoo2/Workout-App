import React from 'react';
import { Link } from 'react-router-dom';

import TheRock from '../images/trainers/The_Rock-transformed.png';
import TaraStiles from '../images/trainers/Tara_Stiles-transformed.png';
import KristenMcGee from '../images/trainers/Kristin_McGee-transformed.png';
import ChloeTing from '../images/trainers/Chloe Ting.png';
import UsainBolt from '../images/trainers/Usain Bolt.png';
import MarianneVos from '../images/trainers/Marianne Vos.png';
import AnissaMeksen from '../images/trainers/AnissaMeksen.png';
import MichaelPhelps from '../images/trainers/Michael Phelps.png';

import '../style/trainers.css';

const trainers = [
  {
    image: KristenMcGee,
    name: "Kristen McGee",
    specialty: "Pilates",
    facebook: "https://www.facebook.com/KristenMcGee",
    twitter: "https://twitter.com/KristenMcGee",
    instagram: "https://www.instagram.com/KristenMcGee",
    profile: "/trainers/KristenMcGee"
  },
  {
    image: TheRock,
    name: "Dwayne Johnson",
    specialty: "Weight Lifter",
    facebook: "https://www.facebook.com/DwayneJohnson",
    twitter: "https://twitter.com/DwayneJohnson",
    instagram: "https://www.instagram.com/DwayneJohnson",
    profile: "/trainers/DwayneJohnson"
  },
  {
    image: TaraStiles,
    name: "Tara Stiles",
    specialty: "Yoga",
    facebook: "https://www.facebook.com/TaraStiles",
    twitter: "https://twitter.com/TaraStiles",
    instagram: "https://www.instagram.com/TaraStiles",
    profile: "/trainers/TaraStiles"
  },
  {
    image: UsainBolt,
    name: "Usain Bolt",
    specialty: "Runner",
    facebook: "https://www.facebook.com/UsainBolt",
    twitter: "https://twitter.com/UsainBolt",
    instagram: "https://www.instagram.com/UsainBolt",
    profile: "/trainers/UsainBolt"
  },
  {
    image: MichaelPhelps,
    name: "Michael Phelps",
    specialty: "Swimmer",
    facebook: "https://www.facebook.com/MichaelPhelps",
    twitter: "https://twitter.com/MichaelPhelps",
    instagram: "https://www.instagram.com/MichaelPhelps",
    profile: "/trainers/MichaelPhelps"
  },
  {
    image: ChloeTing,
    name: "Chloe Ting",
    specialty: "HIIT",
    facebook: "https://www.facebook.com/ChloeTing",
    twitter: "https://twitter.com/ChloeTing",
    instagram: "https://www.instagram.com/ChloeTing",
    profile: "/trainers/ChloeTing"
  },
  {
    image: MarianneVos,
    name: "Marianne Vos",
    specialty: "Cyclist",
    facebook: "https://www.facebook.com/MarianneVos",
    twitter: "https://twitter.com/MarianneVos",
    instagram: "https://www.instagram.com/MarianneVos",
    profile: "/trainers/MarianneVos"
  },
  {
    image: AnissaMeksen,
    name: "Anissa Meksen",
    specialty: "MMA",
    facebook: "https://www.facebook.com/AnnisaMeksen",
    twitter: "https://twitter.com/AnnisaMeksen",
    instagram: "https://www.instagram.com/AnnisaMeksen",
    profile: "/trainers/AnnisaMeksen"
  }
];

export const Trainer = ({image, name, specialty, facebook, twitter, instagram}) => {
  const trainerName = name.replace(' ', '_');

  return (
    <div className='box_trainers'>
      <Link to={`/trainers/${trainerName}`}>
        <img src={image} alt="" className='trainer_image' />
      </Link>
      <Link to={`/trainers/${trainerName}`}>
        <h2 className='h2_name'>{name}</h2>
      </Link>
      <p className='p_desc'>{specialty}</p>
      <a href={facebook} class="icon-button facebook"><i class="fab fa-facebook"></i><span></span></a>
      <a href={twitter} class="icon-button twitter"><i class="fab fa-twitter"></i><span></span></a>
      <a href={instagram} class="icon-button instagram"><i class="fab fa-instagram"></i><span></span></a>
      <hr />
    </div>
  );
};

const App = () => {

  return (
    <div className='trainers_container'>
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
