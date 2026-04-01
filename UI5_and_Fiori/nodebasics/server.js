const express = require('express');
const app = express();

// Expose a service at /greet?name=YourName
app.get('/greet', (req, res) => {
    const name = req.query.name || 'Guest';
    res.json({ message: `Hello, ${name}!` });
});

// Handle 404
app.use((req, res) => {
    res.status(404).json({ error: 'Not found' });
});

// Listen on port 3000
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
