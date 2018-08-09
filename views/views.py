from flask import views, Blueprint, render_template, redirect, url_for, request, flash
from extensions import sg
from sendgrid.helpers.mail import Mail, Email, Content

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
        return render_template('aboutMe2.html', title='About Me')
    return render_template('aboutMe2.html', title='About Me', inital_page=True)

@main.route('contactMe', methods=['POST', 'GET'])
def contact():
    '''
    Contact Page
    '''
    if request.method == 'POST':
        return render_template('contactMe.html', title='Contact Me')
    return render_template('contactMe.html', title='Contact Me', inital_page=True)

@main.route('projects')
def projects():
    if request.method == 'POST':
        return render_template('projects.html', title='Projects')
    return render_template('projects.html', title='Projects', inital_page=True)

# @main.route('projects2')
# def projects2():
#     if request.method == 'POST':
#         return render_template('projects2.html', title='Projects')
#     return render_template('projects2.html', title='Projects', inital_page=True)

@main.route('submitEmail', methods=['POST'])
def send_email():
    '''
    Sends me an email
    '''
    to_email = Email('arek.fielding@gmail.com')
    f_email = 'profile-site@afielding.com'
    if request.form['email']:
        f_email = request.form['email']
    from_email = Email(f_email)
    subject = "Someone contacted you"
    content = Content('text/plain', str(request.form['text']) + ' \n \n ' + str(request.form['name']))
    mail = Mail(from_email, subject, to_email, content)
    response = sg.client.mail.send.post(request_body=mail.get())
    flash("Email was sent")
    return redirect(url_for('view.contact'))
