const express = require('express');
const path = require('path')

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'dist')));

router.get('/about', (req, res) => {
  res.render('src/pages/chat/chat.pug', {title: "something"});
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});