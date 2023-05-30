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
                'X-RapidAPI-Key': process.env.REACT_APP_QUESTION_API_KEY,
                'X-RapidAPI-Host': 'webknox-recipes.p.rapidapi.com'
            }
        })
        .then(response => response.json())
        .then(data => setAnswer(data))
        .catch(error => console.error('Error:', error));
    }

    const [query, setQuery] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [excludeCuisine, setExcludeCuisine] = useState('');
    const [diet, setDiet] = useState('');
    const [intolerances, setIntolerances] = useState('');
    const [recipes, setRecipes] = useState('');

    const fetchRecipes = () => {
        const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${query}&cuisine=${cuisine}&excludeCuisine=${excludeCuisine}&diet=${diet}&intolerances=${intolerances}`;
        
        fetch(url, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_SPOONACULAR_API_KEY,
                'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
            }
        })
        .then(response => response.json())
        .then(data => {
            const recipePromises = data.results.map(recipe =>
                fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipe.id}/information`, {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': process.env.REACT_APP_SPOONACULAR_API_KEY,
                        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
                    }
                }).then(res => res.json())
            );
    
            return Promise.all(recipePromises);
        })
        .then(recipeDetails => {
            setRecipes(recipeDetails);
        })
        .catch(error => console.error('Error:', error));
    }
    

    console.log(recipes);

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
                    <img src={recipe.image} className='recipe__food__image' />
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
            {answer &&  <p className='answer'> <img src={answer.image} className='food__image' />  <br /> {answer.answer} </p> }

        </div>
    );
};

export default Recipe;