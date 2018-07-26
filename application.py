from flask import Flask


def create_app():
    app = Flask(__name__, static_url_path='/static')
    app.config.from_pyfile('config.py')
    configure_blueprints(app)
    return app

def configure_blueprints(app):
    from views.views import main
    app.register_blueprint(main)

application = create_app()

if(__name__ == '__main__'):
    application.run(debug=True)