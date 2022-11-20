const app = require('../app')
const chai = require('chai');
const assert = chai.assert;
const request = require('supertest');
const { response } = require('../app');

describe('POST /api/hotel', function(){

    it('Deberia  crea un hotel', function(done){
        request(app)
        .post('/api/hotel/')
        .send({ 
            name: "test",
            photo: ["http://localhost:4000/image"],
            capacity:500,
            cityId: "636d8d149b27960b67b8d7ef",
            userId: "636d8bcade38ce0e1619410e"
        })
        .then(response =>{
            assert.isNumber(response.body.capacity)
            done()
        })
    })

    it('Deberia  crea ser un status code 201', function(done){
        request(app)
        .post('/api/hotel/')
        .send({
            name: "test",
            photo: ["http://localhost:4000/image"],
            capacity:500,
            cityId: "636d8d149b27960b67b8d7ef",
            userId: "636d8bcade38ce0e1619410e"
        })
        .expect(201, done)
    })

})

