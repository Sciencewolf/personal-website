import os

from flask import Flask, jsonify, Blueprint
from apihelper import GitHubConfigurationError, get_newest_repos, user
from flask_cors import CORS
from requests import RequestException


app = Flask(__name__)
api = Blueprint('api', __name__, url_prefix='/api/v1')

default_frontend_origins = [
    'https://martonaron.dev',
    'https://www.martonaron.dev',
    r'https://.*\.vercel\.app',
    'http://localhost:5173',
    'http://127.0.0.1:5173',
]


CORS(app, resources={r'/api/*': {'origins': default_frontend_origins}})


@app.route('/', methods=['GET'])
def health_check():
    return jsonify({'service': 'personal-website-api', 'status': 'ok'})


@app.errorhandler(GitHubConfigurationError)
def github_configuration_error(error):
    return jsonify({'error': str(error)}), 503


@app.errorhandler(RequestException)
def github_request_error(error):
    return jsonify({'error': 'GitHub is temporarily unavailable.'}), 502


@app.errorhandler(ValueError)
def github_response_error(error):
    return jsonify({'error': str(error)}), 502


@api.route('/profile', methods=['GET'])
def github_data():
    github_user = user()

    return jsonify({'github_user': github_user})


@api.route('/repos', methods=['GET'])
def new_repos():
    repos = get_newest_repos()

    return jsonify({'repos': repos})


app.register_blueprint(api)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5050)
