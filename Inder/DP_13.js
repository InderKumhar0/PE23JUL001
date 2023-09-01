/*
You are part of a team developing a scientific calculator called "CalcPro." As part of this calculator, you have been assigned the task of creating a feature that calculates the factorial of a given number. This feature will assist users in performing complex mathematical calculations, solving mathematical problems, and analyzing data in various scientific disciplines.

To accomplish this, you decide to create a program that takes a number as input and calculates its factorial. The program will provide users with the factorial value, along with additional functionality to enhance their mathematical capabilities.

When a user opens the CalcPro calculator and selects the factorial calculation feature, they will be prompted to enter the number for which they want to calculate the factorial. The program will display a message like:

Welcome to CalcPro Factorial Calculation!
Please enter the number for which you want to calculate the factorial:


The user can then input the number, for example: 5.

Upon receiving the input, the program will process the number, calculate its factorial, and display the result, saying:

Thank you for providing the number for factorial calculation.
The factorial of 5 is: 120

 */

function countFactorial(num) {
  if (num < 0) {
    throw new Error("Factorial is not defined for negative numbers.");
  }
  if (num == 0 || num == 1) {
    return num;
  } else {
    return num * countFactorial(num - 1);
  }
}

function factorial() {
  console.log("Welcome to CalcPro Factorial Calculation");
  const num = prompt(
    "Please enter the number for which you want to calculate the factorial :"
  );

  if (!num) {
    console.log("no number provided");
    return;
  }

  try {
    const result = countFactorial(num);
    console.log(`The factorial of ${num} is: ${result}`);
  } catch (error) {
    console.log(error);
  }
}

factorial();
