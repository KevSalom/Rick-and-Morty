const express = require('express');
const morgan = require('morgan')
const server = express();
const app = require('./app')
const PORT = 3001;
const router = require('./routes/index')

server.use(morgan('dev'))

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

server.use(express.json())

server.use('/rickandmorty', router);
 
server.listen(PORT, ()=>{
    console.log('Server raised in port: ' + PORT);
})







// const http = require('http');
// const getCharById = require('./controllers/getCharById')

// const server= http.createServer((req, res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     if(req.url.includes('/rickandmorty/character')){
//         const parametros = req.url.split('/');
//         const ID = parametros[parametros.length - 1];
//         getCharById(res, ID)
//     }
// });
// server.listen(3001, "localhost")