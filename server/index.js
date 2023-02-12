const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send(`<h1>Hello there</h1>`);
});

app.get('/api', (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
