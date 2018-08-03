from flask import Flask

def create_app():
    app = Flask(__name__, static_url_path='/static')
    app.config.from_pyfile('instance/config.py')
    configure_extenstions(app)

    configure_blueprints(app)
    return app

def configure_blueprints(app):
    from views.views import main
    app.register_blueprint(main)

def configure_extenstions(app):
    import sendgrid
    from sendgrid.helpers.mail import Mail
    from extensions import sg
    import extensions
    extensions.sg = sendgrid.SendGridAPIClient(apikey=app.config['SENDGRID_KEY'])

application = create_app()

if(__name__ == '__main__'):
    application.run(debug=True)