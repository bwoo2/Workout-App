import React, { useState, useEffect } from 'react';

const Exercises = () => {
    const [exercises, setExercises] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
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

    useEffect(() => {
        fetch('https://api.api-ninjas.com/v1/exercises', {
            headers: {
                'X-Api-Key': process.env.REACT_APP_EXERCISES_API_KEY
            }
        }).then(response => {
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

    // search bar is not perfect
    const handleSearch = event => {
        setSearch(event.target.value);
    };

    const filteredExercises = exercises.filter(exercise => {
        return exercise.name.toLowerCase().includes(search.toLowerCase());
    });

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
                        <button key={index} className='body__part'>{part}</button>
                    ))}
                </div>
                <div className='list__exercises'>
                    <h3>Example Exercises</h3>
                    <input type="text" value={search} onChange={handleSearch} placeholder="Search for an exercise" />
                    {filteredExercises.map((exercise, index) => (
                        <div key={index}>
                            <p><strong>{exercise.name}</strong> - <i>{exercise.difficulty}</i> ({exercise.type}) <br /> <strong>Instructions:</strong> {exercise.instructions}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Exercises;

