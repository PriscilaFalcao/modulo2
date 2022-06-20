const express = require('express'); 
const hostname = '127.0.0.1';

const port = 3071;
const sqlite3 = require('sqlite3').verbose(); 
const app = express();
const DBPATH = 'dataBase.db';
const bodyParser = require('body-parser');
const { param } = require('express/lib/request');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static("./static/"));

app.use(express.json())

/****** CRUD - endpoint de competencias *****************************************/

//Consulta:
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


// Inserir:
app.post('/userinsert', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "INSERT INTO dataBase (idCompetencias, Competencia) VALUES (?, ?)";
	var db = new sqlite3.Database(DBPATH); // Abre o banco
  var params = []
  params.push(req.body.idCompetencias);
  params.push(req.body.Competencia);

	db.run(sql, params,  err => {
		if (err) {
		    throw err;
		}
	});
	db.close(); // Fecha o banco
	res.end();
});

// Delete
app.get('/competencias/userdelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
  const sql = "DELETE FROM Competencias WHERE idCompetencias =?";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var params = req.body.idCompetencias;
  db.run(sql, params, function(err){
    if (err) return console.error(err.message);
  })

  db.close();
  res.end();
});

// Update
app.get('/competencias/userupdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql =   'UPDATE Competencias SET Competencia=? WHERE idCompetencia=?';
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var params = []
  params.push(req.body.Competencia);
  params.push(req.body.idCompetencias);

  db.run(sql, params,  err => {
      if (err) {
          throw err;
      }
  });
  db.close(); // Fecha o banco
  res.end();
});


/****** CRUD - endpoint de Experiencia *****************************************/

//Consulta:
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

//Inserir:
app.post('/experiencia/userinsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO Experiencia (idExperiencia, Experiencia) VALUES (?, ?)";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var params = []
  params.push(req.body.idExperiencia);
  params.push(req.body.Experiencia);

  db.run(sql, params,  err => {
      if (err) {
          throw err;
      }
  });
  db.close(); // Fecha o banco
  res.end();
});

// Delete
app.get('/experiencia/userdelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
  const sql = "DELETE FROM Experiencia WHERE idExperiencia =?";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var params = req.body.idExperiencia;
  db.run(sql, params, function(err){
    if (err) return console.error(err.message);
  })

  db.close();
  res.end();
});

// Update
app.get('/experien/userupdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql =   'UPDATE Formacao SET Experiencia =? WHERE idExperiencia =?';
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var params = []
  params.push(req.body.Experiencia);
  params.push(req.body.idExperiencia);

  db.run(sql, params,  err => {
      if (err) {
          throw err;
      }
  });
  db.close(); // Fecha o banco
  res.end();
});

/****** CRUD - endpoint de Formacao *****************************************/

//Consulta:
app.get('/formacao/users', (req, res) => {
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

//Inserir:
app.post('/formacao/userinsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO Formacao (idFormacao, Formacao) VALUES (?, ?)";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var params = []
  params.push(req.body.idFormacao);
  params.push(req.body.Formacao);

  db.run(sql, params,  err => {
      if (err) {
          throw err;
      }
  });
  db.close(); // Fecha o banco
  res.end();
});

//Delete:
app.get('/formacao/userdelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  const sql = "DELETE FROM Formacao WHERE idFormacao = ?";
  var db = new sqlite3.Database(DBPATH);
  var params = req.body.Formacao;

  db.run(sql, params, function(err){
    if(err) return console.error(err.message);
  });

  db.close();
  res.end();
});

//Update
app.get('/formacao/userupdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Console-Allow-Origin', '*');

  sql = 'UPDATE Formacao SET Formacao =? WHERE idFormacao=?';
  var db = new sqlite3.Database(DPATH);
  var params = []
  params.push(req.body.idFormacao);
  params.push(req.body.Formacao);

  db.run(sql, params, err => {
    if (err) {
      throw err;
    }
  });
  db.close();
  res.end();
});

/****** CRUD - endpoint de consulta de Premio *****************************************/

//Consulta:
app.get('/premios/users', (req, res) => {
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

//Inserir:
app.post('/premios/userinsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  sql = 'INSERT INTO Premios (idPremio, Premio) VALUES (?, ?)';
  var db = new sqlite3.Database(DBPATH);
  var params = [];
  params.push(req.body.idPremio);
  params.push(req.body.Premio);

  db.run(sql, params, err => {
    if (err) {
      throw err;
    }
  });
  db.close();
  res.end();
});

//Update:
app.get('/premios/userupdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  sql = 'UPDATE Premios SET Premio = ? WHERE idPremio=?';
  var db = new sqlite3.Database(DBPATH);
  var params = [];
  params.push(req.body.Premio);
  params.push(req.body.idPremio);

  db.run(sql, params, err => {
    if (err) {
      throw err;
    }
  });
  db.close();
  res.end();
});

//Delete:
app.get('/premios/userdelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  const sql = "DELETE FROM Premios WHERE idPremio =?";
  var db = new sqlite3.Database(DBPATH);
  var params = req.body.idPremio;
  db.run(sql, params, function(err){
    if (err) return console.error(err.message);
  })

  db.close();
  res.end();
});

// /* Inicia o servidor */ 
app.listen(port, hostname, () => {
  console.log(`BD server running at http://${hostname}:${port}/`);
});