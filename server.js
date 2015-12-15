var express = require('express');
var path = require('path'); // модуль для парсинга пути
var app = express();

app.use(express.static(path.join(__dirname, "build"))); // запуск статического файлового сервера, который смотрит на папку build/ (в нашем случае отдает index.html)
app.get('/api', function (req, res) {
    res.send('API is running');
});
app.listen(1337, function(){
    console.log('Express server listening on port 1337');
});