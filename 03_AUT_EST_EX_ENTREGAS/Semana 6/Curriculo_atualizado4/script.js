const express = require('express'); 
const app = express();

const hostname = '127.0.0.1';
const port = 3062;
app.use(express.static("./static/"));

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
