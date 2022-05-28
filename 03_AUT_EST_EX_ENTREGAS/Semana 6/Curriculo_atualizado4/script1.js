const express = require('express'); 
const hostname = '127.0.0.1';

const port = 3061;
const sqlite3 = require('sqlite3').verbose(); 
const app = express();
const DBPATH = 'dataBase.db';
const bodyParser = require('body-parser');
const { param } = require('express/lib/request');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static("./static/"));

app.use(express.json())

/****** CRUD - endpoint de consulta  de competencias *****************************************/
app.get('/competencias/users', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM Competencias ORDER BY idCompetencias COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close(); // Fecha o banco
});


/****** CRUD - endpoint de consulta de Experiencia *****************************************/
app.get('experiencia/users', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM Experiencia ORDER BY idExperiencia COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close(); // Fecha o banco
});

/****** CRUD - endpoint de consulta de Formacao *****************************************/
app.get('formacao/users', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM Formacao ORDER BY idFormacao COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close(); // Fecha o banco
});

/****** CRUD - endpoint de consulta de Premio *****************************************/
app.get('premios/users', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM Premios ORDER BY idPremio COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close(); // Fecha o banco
});


// /* Inicia o servidor */ 
app.listen(port, hostname, () => {
  console.log(`BD server running at http://${hostname}:${port}/`);
});