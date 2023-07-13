const axios = require('axios');


const getCharById = (res, id)=>{
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
            return {
                id: data.id,
                name: data.name,
                gender: data.gender,
                origin: data.origin,
                image: data.image,
                status: data.status
            }
        })
    .then(data => {
                res.writeHead(200, {"Content-Type": "application/json"}) 
                res.end(JSON.stringify(data))
            }).catch(err =>{
                res.writeHead(500, {"Content-Type": "text/plain"}) 
                res.end(err.message)
            })
}


module.exports = getCharById;