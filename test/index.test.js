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
describe('POST a new city', function(){

  it('Should be a string in the name field', function(done){

  const cityTest = {
      name: "66",
      continent: "Europe",
      photo: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      population: 312312,
      userId: "6372d48e597d27b935de756a",
  }

      request(app)
          .post('/api/city')
          .send(cityTest)
          .expect(response => {
              assert.typeOf(response.body.body.name, 'string', 'should be a string')
          })
          .end(function(err,res){
              if(err){
                  return done(err)
              }
              done()
          })
  })
  it('Status code should be of 400 when city cannot be created', function(done){

    const cityTest = {
        name: "66",
        continent: "Europe",
        photo: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        population: 123,
        userId: "cualquierID",
    }

        request(app)
            .post('/api/city')
            .send(cityTest)
            .expect(response => {
                assert.equal(response.status, 400, 'should be 400 status code')
            })
            .end(function(err,res){
                if(err){
                    return done(err)
                }
                done()
            })
    })
})