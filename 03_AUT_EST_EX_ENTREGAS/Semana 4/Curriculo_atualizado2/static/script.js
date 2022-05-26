const express = require('express');
const hostname = '127.0.0.1';
const port = 3031;
const app = express();

//  app.use(express.static("static"));
//  app.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);)};

function addLine(){
    document.getElementById("addLine").innerHTML = "nada, só adiciona essa linha teste";
}
