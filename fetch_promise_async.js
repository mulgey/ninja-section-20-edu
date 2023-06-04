fetch('https://jsonplaceholder.typicode.com/todos/1')
    // fetch bittiğinde alttaki çalışır
    .then((yanıt) => yanıt.json())
    // üstteki kod yanıt içerisinden veriyi parse'lar
    .then((veri) => console.log(veri))

//////////////////////////////////////////////////////////////////////////////////////

// aynısının async & await versiyonu ise aşağıdadır
const getData = async () => {
    const yanıt = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const veri = await yanıt.json()
    console.log(veri)
}

getData()