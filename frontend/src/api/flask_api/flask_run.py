from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Import and register blueprints from api module
from flask_api import init_routes
init_routes(app)

if __name__ == '__main__':
    app.run(debug=True)
