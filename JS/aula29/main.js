const FizzBuzz = (n) => {
    if (typeof n !== 'number') return n;
    if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
    if (n % 3 === 0) return 'Fizz';
    if (n % 5 === 0) return 'Buzz';
    return n;
}

console.log(FizzBuzz('ABC'))
for(let i = 0; i <= 100; i++) {
    console.log(i, FizzBuzz(i))
}