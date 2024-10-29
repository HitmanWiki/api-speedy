const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Replace with your actual token data
const tokenData = {
    totalSupply: "1,000,000,000", // Your total supply
    circulatingSupply: "1,000,000,000", // Your circulating supply
    maxSupply: "1,000,000,000", // Your max supply
};

// Endpoint for Total Supply
app.get('/api/total-supply', (req, res) => {
    res.json({ totalSupply: tokenData.totalSupply });
});

// Endpoint for Circulating Supply
app.get('/api/circulating-supply', (req, res) => {
    res.json({ circulatingSupply: tokenData.circulatingSupply });
});

// Endpoint for Max Supply
app.get('/api/max-supply', (req, res) => {
    res.json({ maxSupply: tokenData.maxSupply });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
