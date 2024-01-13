import axios from 'axios';

// Creating an instance of axios with a predefined configuration
const api = axios.create({
    // Setting the base URL for all HTTP requests made using this instance
    //baseURL: 'http://127.0.0.1:5000',
    // This base URL points to the backend server hosted on Heroku
    baseURL: 'https://unit-prediction-daa64ecfeed3.herokuapp.com/'
});

// Exporting the axios instance for use in other parts of the application
// This allows for reusing this instance with the base URL preset,
// making it easier and cleaner to manage API requests throughout the application
export default api;
