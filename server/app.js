var express = require('express');
var path = require('path'); // модуль для парсинга пути
var app = express();


data = {
	categories: [],
};
data.categories = require('./categories.js');
app.use(express.static(path.join(__dirname, "./build"))); // запуск статического файлового сервера, который смотрит на папку build/ (в нашем случае отдает index.html)
app.get('/categories.js', function (req, res) {
    res.send('API is running');
});
app.get('/wares', function (req, res, next) {
  res.send(data.categories);
});
app.listen(1337, function(){
    console.log('Express server listening on port 1337');
});