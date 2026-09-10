from flask import Flask, jsonify, Blueprint
from apihelper import get_newest_repos, get_profile
from flask_cors import CORS
from requests import RequestException


app = Flask(__name__)
api = Blueprint('api', __name__, url_prefix='/api/v1')

default_frontend_origins = [
    'https://martonaron.dev',
    'https://www.martonaron.dev',
    r'https://personal-website-.*\.vercel\.app',
    'http://localhost:5173',
    'http://127.0.0.1:5173',
]


CORS(app, resources={r'/api/*': {'origins': default_frontend_origins}})


@app.route('/', methods=['GET'])
def health_check():
    return jsonify({'service': 'personal-website-api', 'status': 'ok'})


@app.errorhandler(RequestException)
def github_request_error(error):
    return jsonify({'error': 'GitHub is temporarily unavailable.'}), 502


@app.errorhandler(ValueError)
def github_response_error(error):
    return jsonify({'error': str(error)}), 502


@api.after_request
def add_cache_headers(response):
    if response.status_code == 200:
        response.headers['Cache-Control'] = (
            'public, max-age=300, s-maxage=900, stale-while-revalidate=86400'
        )
    return response


@api.route('/profile', methods=['GET'])
def github_data():
    return jsonify({'github_user': get_profile()})


@api.route('/repos', methods=['GET'])
def new_repos():
    return jsonify({'repos': get_newest_repos()})


app.register_blueprint(api)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5050)
