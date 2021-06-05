const request = require("supertest");
var assert = require("assert");
const libSom = require("../addition");

/* describe("GET /", () => {
	var url = "https://hello-ic.herokuapp.com/";

	it("returns status 200", function (done) {
		request(url, function (error, response, body) {
			expect(response.statusCode).to.equal(200);
			done();
		});
	});
}); */

describe("test somme", () => {
	it("test of somme", () => {
		assert.strictEqual(
			5,
			libSom.somme(2, 3),
			"Success pour deux entiers positifs"
		);
	});
});
