///////////////////////////////////////////////////////////////////
// object example

const pharmacist = {
  firstName: 'Mustafa',
  age: 36,
  favSubject: 'biotechnology'
}

// instead of this
// const firstName = pharmacist.firstName;
// const favSubject = pharmacist.favSubject;

// you may use this
const { firstName, favSubject } = pharmacist;

console.log(firstName, favSubject)

///////////////////////////////////////////////////////////////////
// array example

const nums = [3, 5, 7, 9, 11, 13];

const [a, b, c] = nums;

// expected output: 3, 5, 7
console.log(a, b, c);

///////////////////////////////////////////////////////////////////
// function with object example

const hesaplamaYap = (a, b) => {
  return {
    toplama: a + b,
    fark: Math.abs(a - b),
    sonÜrün: a * b
  }
}

const { toplama, sonÜrün, fark } = hesaplamaYap(7, 9);

// expected output: 16, 63, 2
console.log(toplama, sonÜrün, fark);

///////////////////////////////////////////////////////////////////
// function with array example

const mantıkYürüt = (a, b) => {
  return [
    a + b,
    Math.abs(a - b),
    a * b
  ]
}

const [ x, y, z ] = mantıkYürüt(7, 9);

// expected output: 16, 2, 63
console.log(x, y, z);

///////////////////////////////////////////////////////////////////
const icraatYap = ({ isim }) => {
  console.log(isim)
}

icraatYap({isim: 'Mustafa', yaş: 36})

// expected output: Mustafa