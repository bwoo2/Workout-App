import { BrowserRouter as Router, Route, Routes, useParams, Link } from 'react-router-dom';
import { Trainer } from './Trainers';

import { GrLocation } from 'react-icons/gr';

import TheRock from '../images/trainers_page/The Rock.jpeg';
import TaraStiles from '../images/trainers_page/Tara Stiles.webp';
import KristenMcGee from '../images/trainers_page/Kristin McGee.jpeg';
import ChloeTing from '../images/trainers_page/Chloe Ting.png';
import UsainBolt from '../images/trainers_page/Usain Bolt.jpg';
import MarianneVos from '../images/trainers_page/Marianne Vos.jpeg';
import AnissaMeksen from '../images/trainers_page/Anissa Meksen.jpeg';
import MichaelPhelps from '../images/trainers_page/Michael Phelps.jpeg';

import Pilates from '../images/classes/Pilates Class.jpeg';
import Yoga from '../images/classes/Yoga Class.webp';
import Running from '../images/classes/Running Class.jpeg';
import HIIT from '../images/classes/HIIT Class.png';
import Cycling from '../images/classes/Cycling Class.jpeg';
import Lifting from '../images/classes/Lifting Class.avif';

import '../style/trainerspage.css';

const trainers = [
    {
        image: KristenMcGee,
        name: "Kristin McGee",
        scheduledClass: true,
        classImage: Pilates,
        specialty: "Pilates Instructor - Peloton Interactive Inc., Dancer",
        facebook: "https://www.facebook.com/KristenMcGee",
        twitter: "https://twitter.com/KristenMcGee",
        instagram: "https://www.instagram.com/KristenMcGee",
        profile: "/trainers/KristinMcGee",
        location: "Bridgehampton, New York",
        intro: "Hello there! I'm Kristin McGee, a certified Pilates instructor with over 15 years of experience in the field. My approach to Pilates is deeply rooted in a mind-body connection. Having originally trained as a dancer, I understand the importance of body awareness and alignment. My classes are a mix of traditional Pilates methods and modern techniques, focusing on building a strong core, improving posture, and gaining functional strength. I love working with clients of all ages and skill levels, so whether you're a complete beginner or a seasoned athlete, I'm confident that we can build a program that's tailored just for you."
    },
    {
        image: TheRock,
        name: "Dwayne Johnson",
        scheduledClass: true,
        classImage: Lifting,
        specialty: "Weight Lifter, Professional Actor, WWE Champion, Film Producer, Businessman",
        facebook: "https://www.facebook.com/DwayneJohnson",
        twitter: "https://twitter.com/DwayneJohnson",
        instagram: "https://www.instagram.com/DwayneJohnson",
        profile: "/trainers/DwayneJohnson",
        location: "Beverly Park, Los Angeles",
        intro: "Can you smelllllll what the Rock is cookin??\n\nHey guys, it's Dwayne 'The Rock' Johnson! I started out as a pro wrestler, moved onto acting, and now I'm here to help you crush your fitness goals. Whether you're looking to bulk up or just get healthier, I bring my same intensity from the ring and the big screen right into your workouts. Let's lift those spirits and some heavy weights!"
    },
    {
        image: TaraStiles,
        name: "Tara Stiles",
        scheduledClass: true,
        classImage: Yoga,
        specialty: "Founder of Strala Yoga - Yoga Instructor, Model",
        facebook: "https://www.facebook.com/TaraStiles",
        twitter: "https://twitter.com/TaraStiles",
        instagram: "https://www.instagram.com/TaraStiles",
        profile: "/trainers/TaraStiles",
        location: "SoHo, New York City",
        intro: "Namaste! My name is Tara, and Yoga has been a part of my life since I was a teenager. With a background in classical dance and choreography, I emphasize fluid transitions and organic, improvised movements in my yoga sessions. My teaching style is relaxed and inclusive, aiming to make everyone feel comfortable, regardless of their yoga experience. Together, we'll find your flow and deepen your connection to your inner self."
    },
    {
        image: UsainBolt,
        name: "Usain Bolt",
        scheduledClass: true,
        classImage: Running,
        specialty: "Sprinter, 8x Olympic Gold Medallist, 11x World Champion",
        facebook: "https://www.facebook.com/UsainBolt",
        twitter: "https://twitter.com/UsainBolt",
        instagram: "https://www.instagram.com/UsainBolt",
        profile: "/trainers/UsainBolt",
        location: "Kingston, Jamaica",
        intro: "Hey, everyone! I'm Usain Bolt, otherwise known as 'Lightning Bolt,' and yes, I’m the world's fastest man. I hold multiple world records and Olympic golds in sprinting, but now my focus is on helping you unlock your potential speed and agility. My sessions are designed to push your limits while emphasizing proper form and technique. Get ready to feel the rush of the wind as you speed past your personal bests!"
    },
    {
        image: MichaelPhelps,
        name: "Michael Phelps",
        specialty: "Swimmer, 28x Olymic Medallist",
        facebook: "https://www.facebook.com/MichaelPhelps",
        twitter: "https://twitter.com/MichaelPhelps",
        instagram: "https://www.instagram.com/MichaelPhelps",
        profile: "/trainers/MichaelPhelps",
        location: "Paradise Valley, Arizona",
        intro: "Hi there! I'm Michael Phelps, an 23-time Olympic gold medalist in swimming. I'm here to share my love for the water with you. My classes are all about mastering the techniques that made me a world champion. Whether you're a beginner trying to learn the basics or an advanced swimmer looking to shave off some seconds, I've got something for you. Dive in and let's make a splash!"
    },
    {
        image: ChloeTing,
        name: "Chloe Ting",
        scheduledClass: true,
        classImage: HIIT,
        specialty: "HIIT Instructor, YouTuber, Model and Fitness Personality",
        facebook: "https://www.facebook.com/ChloeTing",
        twitter: "https://twitter.com/ChloeTing",
        instagram: "https://www.instagram.com/ChloeTing",
        profile: "/trainers/ChloeTing",
        location: "Singapore",
        intro: "Hi guys! It's Chloe Ting here, your online fitness trainer specializing in High-Intensity Interval Training (HIIT). My mission is to make fitness accessible and fun for everyone. I know life gets busy, so my HIIT workouts are designed to be quick, effective, and easy to follow from the comfort of your home. With my guidance, you'll be sweating those calories away and feeling fantastic in no time!"
    },
    {
        image: MarianneVos,
        name: "Marianne Vos",
        scheduledClass: true,
        classImage: Cycling,
        specialty: "Cyclist, World Champion, Olympian Medallist",
        facebook: "https://www.facebook.com/MarianneVos",
        twitter: "https://twitter.com/MarianneVos",
        instagram: "https://www.instagram.com/MarianneVos",
        profile: "/trainers/MarianneVos",
        location: "s-Hertogenbosch, Netherlands",
        intro: "Hello, aspiring riders and cycling enthusiasts! I'm Marianne Vos, a multiple-time World Champion in road racing and cyclo-cross. Cycling isn't just a sport for me; it's a way of life. My sessions will not only improve your cycling skills but also teach you how to appreciate the beauty of the ride. Whether you're training for a race or just love the feeling of the open road, come ride with me!"
    },
    {
        image: AnissaMeksen,
        name: "Anissa Meksen",
        specialty: "MMA Instructor, ISKA/WAKO World K1 Bantamweight Champion",
        facebook: "https://www.facebook.com/AnnisaMeksen",
        twitter: "https://twitter.com/AnnisaMeksen",
        instagram: "https://www.instagram.com/AnnisaMeksen",
        profile: "/trainers/AnnisaMeksen",
        location: "Nancy, France",
        intro: "Greetings warriors! My name is Anissa Meksen, and I'm a world champion Mixed Martial Arts (MMA) fighter. In my sessions, you won't just learn how to throw punches and kicks; you'll also gain the mental fortitude that every fighter needs. I cater to all levels, from beginners to advanced fighters, focusing on technique, strategy, and building a fighting spirit. Let's step into the ring and awaken the champion within you!"
    }
];
  
const TrainerPage = () => {
    const { name } = useParams();
    const trainerName = name.replace('_', ' ');
    const trainer = trainers.find(t => t.name === trainerName);

    if (!trainer) return <div style={{ textAlign: "center" }}><h1>Trainer not found</h1></div>;

    return (
        <div className='trainer_container'>
            <div className='heading'>
                <img src={trainer.image} alt={trainer.name} className='individual_trainer_image' />
                <div className='social_links'>
                    <a href={trainer.facebook} className="icon-button facebook"><i className="fab fa-facebook"></i><span></span></a>
                    <a href={trainer.twitter} className="icon-button twitter"><i className="fab fa-twitter"></i><span></span></a>
                    <a href={trainer.instagram} className="icon-button instagram"><i className="fab fa-instagram"></i><span></span></a>
                </div>
                <div className="text_content">
                    <div className='username_container'>
                        <h2>{trainer.username}</h2>
                    </div>
                    <div className='trainer_info'>
                        <h2>{trainer.name}</h2>
                        <p className='trainer-specialty'>{trainer.specialty}</p>
                        <p><GrLocation /> {trainer.location}</p>
                        <button className='follow-button'>Write a Review</button>
                    </div>
                </div>
            </div>

            <div className='info_container'>
                <div className='bio'>
                    <h3>Biography</h3>
                    <p style={{ whiteSpace: 'pre-line' }}>
                        {trainer.intro}
                    </p>
                </div>
                {trainer.scheduledClass && (
                <div className='class-info'>
                    <img className="trainer_img" src={trainer.classImage} alt="" />
                    <div className="trainer_overlay"></div>
                    <div className="trainer_button"><a href="#"> CLASSES </a></div>
                </div>
                )}
            </div>

            <div className='reviews'>
                <h3>Reviews</h3>
            </div>
        </div>
    );
};

  
const TrainersPage = () => {
    return (
    <Routes>
        <Route path="/" element={
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
            }/>
        <Route path=":name" element={<TrainerPage />} />
    </Routes>
    );
};
  
export default TrainersPage;
  