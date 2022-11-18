const app = require("../app");
const chai = require("chai");
const assert = chai.assert;
const request = require("supertest");
const { name } = require("ejs");
let should = chai.should();

//describe agrupa los test
describe("/POST city test", () => {
  it("deberia crearme una ciudad", (done) => {
    //casos de prueba
    let city = {
      name: "name",
    };
    chai
      .request("localhost:8000")
      .post("/api/city")
      .send(city)
      .end((err, res) => {
        res.should.be.a("string");
        err.should.have.status(400);
        done();
      });
  });
});
