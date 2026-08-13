from flask import Flask, jsonify, Blueprint
from

app = Flask(__name__)

api = Blueprint('api', __name__, url_prefix='/api/v1')

@api.route('/')
def index():
    return jsonify({'hello': 'world'})

app.register_blueprint(api)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5050)