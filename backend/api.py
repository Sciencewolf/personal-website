import logging
import os

from flask import Blueprint, Flask, jsonify, request
from flask_cors import CORS
from requests import RequestException

from apihelper import get_newest_repos, get_profile

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)
api = Blueprint('api', __name__, url_prefix='/api/v1')


default_frontend_origins = [
    'https://martonaron.dev',
    'https://www.martonaron.dev',
    r'^https://personal-website-[a-z0-9-]+\.vercel\.app$',
    'http://localhost:5173',
    'http://127.0.0.1:5173',
]

MAX_REPOS = 24

CORS(app, resources={r'/api/*': {'origins': default_frontend_origins}})


@app.route('/', methods=['GET'])
def health_check():
    return jsonify({'service': 'personal-website-api', 'status': 'ok'})


@app.errorhandler(RequestException)
def github_request_error(error):
    logger.warning('GitHub request failed: %s', error)
    return jsonify({'error': 'GitHub is temporarily unavailable.'}), 502


@app.errorhandler(ValueError)
def github_response_error(error):
    logger.warning('Unexpected GitHub response: %s', error)
    return jsonify({'error': 'GitHub returned an unexpected response.'}), 502


@api.after_request
def add_cache_headers(response):
    if response.status_code == 200:
        response.headers['Cache-Control'] = (
            'public, max-age=300, s-maxage=900, stale-while-revalidate=86400'
        )
    return response


@api.route('/health', methods=['GET'])
def api_health_check():
    return jsonify({'service': 'personal-website-api', 'status': 'ok'})


@api.route('/profile', methods=['GET'])
def github_data():
    return jsonify({'github_user': get_profile()})


@api.route('/repos', methods=['GET'])
def new_repos():
    limit = request.args.get('limit', type=int) or MAX_REPOS
    limit = max(1, min(limit, MAX_REPOS))

    return jsonify({'repos': get_newest_repos(limit)})


app.register_blueprint(api)


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=int(os.getenv('PORT', '5050')), debug=True)
