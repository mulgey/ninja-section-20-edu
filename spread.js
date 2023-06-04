const neighbors = ['hasan', 'mesut', 'ahmet', 'mehmet']
const context = { title: 'new title', author: 'new author'}

// expected output: hasan mesut ahmet mehmet
console.log(...neighbors)

const contextWithID = {...context, id: 1}

// expected output: { title: 'new title', author: 'new author', id: 1 }
console.log(contextWithID);
