import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './News.css';

const News = () => {
    const { symbol } = useParams(); 
    const [newsArticles, setNewsArticles] = useState([]);
    const [error, setError] = useState('');
    
    useEffect(() => {
        const fetchNews = async () => {
            if (symbol) {
                try {
                    const response = await axios.get(`http://localhost:5000/news/${symbol.toUpperCase()}`);
                    if (response.data && response.data.articles) {
                        setNewsArticles(response.data.articles);
                    } else {
                        setError('No news articles found for this stock symbol.');
                    }
                } catch (err) {
                    console.error(err);
                    setError('Unable to fetch news. Please try again.');
                }
            } else {
                setError('Stock symbol is required.');
            }
        };

        fetchNews();
    }, [symbol]);

    return (
        <div className="news-container">
            <h1>Latest News for {symbol ? symbol.toUpperCase() : 'Stock'}</h1>
            {error && <p className="error-message">{error}</p>}
            {newsArticles.length > 0 ? (
                <ul>
                    {newsArticles.map((article, index) => (
                        <li key={index}>
                            <h2><a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a></h2>
                            <p>{article.description}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No news articles found for this stock symbol.</p>
            )}
        </div>
    );
};

export default News;
