const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

it('should return "fizz-buzz" if multiple of 15', function() {
    const normalCases = [-15, 15, 30, 45];
    
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      answer.should.equal('fizz-buzz');
    });
  });

it('should return "buzz" if multiple of 5', function() {
    const normalCases = [-5, 5, 10, 15];
    
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      answer.should.equal('buzz');
    });
  });

it('should return "fizz" if multiple of 3', function() {
    const normalCases = [-3, 3, 6, 9];
    
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      answer.should.equal(input);
    });
  });

it('should return number if number is not multiple of 3 or 5', function() {

	const normalCases = [-3, 3, 6, 9];
    
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      answer.should.equal('fizz');
    });
  });

it('should run error message if input is not a number', function() {
    const badInputs = ['L', true, false, 'spaghetti'];
    
    badInputs.forEach(function(input) {
      (function() {
          fizzBuzzer(input)
      }).should.throw(Error);
    });
  });
});