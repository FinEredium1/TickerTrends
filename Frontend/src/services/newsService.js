import axios from 'axios';

// This URL should point to your Python backend
const BACKEND_API_URL = 'http://localhost:5000'; // Adjust this to your actual backend URL

export const fetchStockNews = async (stockSymbol) => {
    try {
        const response = await axios.get(`${BACKEND_API_URL}/news`, {
            params: {
                symbol: stockSymbol
            }
        });
        return response.data; // Return the news data from the backend
    } catch (error) {
        console.error("Error fetching stock news:", error);
        throw error; // Re-throw the error for handling in the component
    }
};
