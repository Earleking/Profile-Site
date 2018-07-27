from flask import views, Blueprint, render_template, redirect, url_for

main = Blueprint('view', __name__, url_prefix='/')

@main.route('')
def home():
    '''
    Main Page
    '''
    return render_template('homePage.html', title="Hello World")

@main.route('aboutMe')
def about_me():
    '''
    About me
    '''
    return render_template('aboutMe.html', title='About Me')