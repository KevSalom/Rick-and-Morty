const app = require('../app');
const session = require('supertest');
const agent = session(app);
const [user]= require('../utils/users')

describe("Test de RUTAS",() => {

describe("GET /rickandmorty/character/:id",() => {
    it("Responde con status: 200", async () => {
        const response = await agent.get('/rickandmorty/character/1');
        expect(response.statusCode).toEqual(200)
    });

    it('Responde un objeto con las propiedades: "id", "name", "gender", "status", "origin" e "image"', async() => {
        const response = await agent.get('/rickandmorty/character/1');
        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('name');
        expect(response.body).toHaveProperty('gender');
        expect(response.body).toHaveProperty('status');
        expect(response.body).toHaveProperty('origin');
        expect(response.body).toHaveProperty('image');
    });

    it('Si hay un error responde con status: 404', async() => {
        const response1 = await agent.get('/rickandmorty/character/950');
        const response2 = await agent.get('/rickandmorty/character/0');
        expect(response1.statusCode).toEqual(404);
        expect(response2.statusCode).toEqual(404);
    })
})

describe("GET /rickandmorty/login", () => {

    it('Responde con {access:true} cuando se le proporcionan los datos correctos', async () => {
        const URL =  `/rickandmorty/login?email=${user.email}&password=${user.password}`;
        const response = await agent.get(URL);
       expect(response.body).toEqual({access:true})
     });

     it('Responde con {access:false} cuando se proporcionan datos incorrectos', async () => {
        const response = await agent.get('/rickandmorty/login?email=kevfdsaloms@gmail.com&password=123ff456');
       expect(response.body).toEqual({access:false})
     })

})

describe("POST /rickandmorty/fav", () => {
    const firstUser = {id:2, name:'tukis'};
    const secondUser = {id:6, name:'holis'}

    it('Lo que se envia por body debe ser devuelto en una arreglo', async () => {
        const firstPost = await agent.post('/rickandmorty/fav').send(firstUser)
        expect(firstPost.body).toEqual([firstUser])

    })

    it('Si vuelvo a enviar u nuevo elemento, este debe ser devuelto en un arreglo que incluye un elemento enviado previamente', async () => {
        const secondPost = await agent.post('/rickandmorty/fav').send(secondUser);
        expect(secondPost.body).toEqual([firstUser, secondUser])

    })
})

describe("DELETE /rickandmorty/fav/:id",() => {
    const firstUser = {id:2, name:'tukis'};
    const secondUser = {id:6, name:'holis'}

    it("En caso de que no haya ningún personaje con el ID que envías, debe retornar un arreglo con los elementos previos sin modificar", async () => {
        const deleteReq = await agent.delete('/rickandmorty/fav/3');
        expect(deleteReq.body).toEqual([firstUser, secondUser])
    });

    it("El personaje enviado por params se debe eliminar correctamente", async () => {
        const deleteReq = await agent.delete('/rickandmorty/fav/2');
        expect(deleteReq.body).toEqual([secondUser])
    });

    

});

})