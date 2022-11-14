function fizzBuzz(entrada) {
  if (typeof entrada !== "number") return "nao é um numero";
  if (entrada % 3 === 0 && entrada % 5 === 0) return "FizzBuzz";
  if (entrada % 3 === 0) return "Fizz";
  if (entrada % 5 === 0) return "Buzz";
  return entrada;
}
console.log(fizzBuzz(30));
