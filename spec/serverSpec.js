const request = require('request');

const server = require('../server.js');

const baseURL = 'http://localhost:3000/';


describe('Application Server', function () {
  describe('GET /', function () {
    it('returns status code 200', function (done) {
      request.get(baseURL, function (error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });
});
