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
      answer.should.equal('fizz');
    });
  });

it('should return number if not multiple of 3 or 5', function() {
    const badInputs = [1, 2, 4, 7];
    
    badInputs.forEach(function(input) {
      (function() {
          fizzBuzzer(input)
      }).should.throw(Error);
    });
  });
});