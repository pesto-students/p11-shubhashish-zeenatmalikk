class Calculator {
    // Add method to calculate the sum of two numbers
    add(a, b) {
      return a + b;
    }
  
    // Subtract method to calculate the difference of two numbers
    subtract(a, b) {
      return a - b;
    }
  
    // Multiply method to calculate the product of two numbers
    multiply(a, b) {
      return a * b;
    }
  
    // Divide method to calculate the quotient of two numbers
    divide(a, b) {
      if (b === 0) {
        throw new Error("Division by zero is not allowed.");
      }
      return a / b;
    }
  }
  
  // Create a ScientificCalculator class that extends Calculator
  class ScientificCalculator extends Calculator {
    // Square method to calculate the square of a number
    square(num) {
      return num * num;
    }
  
    // Cube method to calculate the cube of a number
    cube(num) {
      return num * num * num;
    }
  
    // Power method to calculate the power of a number
    power(base, exponent) {
      return Math.pow(base, exponent);
    }
  }
  
  // Create an instance of the ScientificCalculator class
  const myCalculator = new ScientificCalculator();
  
  // Using the "call" method to invoke the "add" method of Calculator
  const result1 = Calculator.prototype.add.call(myCalculator, 10, 5);
  
  // Using the "apply" method to invoke the "subtract" method of Calculator
  const result2 = Calculator.prototype.subtract.apply(myCalculator, [10, 5]);
  
  // Using the "bind" method to create a "multiplyByTwo" method
  const multiplyByTwo = function (num) {
    return this.multiply(num, 2);
  }.bind(myCalculator);
  
  // Using the "bind" method to create a "powerOfThree" method
  const powerOfThree = function (num) {
    return this.power(num, 3);
  }.bind(myCalculator);
  
  // Optional: Call the "multiplyByTwo" method with argument 5 and print the result
  const result3 = multiplyByTwo(5);
  
  // Optional: Call the "powerOfThree" method with argument 2 and print the result
  const result4 = powerOfThree(2);
  
  // Printing the results
  console.log("Result of add:", result1);
  console.log("Result of subtract:", result2);
  console.log("Result of multiplyByTwo:", result3);
  console.log("Result of powerOfThree:", result4);
  