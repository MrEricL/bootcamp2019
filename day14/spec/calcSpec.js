describe("Calculator", function() {
	var Calculator = require('../lib/Calculator.js');
	var calculator = new Calculator;  
	it("should add two numbers", function() {
	    expect(calculator.add(5,5)).toBe(10);  
	});
	it("should sub two numbers", function() {
	    expect(calculator.sub(5,5)).toBe(0);  
	});
});