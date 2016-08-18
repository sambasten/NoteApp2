var noteapp2 = require('../noteapp2');
var expect = require('chai').expect;

var toGet = new noteapp2('Sam');




describe("create function", function(){
	it("should true if its string", function(){
		expect(toGet.create("some people")).to.equal(true);
	});
});
