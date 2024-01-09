const express = require('express');
const path = require('path');

const app = express();
const port = 8000;

const publicDirectory = path.join(__dirname, '/');


app.get('/', (req, res) => {
    res.sendFile(path.join(publicDirectory, '/index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});