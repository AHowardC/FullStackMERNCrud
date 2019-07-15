var supertest = require("supertest");
var should = require("should");
// This agent refers to PORT where program is running.

var server = supertest.agent("http://localhost:5000");

// UNIT test begin

describe("Should return all todos", function() {
  // #1 should return all todos

  it("should return all todos", function(done) {
    server
      .get("/api/todos")
      .expect("Content-type", /json/)
      .expect(200) // This is HTTP response
      .end(function(err, res) {
        // HTTP status should be 200
        res.status.should.equal(200);
        done();
      });
  });
  //  #2 testing for 404 error if the route is unknown
  it("should return 404", function(done) {
    server
      .get("/random")
      .expect(404)
      .end(function(err, res) {
        res.status.should.equal(404);
        done();
      });
  });
});
