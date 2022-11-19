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