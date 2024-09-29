import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const [stockSymbol, setStockSymbol] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        setError(''); 
        if (stockSymbol) {
            navigate(`/news/${stockSymbol.toUpperCase()}`);
        } else {
            setError('Please enter a stock symbol.');
        }
    };

    return (
        <div className="home-container">
            <h1>Welcome to the Stock News Aggregator!</h1>
            <p>Enter a stock symbol to get the latest news.</p>
            <div className="search-container">
                <input
                    type="text"
                    value={stockSymbol}
                    onChange={(e) => setStockSymbol(e.target.value)}
                    placeholder="e.g., AAPL"
                    className="stock-input"
                />
                <button onClick={handleSearch} className="search-button">
                    Search
                </button>
            </div>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default Home;
