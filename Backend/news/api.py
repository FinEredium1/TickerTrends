import os
import requests
from dotenv import load_dotenv  


load_dotenv()

NEWS_API_KEY = os.getenv('API_KEY')

def fetch_news(stock_symbol):
    url = f'https://newsapi.org/v2/everything?q={stock_symbol}&apiKey={NEWS_API_KEY}'
    try:
        response = requests.get(url)
        response.raise_for_status()  
        return response.json()
    except requests.exceptions.HTTPError as err:
        print(f"HTTP error occurred: {err}")  
        return {"error": "Unable to fetch news for the given stock symbol."}
    except Exception as err:
        print(f"An error occurred: {err}")
        return {"error": "An unexpected error occurred."}
