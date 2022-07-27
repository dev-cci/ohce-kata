test('toto', () => {
    expect(1).toBe(1)
 })








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

test('allFizzBuzz should return an array of 101 elements with argument 0, 100', () => {
    expect(allFizzBuzz(0, 100).length).toBe(101);
 })

 test('allFizzBuzz should return [0, 1, 2, Fizz, 4, Buzz] with argument 0, 5', () => {
    expect(allFizzBuzz(0, 5)).toStrictEqual([0, 1, 2, 'Fizz', 4, 'Buzz']);
 })

test('fizzbuzz should return 1 with argument 1', () => {
    expect(fizzBuzz(1)).toBe(1);
 })

 test('fizzbuzz should return 2 with argument 2', () => {
    expect(fizzBuzz(2)).toBe(2);
 })

 test('fizzbuzz should return Fizz with argument 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
 })

 test('fizzbuzz should return Fizz with argument 6', () => {
    expect(fizzBuzz(6)).toBe('Fizz');
 })

 test('fizzbuzz should return Buzz with argument 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
 })

 test('fizzbuzz should return Buzz with argument 10', () => {
    expect(fizzBuzz(10)).toBe('Buzz');
 })

 test('fizzbuzz should return FizzBuzz with argument 15', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
 })

 test('fizzbuzz should return FizzBuzz with argument 45', () => {
    expect(fizzBuzz(45)).toBe('FizzBuzz');
 })

 test('fizzbuzz should return 0 with argument 0', () => {
    expect(fizzBuzz(0)).toBe(0);
 })

 test('fizzbuzz should throw error with no argument', () => {
    expect(() => fizzBuzz()).toThrow('Il faut un argument');
 })