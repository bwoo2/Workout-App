from flask import Flask, jsonify, abort, request
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
import requests

app = Flask(__name__)

app.config['SECRET_KEY'] = 'FitMeKEY'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///FitMe.db'
db = SQLAlchemy(app) 

class Test(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True, nullable=False)


@app.route('/api/db_test', methods=['GET'])
def db_test():
    test = Test(name='Test Entry')
    db.session.add(test)
    db.session.commit()

    test_entry = Test.query.filter_by(name='Test Entry').first()
    if test_entry:
        return jsonify({"message": f"Database is working correctly. Found entry: {test_entry.name}"})
    else:
        return jsonify({"message": "There seems to be an issue with the database."}), 500

@app.route('/api/exercise', methods=['GET'])
def api_exercise_default():
    return api_exercise('abdominals')

@app.route('/api/exercise/<string:muscle>', methods=['GET'])
def api_exercise(muscle):
    api_url = 'https://api.api-ninjas.com/v1/exercises?muscle={}'.format(muscle)
    response = requests.get(api_url, headers={'X-Api-Key': 'rELKXxb6KJx0VU3IE+kXTQ==vOW8K8KvgJDI8wPb'})
    if response.status_code == 200:
        return jsonify(response.json())
    else:
        return abort(response.status_code, response.text)

@app.route('/api/calorie_intake', methods=['POST'])
def calorie_intake():
    data = request.get_json()
    age = data.get('age')
    gender = data.get('gender')
    height = data.get('height')
    weight = data.get('weight')
    activityLevel = data.get('activityLevel')

    api_url = f'https://fitness-calculator.p.rapidapi.com/dailycalorie?age={age}&gender={gender}&height={height}&weight={weight}&activitylevel={activityLevel}'
    response = requests.get(api_url, headers={
        'X-RapidAPI-Key': 'bde2d67669mshb32605308cb0aefp14951fjsn28ba6d451afa',
        'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com',
    })
    
    if response.status_code == 200:
        return jsonify(response.json())
    else:
        return abort(response.status_code, response.text)
    
@app.route('/api/question', methods=['POST'])
def question():
    data = request.get_json()
    question = data.get('question')

    api_url = f'https://webknox-recipes.p.rapidapi.com/recipes/quickAnswer?q={question}'
    response = requests.get(api_url, headers={
        'X-RapidAPI-Key': 'bde2d67669mshb32605308cb0aefp14951fjsn28ba6d451afa',
        'X-RapidAPI-Host': 'webknox-recipes.p.rapidapi.com',
    })
    
    if response.status_code == 200:
        return jsonify(response.json())
    else:
        return abort(response.status_code, response.text)

@app.route('/api/recipes', methods=['POST'])
def recipes():
    data = request.get_json()
    query = data.get('query')
    cuisine = data.get('cuisine')
    excludeCuisine = data.get('excludeCuisine')
    diet = data.get('diet')
    intolerances = data.get('intolerances')

    api_url = f'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query={query}&cuisine={cuisine}&excludeCuisine={excludeCuisine}&diet={diet}&intolerances={intolerances}'
    response = requests.get(api_url, headers={
        'X-RapidAPI-Key': 'bde2d67669mshb32605308cb0aefp14951fjsn28ba6d451afa',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
    })
    
    if response.status_code == 200:
        data = response.json()
        recipes = []
        for recipe in data['results']:
            recipe_info = requests.get(f'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/{recipe["id"]}/information', headers={
                'X-RapidAPI-Key': 'bde2d67669mshb32605308cb0aefp14951fjsn28ba6d451afa',
                'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
            }).json()
            recipes.append(recipe_info)

        return jsonify(recipes)
    else:
        return abort(response.status_code, response.text)


def create_tables():
    with app.app_context():
        db.create_all()

if __name__ == '__main__':
    create_tables()
    app.run(debug=True, host='0.0.0.0')
