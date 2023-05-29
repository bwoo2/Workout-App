import React, { useState } from 'react';
import '../style/styles.css';

const Recipe = () => {
    const [answer, setAnswer] = useState(null);
    const [question, setQuestion] = useState('');

    const fetchAnswer = () => {
        const encodedQuestion = encodeURIComponent(question);

        fetch(`https://webknox-recipes.p.rapidapi.com/recipes/quickAnswer?q=${encodedQuestion}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RECIPE_API_KEY,
                'X-RapidAPI-Host': 'webknox-recipes.p.rapidapi.com'
            }
        })
        .then(response => response.json())
        .then(data => setAnswer(data))
        .catch(error => console.error('Error:', error));
    }

    return (
        <div>
            <h1>Recipe Information</h1>

            <h3>Ask simple questions for daily needs</h3> 
            <br />
            <p>Example: "How much vitamin c is in 2 apples?"</p>
            <form onSubmit={e => { e.preventDefault(); fetchAnswer(); }}>
                <input type="text" value={question} onChange={e => setQuestion(e.target.value)} placeholder="Ask a question" required />
                <button type="submit">Ask</button>
            </form>
            {answer &&  <p> <img src={answer.image} className='food__image' />  <br /> {answer.answer} </p> }

        </div>
    );
};

export default Recipe;
