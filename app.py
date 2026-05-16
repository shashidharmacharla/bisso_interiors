from flask import Flask, render_template

app = Flask(__name__)


# Home Page

@app.route('/')
def home():
    return render_template('index.html')


# About Page

@app.route('/about')
def about():
    return render_template('about.html')


# Services Page

@app.route('/services')
def services():
    return render_template('services.html')


# Gallery Page

@app.route('/gallery')
def gallery():
    return render_template('gallery.html')


# Testimonials Page

@app.route('/testimonials')
def testimonials():
    return render_template('testimonials.html')


# Run Server

if __name__ == '__main__':
    app.run(debug=True)