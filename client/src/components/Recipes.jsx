import React, { useState } from 'react';
import '../style/styles.css';

const Recipe = () => {
    const [loading, setLoading] = useState(false);
    const [answer, setAnswer] = useState(null);
    const [question, setQuestion] = useState('');
    const [query, setQuery] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [excludeCuisine, setExcludeCuisine] = useState('');
    const [diet, setDiet] = useState('');
    const [intolerances, setIntolerances] = useState('');
    const [recipes, setRecipes] = useState('');

    const fetchAnswer = () => {
        fetch('/api/question', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                question: question,
            }),
        }).then(response => {
            if (!response.ok) {
                throw new Error(response.status + ': ' + response.statusText);
            }
            return response.json();
        }).then(data => {
            setAnswer(data);
        }).catch(error => {
            console.error('Error:', error);
        });
    }

    const fetchRecipes = () => {
        setLoading(true);
        fetch('/api/recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: query,
                cuisine: cuisine,
                excludeCuisine: excludeCuisine,
                diet: diet,
                intolerances: intolerances,
            }),
        }).then(response => {
            if (!response.ok) {
                throw new Error(response.status + ': ' + response.statusText);
            }
            return response.json();
        }).then(data => {
            setRecipes(data);
            setLoading(false);
        }).catch(error => {
            console.error('Error:', error);
            setLoading(false);
        });
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Recipe Information</h1>
            
            <h3>Search for recipes</h3>
            <form onSubmit={e => { e.preventDefault(); fetchRecipes(); }}>
                <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Query (Required)" required />
                <input type="text" value={cuisine} onChange={e => setCuisine(e.target.value)} placeholder="Cuisine (Optional)" />
                <input type="text" value={excludeCuisine} onChange={e => setExcludeCuisine(e.target.value)} placeholder="Exclude Cuisine (Optional)" />
                <input type="text" value={diet} onChange={e => setDiet(e.target.value)} placeholder="Diet (Optional)" />
                <input type="text" value={intolerances} onChange={e => setIntolerances(e.target.value)} placeholder="Intolerances (Optional)" />
                <button type="submit">Fetch Recipes</button>
            </form>

            {recipes && recipes.map(recipe => (
                <div key={recipe.id}>
                    <img src={recipe.image} className='recipe__food__image' alt='food'/>
                    <strong>{recipe.title}</strong>
                    <div dangerouslySetInnerHTML={{ __html: recipe.summary }} />
                </div>
            ))}

            <br />
            <h3>Ask simple questions for daily needs</h3> 
            <p>Example: "How much vitamin c is in 2 apples?"</p>
            <form onSubmit={e => { e.preventDefault(); fetchAnswer(); }}>
                <input type="text" value={question} onChange={e => setQuestion(e.target.value)} placeholder="Ask a question" required />
                <button type="submit">Ask</button>
            </form>
            {answer &&  <p className='answer'> <img src={answer.image} className='food__image' alt='food'/>  <br /> {answer.answer} </p> }

        </div>
    );
};

export default Recipe;