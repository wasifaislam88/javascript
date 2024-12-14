function calculator(num1, num2, operator) {
    switch(operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 !== 0) {
          return num1 / num2;
        } else {
          return "Error: Division by zero";
        }
      default:
        return "Invalid operator";
    }
  }
  
  // Example usage:
  let number1 = 10;
  let number2 = 5;
  let operator = '+';
  
  let result = calculator(number1, number2, operator);
  console.log(`${number1} ${operator} ${number2} = ${result}`);
  

