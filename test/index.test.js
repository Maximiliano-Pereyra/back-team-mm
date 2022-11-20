
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

=======
const app = require("../app");
const chai = require("chai");
const assert = chai.assert;
const request = require("supertest");


describe("GET /api/city", function () {
  it("Should return an array", function (done) {
    request(app)
      .get("/api/city")
      .expect((response) => {
        assert.isArray(response.body.response);
        response.body.response.forEach((element) => {
          assert.isObject(element);
        });
      })
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
  });
});
describe("POST /api/city", function () {
  it("Should be a string", function (done) {
    request(app)
      .post("/api/city")
      .expect((response) => {
        assert.isString(response.name);
      })
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
  });
  it("status 400"),
    function (done) {
      request(app)
        .post("/api/city")
        .expect((response) => {
          assert.isString(response.name);
        })
        .end(function (err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    };
});

