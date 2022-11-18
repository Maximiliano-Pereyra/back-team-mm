//const { Assertion } = require('chai')
//let chai = require('chai')
const { assert } = require("chai");
const request = require("supertest");
const app = require("../app");
//let server = require('../controllers/city')

describe("POST/city", function () {
  it("Must response with name", function (done) {
    request(app)
      .post("/api/city")
      .send({
        name: "test",
        continent: "America",
        photo: "[http://localhost:8000/image]",
        population: "200000",
        userId: "636d8bcade38ce0e1619410e",
      })
      .then((res) => {
        assert.isString(res.body.name);
        done();
      });
  });
  it("Must response with 400 status code", function (done) {
    request(app)
      .post("/api/city")
      .send({})
      .expect(400)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });
});

/* chai.should();
describe('POST/api/city', () =>{
  it("It should Post a new city"),(done) =>{
    const city = {
      name: "Buenos Aires"
    }
    chai.request(server)
    .post("/api/city/")
    .send(city)
    .end((err,res)=>{
      res.body.should.have.property('name');
      res.body.should.be.a('object')
      err.should.have.status(400)
      done();
    }) 
  }
}) */
