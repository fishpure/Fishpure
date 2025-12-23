const express = require('express');
const SparkDataStore = require('spark-datastore'); // Hypothetical module
const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Data Store for piece values
const pieceValueStore = new SparkDataStore('chess-piece-values');

// Endpoint for getting piece values
app.get('/piece-values', async (req, res) => {
    const pieceValues = await pieceValueStore.getAll();
    res.json(pieceValues);
});

// Start server
app.listen(PORT, () => {
    console.log(`Chess Game Backend running on port ${PORT}`);
});