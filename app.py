from flask import Flask, render_template, request, redirect, url_for, session
import json
import os
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.utils import secure_filename

app = Flask(__name__)
app.secret_key = 'your_secret_key_here'

UPLOAD_FOLDER = 'static'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# --- Load password hash from file ---
def get_password_hash():
    if os.path.exists('password.txt'):
        with open('password.txt', 'r') as f:
            return f.read().strip()
    else:
        # Default password is aman1234
        default = generate_password_hash('aman1234')
        with open('password.txt', 'w') as f:
            f.write(default)
        return default

def set_password_hash(new_hash):
    with open('password.txt', 'w') as f:
        f.write(new_hash)

# Load and Save Portfolio Data
def load_data():
    with open('data.json', 'r') as f:
        return json.load(f)

def save_data(data):
    with open('data.json', 'w') as f:
        json.dump(data, f, indent=4)

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Routes

@app.route('/')
def index():
    data = load_data()
    return render_template('index.html', data=data)

@app.route('/admin', methods=['GET', 'POST'])
def admin():
    if request.method == 'POST':
        password = request.form['password']
        if check_password_hash(get_password_hash(), password):
            session['admin'] = True
            return redirect(url_for('dashboard'))
        else:
            return render_template('admin.html', error="Incorrect password")
    return render_template('admin.html')

@app.route('/dashboard', methods=['GET', 'POST'])
def dashboard():
    if not session.get('admin'):
        return redirect(url_for('admin'))

    data = load_data()
    message = ""

    if request.method == 'POST':
        data['bio'] = request.form['bio']
        data['github'] = request.form['github']
        data['linkedin'] = request.form['linkedin']
        data['twitter'] = request.form['twitter']
        data['instagram'] = request.form['instagram']

        if 'photo' in request.files:
            file = request.files['photo']
            if file and allowed_file(file.filename):
                filename = secure_filename(file.filename)
                filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
                file.save(filepath)
                data['photo'] = filename

        save_data(data)

        # Handle password change
        old_pass = request.form.get('old_password')
        new_pass = request.form.get('new_password')
        confirm_pass = request.form.get('confirm_password')

        if old_pass and new_pass and confirm_pass:
            if check_password_hash(get_password_hash(), old_pass):
                if new_pass == confirm_pass:
                    set_password_hash(generate_password_hash(new_pass))
                    message = "Password changed successfully."
                else:
                    message = "New passwords do not match."
            else:
                message = "Old password is incorrect."

        return render_template('dashboard.html', data=data, message=message)

    return render_template('dashboard.html', data=data)
    
@app.route('/logout')
def logout():
    session.pop('admin', None)
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
