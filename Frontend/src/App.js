import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import News from './components/News';
import './app.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news/:symbol" element={<News />} />
            </Routes>
        </Router>
    );
}

export default App;
