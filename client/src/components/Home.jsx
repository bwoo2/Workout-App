import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import DEADLIFT from '../images/home_page/deadlift.webp';
import Progress from '../images/home_page/Progress.png';
import Workout from '../images/home_page/Workout.png';
import CheckList from '../images/home_page/CheckList.png';
import WomanWorkingOut from '../images/home_page/woman working out.avif';
import Trainers from '../images/home_page/Trainers.png';
import GymEquipment from '../images/home_page/ModernEquipment.png';
import FancyGyms from '../images/home_page/FancyGyms.png';

import ChrisEvans from '../images/testimonials/Chris_Evans-transformed.png';
import RDJ from '../images/testimonials/RDJ.jpeg';

import TheRock from '../images/trainers/The_Rock-transformed.png';
import TaraStiles from '../images/trainers/Tara_Stiles-transformed.png';
import KristenMcGee from '../images/trainers/Kristin_McGee-transformed.png';
import UsainBolt from '../images/trainers/Usain Bolt.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/home.css';

const Home = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    const testimonials = [
        {
            image: ChrisEvans,
            quote: "Powerlifting is all about sheer determination, discipline, and pushing your limits - something I'm no stranger to. FitMe's structured and customized routines have helped me reach new heights in my powerlifting journey. Their focus on form and technique, while maintaining the spirit of strength, is what sets them apart.",
            name: "Steve Rogers",
            position: "The First Avenger"
        },
        {
            image: RDJ,
            quote: "When it comes to weightlifting, it's all about precision, strategy, and technology - and that's why I chose FitMe. They incorporate the latest technology and research to optimize every lift. They've made my workouts more efficient and effective, and that's the kind of genius I can get behind.",
            name: "Tony Stark",
            position: "Genius, Billionaire, Playboy, Philanthropist"
        }
    ];
    
    const navigate = useNavigate();
    const goToGallery = () => {
        navigate('/gallery');
    }
    const goToPurchase = () => {
        navigate('/pricing')
    }

    const [height, setHeight] = useState(180);
    const [weight, setWeight] = useState(80);
    const [age, setAge] = useState(25);
    const [walking, setWalking] = useState(2);
    const [cardio, setCardio] = useState(1);
    const [gender, setGender] = useState("male");

    const [results, setResults] = useState({
        targetGainWeight: 2700,
        targetMaintain: 2400,
        targetLoseWeight: 1900,
    });

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        switch (id) {
            case "calc-height":
                setHeight(Number(value));
                break;
            case "calc-weight":
                setWeight(Number(value));
                break;
            case "calc-age":
                setAge(Number(value));
                break;
            case "calc-cardio":
                setCardio(Number(value));
                break;
            case "calc-walking":
                setWalking(Number(value));
                break;
            case "calc-gender-male":
                setGender('male');
                break;
            case "calc-gender-female":
                setGender('female');
                break;
        }
    };

    useEffect(() => {
        const bmr = parseInt(10 * weight + 6.25 * height - 5 * age, 10) + (gender === "male" ? 5 : -161);
        const bmrWithActivity = bmr * 1.2 + walking * 60 * (.03 * weight * 1 / 0.45) / 7 + cardio * 60 * (.07 * weight * 1 / 0.45) / 7;
        const targetGainWeight = Math.round((bmrWithActivity + 300) / 100) * 100;
        const targetMaintain = Math.round((bmrWithActivity) / 100) * 100;
        const targetLoseWeight = Math.round((bmrWithActivity - 500) / 100) * 100;

        setResults({
            targetGainWeight,
            targetMaintain,
            targetLoseWeight,
        });
    }, [height, weight, age, walking, cardio, gender]);

    return (
        <div>
            <img src={DEADLIFT} alt="deadlift" className='man__deadlift' />
            <div className='intro_title'>
                <p className='bold'>SCULPT YOUR BODY</p>
                <p>FIT & PERFECT</p>
            </div>

            <div className='home__container'>
                <div className='content_container'>
                    <div className='box_container'>
                        <div className='box'>
                            <img src={Progress} alt="" className='home_image'/>
                            <h2>PROGRESSION</h2>
                            <p>Our team of experts are dedicated to help you achieve your fitness goals and motivate you no matter what path you choose</p>
                        </div>

                        <div className='box'>
                            <img src={Workout} alt="" className='home_image'/>
                            <h2>WORKOUT</h2>
                            <p>With a variety of workouts to choose from or have one designed for you from our experts, you'll have everything you need to get in the best shape of your life</p>
                        </div>
                            
                        <div className='box'>
                            <img src={CheckList} alt="" className='home_image' />
                            <h2>NUTRITION</h2>
                            <p>Our team will work with you to design a meal prep with you to satisfy your health goals</p>
                        </div>
                    </div>       
                </div>
            </div>

            <div className='home_descriptions'>
                <div className='who_are_we'>
                    <div className='content'>
                        <div className='text'>
                            <h2>Who are we?</h2>
                            <p>We are a dedicated team of fitness enthusiasts, committed to supporting and guiding you throughout your fitness journey.</p>
                            <div className='image_container'>
                                <div className="image_text_wrapper">
                                    <img src={Trainers} alt="Image1" className='who_we_are_image' />
                                    <p>Professional Trainers</p>
                                </div>
                                <div className="image_text_wrapper">
                                    <img src={GymEquipment} alt="Image2" className='who_we_are_image' />
                                    <p>Modern Equipment</p>
                                </div>
                                <div className="image_text_wrapper">
                                    <img src={FancyGyms} alt="Image3" className='who_we_are_image' />
                                    <p>Fancy Facilities</p>
                                </div>
                            </div>
                            <button className='tour_button' onClick={goToGallery}>Take a Tour</button>
                        </div>
                        <img src={WomanWorkingOut} alt="deadlift" className='woman_workingout' />
                    </div>
                </div>

                <div className='trainers'>
                    <h2 className='h2_name'>Team of Expert Trainers</h2>
                    <p className='p_desc'>Expert team of coaches helps you succeed in any goal,</p>
                    <p className='p_desc'>personalized guidance and motivation provided!</p>
                    <div className='content_container_trainers'>
                        <div className='box_container_trainers'>
                            <div className='box_trainers'>
                                <img src={KristenMcGee} alt="" className='trainer_image' />
                                <h2 className='h2_name'>Kristen McGee</h2>
                                <p className='p_desc'>Pilates</p>
                                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                                <a href="https://www.facebook.com/vikram.paul.mon.007" class="icon-button facebook"><i class="fab fa-facebook"></i><span></span></a>
                                <a href="https://twitter.com/worldofvicky007" class="icon-button twitter"><i class="fab fa-twitter"></i><span></span></a>
                                <a href="https://www.instagram.com/worldofvicky007/" class="icon-button instagram"><i class="fab fa-instagram"></i><span></span></a>
                                <hr />
                            </div>

                            <div className='box_trainers'>
                                <img src={TheRock} alt="" className='trainer_image' />
                                <h2 className='h2_name'>Dwayne Johnson</h2>
                                <p className='p_desc'>Weight Lifter</p>
                                <a href="https://www.facebook.com/vikram.paul.mon.007" class="icon-button facebook"><i class="fab fa-facebook"></i><span></span></a>
                                <a href="https://twitter.com/worldofvicky007" class="icon-button twitter"><i class="fab fa-twitter"></i><span></span></a>
                                <a href="https://www.instagram.com/worldofvicky007/" class="icon-button instagram"><i class="fab fa-instagram"></i><span></span></a>
                                <hr />
                            </div>
                                
                            <div className='box_trainers'>
                                <img src={TaraStiles} alt="" className='trainer_image' />
                                <h2 className='h2_name'>Tara Stiles</h2>
                                <p className='p_desc'>Yoga</p>
                                <a href="https://www.facebook.com/vikram.paul.mon.007" class="icon-button facebook"><i class="fab fa-facebook"></i><span></span></a>
                                <a href="https://twitter.com/worldofvicky007" class="icon-button twitter"><i class="fab fa-twitter"></i><span></span></a>
                                <a href="https://www.instagram.com/worldofvicky007/" class="icon-button instagram"><i class="fab fa-instagram"></i><span></span></a>
                                <hr />
                            </div>

                            <div className='box_trainers'>
                                <img src={UsainBolt} alt="deadlift" className='trainer_image' />
                                <h2 className='h2_name'>Usain Bolt</h2>
                                <p className='p_desc'>Runner</p>
                                <a href="https://www.facebook.com/vikram.paul.mon.007" class="icon-button facebook"><i class="fab fa-facebook"></i><span></span></a>
                                <a href="https://twitter.com/worldofvicky007" class="icon-button twitter"><i class="fab fa-twitter"></i><span></span></a>
                                <a href="https://www.instagram.com/worldofvicky007/" class="icon-button instagram"><i class="fab fa-instagram"></i><span></span></a>
                                <hr />
                            </div>
                        </div>       
                    </div>
                </div>

                <div>
                    <h1>Calorie Calculator</h1>
                    <div id="bmr-calculator" className="wrapper">
                        <div className="calculator">
                            <div className="choose-gender">
                                <div className="segmented-control">
                                    <input id="calc-gender-male" type="radio" name="gender" value="male" checked={gender === "male"} onChange={handleInputChange} />
                                    <label htmlFor="calc-gender-male">Male</label>
                                </div>
                                <div className="segmented-control">
                                    <input id="calc-gender-female" type="radio" name="gender" value="female" checked={gender === "female"} onChange={handleInputChange} />
                                    <label htmlFor="calc-gender-female">Female</label>
                                </div>
                            </div>
                            <label htmlFor="calc-age" id="calc-age_value">Age: {age}</label>
                            <input id="calc-age" type="range" value={age} min="13" max="100" onChange={handleInputChange} />
                            <label htmlFor="calc-height" id="calc-height_value">Height: {height}cm</label>
                            <input id="calc-height" type="range" value={height} min="80" max="250" onChange={handleInputChange} />
                            <label htmlFor="calc-weight" id="calc-weight_value">Weight: {weight}kg</label>
                            <input id="calc-weight" type="range" value={weight} min="40" max="200" onChange={handleInputChange} />
                            <label htmlFor="calc-walking" id="calc-walking_value">Walking: {walking} hours per week</label>
                            <input id="calc-walking" type="range" value={walking} min="0" max="50" onChange={handleInputChange} />
                            <label htmlFor="calc-cardio" id="calc-cardio_value">Cardio: {cardio} hours per week</label>
                            <input id="calc-cardio" type="range" value={cardio} min="0" max="50" onChange={handleInputChange} />
                        </div>
                        <div className="results">
                            <div id="calc-target-gain">
                                To Gain Weight:<br />
                                <span>{results.targetGainWeight} calories</span>
                            </div>
                            <div id="calc-target-maintain">
                                To Maintain:<br />
                                <span>{results.targetMaintain} calories</span>
                            </div>
                            <div id="calc-target-lose">
                                To Lose Weight:<br />
                                <span>{results.targetLoseWeight} calories</span>
                            </div>
                        </div>
                    </div>            
                </div>

                <div className='testimonials'>
                    <h2 className="testimonial_header">Testimonials</h2>
                    <Slider {...settings}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className='testimonial_slide'>
                                <div className='testimonial_content'>
                                    <img src={testimonial.image} alt="testimonial" className='testimonial_image' />
                                    <div className='testimonial_person'>
                                        <p><i>"{testimonial.quote}"</i></p> 
                                        <p className='testimonial_writer'>{testimonial.name}</p>
                                        <p className='p_desc'>{testimonial.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className='home_pricing'>
                    <h2>Exclusive Pricing Plans</h2>
                    <div className='content_container'>
                        <div className='box_container'>
                            <div className='box_pricing'>
                                <h2>Beginner</h2>
                                <h1>$119.99/mon</h1>
                                <ol class="yesno">
                                    <li class="yes">Exercise List</li>
                                    <li class="yes">Join Classes</li>
                                    <li class="no">Personal Trainer</li>
                                    <li class="no">Post Blogs</li>
                                    <li class="no">Create Classes</li>
                                    <li class="no">Become a Trainer</li>
                                </ol>
                                <button className='purchase_button'>Purchase Now</button>
                            </div>

                            <div className='box_pricing'>
                                <h2>Advanced</h2>
                                <h1>$249.99/mon</h1>
                                <ol class="yesno">
                                    <li class="yes">Exercise List</li>
                                    <li class="yes">Join Classes</li>
                                    <li class="yes">Personal Trainer</li>
                                    <li class="yes">Post Blogs</li>
                                    <li class="no">Create Classes</li>
                                    <li class="no">Become a Trainer</li>
                                </ol>
                                <button className='purchase_button'>Purchase Now</button>
                            </div>
                                
                            <div className='box_pricing'>
                                <h2>Professional</h2>
                                <h1>$399.99/mon</h1>
                                <ol class="yesno">
                                    <li class="yes">Exercise List</li>
                                    <li class="yes">Join Classes</li>
                                    <li class="yes">Personal Trainer</li>
                                    <li class="yes">Post Blogs</li>
                                    <li class="yes">Create Classes</li>
                                    <li class="yes">Become a Trainer</li>
                                </ol>
                                <button className='purchase_button'>Purchase Now</button>
                            </div>
                        </div>       
                    </div>
                </div>

                <div className='home_blogs'>
                    <h2 className='h2_name'>Recent Blogs</h2>
                    <p className='p_desc'>Our recent news</p>
                    <div className='content_container'>
                        <div className='box_container'>
                            <div className='box_blogs'>
                                <h2 className='h2_name'>Fitness is for everyone</h2>
                                <button className='purchase_button'>Read Now</button>
                            </div>

                            <div className='box_blogs'>
                                <h2>Food &gt; Exercise</h2>
                                <button className='purchase_button'>Read Now</button>
                            </div>

                            <div className='box_blogs'>
                                <h2>It's never too late to start!</h2>
                                <button className='purchase_button'>Read Now</button>
                            </div>
                        </div>       
                    </div>
                </div>
            </div>     

            <div className='need_a_trainer'>
                <h2>Need a Trainer?</h2>
                <h2>CALL +(123) 456-7890</h2>
                <button className='tour_button' onClick={goToPurchase}>Subscribe Now</button>
            </div>       
        </div>
    );
};

export default Home;
