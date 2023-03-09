const express = require('express');
const path = require('path')

const app = express();
const PORT = 3001;

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});