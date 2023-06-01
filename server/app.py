from flask import Flask, jsonify, abort, request
import requests

app = Flask(__name__)

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

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
