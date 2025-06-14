from flask import Flask, render_template, request, redirect, url_for, session
import json
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = 'your_secret_key_here'

def load_data():
    with open('data.json', 'r') as f:
        return json.load(f)

def save_data(data):
    with open('data.json', 'w') as f:
        json.dump(data, f, indent=4)

admin_password_hash = generate_password_hash("aman1234")

@app.route('/')
def index():
    data = load_data()
    return render_template('index.html', data=data)

@app.route('/admin', methods=['GET', 'POST'])
def admin():
    if request.method == 'POST':
        password = request.form['password']
        if check_password_hash(admin_password_hash, password):
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
    if request.method == 'POST':
        data['bio'] = request.form['bio']
        data['github'] = request.form['github']
        data['linkedin'] = request.form['linkedin']
        data['twitter'] = request.form['twitter']
        data['instagram'] = request.form['instagram']
        save_data(data)
        return redirect(url_for('index'))
    return render_template('dashboard.html', data=data)

@app.route('/logout')
def logout():
    session.pop('admin', None)
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
