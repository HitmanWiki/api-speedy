const express = require('express');
const cors = require('cors'); // Import CORS
const app = express();
const PORT = process.env.PORT || 3000;

// Replace with your actual token data
const tokenData = {
    totalSupply: 1000000000, // Use numbers for easier manipulation
    circulatingSupply: 1000000000,
    maxSupply: 1000000000,
};

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Endpoint for Total Supply
app.get('/api/total-supply', (req, res) => {
    res.send(tokenData.totalSupply.toString()); // Convert number to string
});

// Endpoint for Circulating Supply
app.get('/api/circulating-supply', (req, res) => {
    res.send(tokenData.circulatingSupply.toString()); // Convert number to string
});

// Endpoint for Max Supply
app.get('/api/max-supply', (req, res) => {
    res.send(tokenData.maxSupply.toString()); // Convert number to string
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
