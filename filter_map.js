// does not mutate your original data, just manipulate it and makes a new array

const guyz = [
  { name: 'mustafa', team: 'bjk'},
  { name: 'serdar', team: 'aydinspor'},
  { name: 'ali', team: 'fenerbahce'},
  { name: 'altan', team: 'galatasaray'}
]

// FILTER METHOD
const karaKartallar = guyz.filter((aGuy) => {
  return aGuy.team == 'bjk'
})

// expected output: [ { name: 'mustafa', team: 'bjk' } ]
console.log(karaKartallar)

// MAP METHOD
const isimler = guyz.map((herBirAdam) => {
  return herBirAdam.name
})

// expected output: [ 'mustafa', 'serdar', 'ali', 'altan' ]
console.log(isimler)