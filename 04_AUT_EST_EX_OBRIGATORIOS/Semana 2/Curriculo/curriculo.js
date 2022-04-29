const http = require('http');
const hostname = '127.0.0.1';
const port = 3011;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<!DOCTYPE html> <head> <title>Currículo</title>\ <link rel="stylesheet" href="style.css">\
        </head>\
        <body>\
            <main>\
                <h1> Currículo </h1>\
                <img src="curriculo.jpg" alt="curriculo">\
                <h2>Priscila Falcão dos Santos</h2>\
                    <h3>Competências</h3>\
                    <ul type="disc">\
                        <li>Comunicação;</li>\
                        <li>Rapidez de aprendizagem;</li>\
                        <li>Organização;</li>\
                        <li>Lidar bem com pressão e datas limites;</li>\
                        <li>Disciplinada;</li>\
                        <li>Domínio da escrita.</li>\
                    </ul>\
                <div>\
                    <h3>Experiência</h3>\
                    <p>abril de 2018 - agosto de 2018</p>\
                    <p id="p1">Escola pública municipal, Jardim Camburi - Estagiária</p>\
                    <p>Durante 2 meses não consecutivos</p>\
                    <p id="p1">Aulas particulares de matemática e português para duas alunas do 8º ano do fundamental.</p>\
                    <h3>Formação</h3>\
                    <p>fevereiro de 2018 - dezembro de 2021</p>\
                    <p id="p1">Instituto Federal do Espírito Santo, Jucutuquara - Ensino médio/ Técnico em meio ambiente.</p>\
                    <p>abril de 2018</p>\
                    <p id="p1">Instituto Federal do Espírito Santo, Jucutuquara - curso básico de excel.</p>\
                    <p>julho 2016 - dezembro 2021</p>\
                    <p id="p1">Inglês - Intermeiário 2, bolsa 100%</p>\
                    <p>dezembro de 2021 - fevereiro de 2022</p>\
                    <p id="p1">Curso básico de Python 3</p>\
                    <p>dezembro de 2021 - fevereiro de 2022</p>\
                    <p id="p1">Curso básico de HTML5</p>\
                    <h3>Prêmios</h3>\
                    <p id="p2">1º Lugar geral no concurso de redação da escola pública EMEF ASFA no ano de 2016.</p>\
                    <p id="p2">Menção honrosa da OBMEP no ano de 2015.</p>\
                    <p id="p2">3º Lugar concurso de redação do Instituto Ponte no ano de 2016.</p>\
                    <p id="p2">4º Lugar concurso "Matemática em vídeo" do Instituto Ponte no ano de 2017.</p>\
                    <p id="p2">3º Lugar da III Mostra Estadual de Astronomia, Astrofísica, Astronáutica e Cosmologia no ano de 2020.</p>\
                </div>\
            </main>\
        </body>\
        </html>');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});