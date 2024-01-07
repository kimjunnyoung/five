const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.send('서버');
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 동작.`);
});
