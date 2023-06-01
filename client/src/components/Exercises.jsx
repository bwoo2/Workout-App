import React, { useState, useEffect } from 'react';
import '../style/styles.css'

const ExerciseList = () => {
    const [exercises, setExercises] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPart, setCurrentPart] = useState('Abdominals');
    const body_parts = ["Abdominals", 
                        "Abductors", 
                        "Adductors", 
                        "Biceps", 
                        "Calves", 
                        "Chest", 
                        "Forearms", 
                        "Glutes", 
                        "Hamstrings", 
                        "Lats", 
                        "Lower_back", 
                        "Middle_back", 
                        "Neck", 
                        "Quadriceps", 
                        "Traps", 
                        "Triceps"]

    const handleBodyPart = (muscle) => {
        setLoading(true);
        setCurrentPart(muscle);
        fetch(`/api/exercise/${muscle.toLowerCase()}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status + ': ' + response.statusText);
            }
            return response.json();
        }).then(data => {
            setExercises(data);
            setLoading(false);
        }).catch(error => {
            console.error('Error:', error);
            setLoading(false);
        });
    }

    useEffect(() => {
        setLoading(true);
        fetch('/api/exercise')
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status + ': ' + response.statusText);
            }
            return response.json();
        }).then(data => {
            setExercises(data);
            setLoading(false);
        }).catch(error => {
            console.error('Error:', error);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='no-scroll'>
            <h1>Exercises</h1>
            <div className='exercise-content'>
                <div className='side__bar'>
                    <h3>Body Parts</h3>
                    {body_parts.map((part, index) => (
                        <button key={index} className='body__part' onClick={() => handleBodyPart(part)}>{part}</button>
                    ))}
                </div>
                <div className='list__exercises'>
                    <h3>{currentPart}</h3>
                    {exercises.map((exercise, index) => (
                        <div key={index}>
                            <h2>{exercise.name}</h2>
                            <p>{exercise.instructions}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExerciseList;

