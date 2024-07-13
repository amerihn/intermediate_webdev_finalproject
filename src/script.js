//STEP 1:

const calculateSimpleInterest = (principal, rate, time) => {
  return (principal * rate * time) / 100;
};
const calculateTotalPayableAmount = (principal, interestAmount) => {
  return principal + interestAmount;
};

const calculate = () => {
  let p = Number(document.getElementById("principal").value);
  let r = Number(document.getElementById("rate").value);
  let t = Number(document.getElementById("time").value);
  
  let simpleInterest = calculateSimpleInterest(p, r, t);
  let amount = calculateTotalPayableAmount(p, simpleInterest);

  let result = document.getElementById("result");

  result.innerHTML = `<div>Principal Amount: <span>${p.toFixed(2)}</span></div>
  <div>Total Interest: <span>${simpleInterest.toFixed(2)}</span></div>
  <div>Total Amount: <span>${amount.toFixed(2)}</span></div>`;
};

//use Jasmine to test this vanilla JavaScript code

if (typeof module !== 'undefined')
  module.exports = { calculateSimpleInterest, calculateTotalPayableAmount, calculate };
//The above code simply exports functions when working in a NodeJS environment 
//and will make it visible to the Jasmine testing suite.

//Install Jasmine, cm:
// npm install --save-dev jasmine
// npx jasmine init
// npx jasmine
//"Incomplete: No specs found"

//Create a file in spec/: scriptSpec.js