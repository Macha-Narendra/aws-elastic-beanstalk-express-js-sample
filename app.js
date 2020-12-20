const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!, Welcome to AWS Learning Narendra Babu'));
app.get('/', (req, res) => res.send('Very GooD Narendra Babu, FInally you have deployed your FIRST DEVOPS into AWS'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
