// Task 2: Simple Programs for Operators

// Square of a number
function squareOfNumber(num) {
    return num * num;
  }
  
  console.log(squareOfNumber(5)); // Output: 25
  
  // Swapping 2 numbers
  function swapNumbers(a, b) {
    [a, b] = [b, a];
    return [a, b];
  }
  
  let num1 = 10;
  let num2 = 20;
  console.log(swapNumbers(num1, num2)); 
  
  // Addition of 3 numbers
  function addThreeNumbers(a, b, c) {
    return a + b + c;
  }
  
  console.log(addThreeNumbers(10, 20, 30)); 
  
  // Celsius to Fahrenheit conversion
  function celsiusToFahrenheit(celsius) {
    return ((celsius * 9) / 5) + 32;
  }
  
  console.log(celsiusToFahrenheit(25)); 
  
  // Meter to miles
  function meterToMiles(meter) {
    return meter * 0.000621371;
  }
  
  console.log(meterToMiles(1000)); 
  
  // Pounds to kg
  function poundsToKg(pounds) {
    return pounds * 0.453592;
  }
  
  console.log(poundsToKg(10)); 
  
  // Calculate Batting Average
  function calculateBattingAverage(runs, innings) {
    return runs / innings;
  }
  
  console.log(calculateBattingAverage(500, 20)); 
  
  // Calculate five test scores and print their average
  let testScores = [80, 85, 90, 75, 95];
  let total = 0;
  for (let score of testScores) {
    total += score;
  }
  
  let average = total / testScores.length;
  console.log(average); 
  
 // Power of any number x ^ y
function powerOfNumber(x, y) {
    return Math.pow(x, y);
  }
  
  console.log(powerOfNumber(2, 3)); 
  
  // Calculate Simple Interest
  function simpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
  }
  
  console.log(simpleInterest(1000, 5, 2)); 
  
  // Calculate area of an equilateral triangle
  function areaOfEquilateralTriangle(side) {
    return (Math.sqrt(3) / 4) * Math.pow(side, 2);
  }
  
  console.log(areaOfEquilateralTriangle(5)); 
  
  // Area Of Isosceles Triangle
  function areaOfIsoscelesTriangle(base, height) {
    return (base * height) / 2;
  }
  
  console.log(areaOfIsoscelesTriangle(4, 6)); 
  
  // Volume Of Sphere
  function volumeOfSphere(radius) {
    return (4 / 3) * Math.PI * Math.pow(radius, 3);
  }
  
  console.log(volumeOfSphere(5)); 
  
  // Volume Of Prism
  function volumeOfPrism(baseArea, height) {
    return baseArea * height;
  }
  
  console.log(volumeOfPrism(25, 10)); 
  
  // Find area of a triangle
  function areaOfTriangle(base, height) {
    return (base * height) / 2;
  }
  
  console.log(areaOfTriangle(5, 8)); 
  
  // Calculate Discount Of Product
  function calculateDiscount(actualCost, soldCost) {
    return ((actualCost - soldCost) / actualCost) * 100;
  }
  
  console.log(calculateDiscount(1000, 800)); 
  
  // Given the radius of a circle, find its diameter, circumference, and area.
  function circleCalculations(radius) {
    let diameter = 2 * radius;
    let circumference = 2 * Math.PI * radius;
    let area = Math.PI * Math.pow(radius, 2);
  
    return {
      diameter: diameter,
      circumference: circumference,
      area: area
    };
  }
  
  console.log(circleCalculations(5)); 
  
  // Given two numbers, perform all arithmetic operations
  function arithmeticOperations(a, b) {
    return {
      addition: a + b,
      subtraction: a - b,
      multiplication: a * b,
      division: a / b,
      modulus: a % b,
      exponentiation: Math.pow(a, b)
    };
  }
  
  console.log(arithmeticOperations(10, 5)); 
  
  // Display the asterisk pattern
  console.log("*****\n*****\n*****\n*****\n*****");
  
  // Calculate electricity bill
  function calculateElectricityBill(unitsConsumed, ratePerUnit) {
    return unitsConsumed * ratePerUnit;
  }
  
  console.log(calculateElectricityBill(100, 10)); 
  
  // Program To Calculate CGPA
  function calculateCGPA(subjects) {
    let totalCredits = 0;
    let totalGradePoints = 0;
  
    for (let subject of subjects) {
      totalCredits += subject.credits;
      totalGradePoints += subject.credits * subject.grade;
    }
  
    return totalGradePoints / totalCredits;
  }
  
  let subjects = [
    { name: "Math", credits: 4, grade: 9 },
    { name: "Science", credits: 3, grade: 8 },
    { name: "English", credits: 3, grade: 7 }
  ];
  
  console.log(calculateCGPA(subjects)); 
  
  