import React, { useState } from 'react';
import '../style/styles.css'

const CalorieCounter = () => {
    const [calorieData, setCalorieData] = useState(null);
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [activityLevel, setActivityLevel] = useState('');

    const fetchData = () => {
        fetch(`https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${age}&gender=${gender}&height=${height}&weight=${weight}&activitylevel=${activityLevel}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_CALORIE_API_KEY,
                'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com',
            },
        }).then(response => {
            if (!response.ok) {
                throw new Error(response.status + ': ' + response.statusText);
            }
            return response.json();
        }).then(data => {
            setCalorieData(data);
        }).catch(error => {
            console.error('Error:', error);
        });
    }

    return (
        <div>
            <h1>Calorie Counter</h1>
            <form onSubmit={e => { e.preventDefault(); fetchData(); }}>
                <input type="number" value={age} onChange={e => setAge(e.target.value)} placeholder="Age" required />
                <select value={gender} onChange={e => setGender(e.target.value)} required>
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <input type="number" value={height} onChange={e => setHeight(e.target.value)} placeholder="Height (in cm)" required />
                <input type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="Weight (in kg)" required />
                <select value={activityLevel} onChange={e => setActivityLevel(e.target.value)} required>
                    <option value="">Select activity level</option>
                    <option value="level_1">Level 1</option>
                    <option value="level_2">Level 2</option>
                    <option value="level_3">Level 3</option>
                    <option value="level_4">Level 4</option>
                    <option value="level_5">Level 5</option>
                </select>
                <button type="submit">Calculate</button>
            </form>
            {calorieData && 
            <div>
                <p>BMR: {calorieData.data.BMR}</p>
                <p>Goals:</p>
                <ul>
                    <li>Maintain Weight: {calorieData.data.goals["maintain weight"]} Calories</li>
                    <li>Mild Weight Loss: {calorieData.data.goals["Mild weight loss"].calory} Calories (Expected loss: {calorieData.data.goals["Mild weight loss"]["loss weight"]})</li>
                    <li>Weight Loss: {calorieData.data.goals["Weight loss"].calory} Calories (Expected loss: {calorieData.data.goals["Weight loss"]["loss weight"]})</li>
                    <li>Extreme Weight Loss: {calorieData.data.goals["Extreme weight loss"].calory} Calories (Expected loss: {calorieData.data.goals["Extreme weight loss"]["loss weight"]})</li>
                    <li>Mild Weight Gain: {calorieData.data.goals["Mild weight gain"].calory} Calories (Expected gain: {calorieData.data.goals["Mild weight gain"]["gain weight"]})</li>
                    <li>Weight Gain: {calorieData.data.goals["Weight gain"].calory} Calories (Expected gain: {calorieData.data.goals["Weight gain"]["gain weight"]})</li>
                    <li>Extreme Weight Gain: {calorieData.data.goals["Extreme weight gain"].calory} Calories (Expected gain: {calorieData.data.goals["Extreme weight gain"]["gain weight"]})</li>
                </ul>
            </div>
            }
        </div>
    );
};

export default CalorieCounter;
