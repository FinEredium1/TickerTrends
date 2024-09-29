from flask import Flask, jsonify
from news.api import fetch_news
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Welcome to the Stock News Aggregator!"

@app.route('/news/<stock_symbol>')
def get_news(stock_symbol):
    news_data = fetch_news(stock_symbol)
    if 'error' in news_data:
        return jsonify(news_data), 404
    return jsonify(news_data)

if __name__ == "__main__":
    app.run(debug=True)
