from flask import Flask, jsonify, abort, request
# from flask_sqlalchemy import SQLAlchemy
# from werkzeug.security import generate_password_hash, check_password_hash
# from flask_jwt_extended import JWTManager, create_access_token, get_jwt_identity, jwt_required
import requests

app = Flask(__name__)

# app.config['SECRET_KEY'] = 'FitMeKEY'
# app.config['JWT_SECRET_KEY'] = 'FitMeJWT'
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///FitMe.db'
# db = SQLAlchemy(app)
# jwt = JWTManager(app)

# class User(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     username = db.Column(db.String(50), unique=True, nullable=False)
#     password_hash = db.Column(db.String(100), nullable=False)

# class Token(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     username = db.Column(db.String(50), nullable=False)
#     jti = db.Column(db.String(36), nullable=False)

# @app.route('/api/signup', methods=['POST'])
# def signup():
#     data = request.get_json()
#     username = data.get('username')
#     password = data.get('password')

#     if User.query.filter_by(username=username).first() is not None:
#         return jsonify({'message': 'Username already exists'}), 400

#     user = User(username=username, password_hash=generate_password_hash(password))
#     db.session.add(user)
#     db.session.commit()

#     return jsonify({'message': 'User created'}), 201

# @app.route('/api/login', methods=['POST'])
# def login():
#     data = request.get_json()
#     username = data.get('username')
#     password = data.get('password')

#     user = User.query.filter_by(username=username).first()
#     if user is None or not check_password_hash(user.password_hash, password):
#         return jsonify({'message': 'Invalid credentials'}), 401

#     token = create_access_token(identity=username)
#     db.session.add(Token(username=username, jti=token))
#     db.session.commit()

#     return jsonify({'token': token}), 200

# @app.route('/api/logout', methods=['DELETE'])
# @jwt_required()
# def logout():
#     jti = get_jwt_identity()
#     token = Token.query.filter_by(jti=jti).first()
#     if token is not None:
#         db.session.delete(token)
#         db.session.commit()

#     return jsonify({'message': 'Logged out'}), 200

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

# def create_tables():
#     with app.app_context():
#         db.create_all()

if __name__ == '__main__':
    # create_tables()
    app.run(debug=True, host='0.0.0.0')
