from flask import Flask, jsonify, abort
import requests, os

Exercises_key = os.environ.get("EXERCISES_API_KEY")

app = Flask(__name__)

@app.route('/api/exercise', methods=['GET'])
def api_exercise_default():
    return api_exercise('abdominals')

@app.route('/api/exercise/<string:muscle>', methods=['GET'])
def api_exercise(muscle):
    api_url = 'https://api.api-ninjas.com/v1/exercises?muscle={}'.format(muscle)
    response = requests.get(api_url, headers={'X-Api-Key': Exercises_key})
    if response.status_code == 200:
        return jsonify(response.json())
    else:
        return abort(response.status_code, response.text)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
