//STEP 2: scriptSpec.js

const { calculateSimpleInterest, calculateTotalPayableAmount } = require('../src/script');

describe("Interest Rate Calculator Tests", () => {

  //Test for calculateSimpleInterest
  //principal 1000, rate 5, time 1 => outcome 50
  it("Calculate Simple Interest", () => {
    var actual = calculateSimpleInterest(1000, 5, 1);
    expect(actual).toBe(50);
  });

  //Test for calculateTotalPayableAmount
  //principal 1000, interestAmount 50 => outcome 1050
  it("Calculate Total Interest", () => {
    var actual = calculateTotalPayableAmount(1000, 50);
    expect(actual).toBe(1050);
  });

});

//run cm: 
// npx jasmine
//Started .. 2 specs, 0 failures
