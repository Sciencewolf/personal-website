from flask import Flask, jsonify, Blueprint, request, render_template
from apihelper import get_newest_repos, user
from flask_cors import CORS


app = Flask(__name__)
api = Blueprint('api', __name__, url_prefix='/api/v1')


CORS(app)
CORS(api)


@api.route('/profile', methods=['GET'])
def github_data():
    github_user = user("user")

    return jsonify({'github_user': github_user})


@api.route('/repos', methods=['GET'])
def new_repos():
    repos = get_newest_repos()

    return jsonify({'repos': repos})


app.register_blueprint(api)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5050)
