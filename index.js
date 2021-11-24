let express = require('express');
let path = require('path')

let app = express()
app.use(express.static(__dirname));

app.get('/MotiveInfo', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/MotiveInfo.html'))
})

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/home.html'))
})

app.get('/create', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/create.html'))
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/main.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/login.html'))
})

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/signup.html'))
})

app.listen(8008)