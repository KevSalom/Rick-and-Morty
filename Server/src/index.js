const http = require('http');
const data = require('./utils/data.js')

const server= http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes('/rickandmorty/character')){
        const parametros = req.url.split('/');
        const ID = parametros.length - 1;
    }

    const parametros = req.url.split('/');
    const ID = parametros[parametros.length - 1];
    const dataID = data.find(el => el.id == ID);
    res.writeHead(200, {"Content-Type": "application/json"}) 
    res.end(JSON.stringify(dataID))

    

});
server.listen(3001, "localhost")