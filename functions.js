// Function to check if a number is prime
const isPrime = (num) => {
  if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
  if (num === 2) return true; // 2 is the only even prime number
  if (num % 2 === 0) return false; // Exclude even numbers greater than 2

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false; // If divisible by any odd number, it's not prime
  }

  return true; // If no divisors found, it's prime
};

// Function to calculate the factorial of a number
const factorial = (num) => {
  if (num === 0 || num === 1) return 1; // 0! and 1! are both 1
  
  return Array.from({ length: num }, (_, i) => i + 1) // Create an array [1, 2, ..., num]
    .reduce((acc, curr) => acc * curr, 1); // Multiply all elements together
};

document.querySelector('.submit-input').addEventListener('click', () => {
  const numberInput = document.querySelector('.number-input').value.trim();
  
  if (numberInput === "") {
    document.querySelector('#prime-output').textContent = "Input cannot be empty. Please enter a number.";
    document.querySelector('#factorial-output').textContent = "";
  } else {
    const number = parseInt(numberInput, 10);

    if (isNaN(number) || number <= 0) {
      document.querySelector('#prime-output').textContent = "Please enter a valid positive integer.";
      document.querySelector('#factorial-output').textContent = "";
    } else {
      // Clear previous outputs
      document.querySelector('#prime-output').textContent = "";
      document.querySelector('#factorial-output').textContent = "";

      // Perform prime check and factorial calculation
      const primeResult = isPrime(number) ? `${number} is a prime number.` : `${number} is not a prime number.`;
      const factorialResult = `Factorial of ${number} is ${factorial(number)}.`;

      // Display results
      document.querySelector('#prime-output').textContent = primeResult;
      document.querySelector('#factorial-output').textContent = factorialResult;
    }
  }
});

document.querySelector('.reset-input').addEventListener('click', () => {
  document.querySelector('.number-input').value = "";
  document.querySelector('#prime-output').textContent = "";
  document.querySelector('#factorial-output').textContent = "";
});
