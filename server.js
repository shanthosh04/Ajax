const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "client")));

app.post('/add', (req, res) => {
    const numbers = req.body.numbers;
    if (!Array.isArray(numbers)) {
        return res.status(400).send({ error: "Invalid input" });
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    res.send({ sum });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
