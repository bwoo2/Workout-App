import React from 'react';
import DEADLIFT from '../images/deadlift.webp'
import '../style/styles.css'

const Home = () => {
    return (
        <div className='home__container'>
            <img src={DEADLIFT} alt="deadlift" className='man__deadlift' />
            <div className='introduction'>
                <h1>It starts here</h1>
            </div>
        </div>
    );
};


export default Home;
