let ohceSession;

class MockDate {
  constructor(hours) {
    this.hours = hours;
  }
  getHours() {
    return this.hours;
  }
}

class Ohce {
  session;

  constructor(date) {
    this.date = date;
  }

  run(cmd, name = 'Pepito') {
    if (cmd === 'start') {
      this.session = name;
      return greeting(this.date.getHours()) + ' ' + name;
   }

   if (!this.session) throw 'error';

   if (cmd === 'stop') {
      const sessionName = this.session;
      this.session = undefined;
      return 'Au revoir ' + sessionName;
   }

   return checkPalindrom(cmd) ? 'PALINDROM !!' : reverse(cmd);
  }
}

const reverse = string => string.split('').reverse().join('');

const checkPalindrom = string => string === reverse(string);

const greeting = hour => {
  if (!hour) throw 'erreur';
  if (typeof hour === 'string') throw 'erreur';
  return hour < 6 ? 'Bonne nuit' : hour < 17 ? 'Bonjour' : hour < 23 ? 'Bonsoir' : 'Bonne nuit';
}

beforeEach(() => {
   ohceSession = new Ohce(new MockDate(9));
})

test("reverse('allo') retourne 'olla", () => {
   expect(reverse('allo')).toBe('olla');
 })

 test("checkPalindrom('allo') retourne false", () => {
   expect(checkPalindrom('allo')).toBe(false);
 })

 test("checkPalindrom('bob') retourne true", () => {
   expect(checkPalindrom('bob')).toBe(true);
 })


 test("ohce('allo') retourne 'olla' si start préalable", () => {
    ohceSession.run('start');
    expect(ohceSession.run('allo')).toBe('olla');
})

test("ohce('allo') retourne une erreur sans start préalable", () => {
   expect(() => ohceSession.run('allo')).toThrow();
})

test("ohce('bob') retourne 'PALINDROM !!' si start préalable", () => {
  ohceSession.run('start');
   expect(ohceSession.run('bob')).toBe('PALINDROM !!');
})

test("greeting() retourne une erreur", () => {
  expect(() => greeting()).toThrow();
})

test("greeting('lol') retourne une erreur", () => {
  expect(() => greeting('lol')).toThrow();
})

test("greeting(8) retourne 'Bonjour'", () => {
   expect(greeting(8)).toBe('Bonjour');
 })

 test("greeting(4) retourne 'Bonne nuit'", () => {
   expect(greeting(4)).toBe('Bonne nuit');
 })

 test("greeting(19) retourne 'Bonsoir'", () => {
   expect(greeting(19)).toBe('Bonsoir');
 })

 test("greeting(23) retourne 'Bonne nuit'", () => {
   expect(greeting(23)).toBe('Bonne nuit');
 })

 test("ohce('start', 'Nico') retourne 'Bonjour Nico' à 9h", () => {
   ohceSession = new Ohce(new MockDate(9));
   expect(ohceSession.run('start', 'Nico')).toContain('Bonjour Nico');
 })

 test("ohce('start', 'Nico') retourne 'Bonsoir Nico' à 19h", () => {
  ohceSession = new Ohce(new MockDate(19));
  expect(ohceSession.run('start', 'Nico')).toContain('Bonsoir Nico');
})

test("ohce('start') retourne 'Bonjour Pepito' à 9h", () => {
  ohceSession = new Ohce(new MockDate(9));
  expect(ohceSession.run('start', 'Pepito')).toContain('Bonjour Pepito');
})

 test("ohce('stop') retourne 'Au revoir Pepe' si 'start Pepe' préalable", () => {
   ohceSession.run('start', 'Pepe');
   expect(ohceSession.run('stop')).toBe('Au revoir Pepe');
})

test("ohce('allo') retourne une erreur avec un start puis un stop préalable", () => {
  ohceSession.run('start', 'Nico');
  ohceSession.run('stop');
  expect(() => ohceSession.run('allo')).toThrow();
})