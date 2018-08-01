from flask import views, Blueprint, render_template, redirect, url_for, request

main = Blueprint('view', __name__, url_prefix='/')

@main.route('', methods=['POST', 'GET'])
def home():
    '''
    Main Page
    '''
    if request.method == 'POST':
        return render_template('homePage.html', title="Arek Fielding")
    return render_template('homePage.html', title="Arek Fielding", inital_page=True)

@main.route('aboutMe', methods=['POST', 'GET'])
def about_me():
    '''
    About me
    '''
    if request.method == 'POST':
        return render_template('aboutMe.html', title='About Me')
    return render_template('aboutMe.html', title='About Me', inital_page=True)

@main.route('contactMe', methods=['POST', 'GET'])
def contact():
    '''
    Contact Page
    '''
    if request.method == 'POST':
        return render_template('contactMe.html', title='Contact Me')
    return render_template('contactMe.html', title='Contact Me', inital_page=True)

