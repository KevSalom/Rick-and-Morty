const server = require('./app');
const PORT = 3001;
const {conn} = require('./DB_connection')
 
server.listen(PORT, async ()=>{
await conn.sync({ alter: true });
console.log('Server raised in port: ' + PORT);
})