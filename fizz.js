const fizzBuzz = (number) => {
    if (number === undefined) throw 'Il faut un argument';
    if (number === 0) return 0;
    if (number % 5 === 0 && number % 3 === 0) return 'FizzBuzz';
    if (number % 3 === 0) return 'Fizz';
    if (number % 5 === 0) return 'Buzz';
    return number;
}

const allFizzBuzz = (min, max) => {
    let result = [];

    for (let index = min; index <= max; index++) {
        result.push(fizzBuzz(index))
    }

    return result;
}

console.log(allFizzBuzz(0, 100));