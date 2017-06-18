const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

const gen_text_path = path.join(__dirname, '/../data/generated_text');
let texts = [];
fs.readdir(gen_text_path, function(err, files) {
    texts = files;
});

app.use('/lgg', express.static('public'));
app.get('/lgg/getGeneratedText', function(req, res) {
    let text = texts[Math.floor(Math.random() * texts.length)];
    fs.readFile(path.join(gen_text_path, text), 'utf8', function(err, data) {
        res.status(200).json({text: data});
    });
});

app.listen(14407, function () {
    console.log('xxx listening on port 14407');
});
