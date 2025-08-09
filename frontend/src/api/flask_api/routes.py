from .add_api import bp as add_api_bp
from .remove_api import bp as remove_api_bp
from .programs_api import bp as programs_api_bp

def init_routes(app):
    app.register_blueprint(add_api_bp)
    app.register_blueprint(remove_api_bp)
    app.register_blueprint(programs_api_bp)
