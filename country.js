const allCountry = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => getData(data))
}
allCountry();
const getData = data => {
    const parentDiv = document.getElementById('insert')
    data.forEach(create => {
        const div = document.createElement('div')
        div.innerHTML = `
               <h3>${create.name}</h3>
               <p>${create.capital}</p>
               <button onclick="seeMore('${create.name}')">details</button>
        `
        div.classList.add('divStyle')
        parentDiv.appendChild(div)
    })
}

const seeMore = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => seeDetalis(data[0]))
}

const seeDetalis = data => {
    console.log(data)
    const div = document.getElementById('country-details')
    div.innerHTML = `
    <h3>${data.population}</h3>
    <img src="${data.flag}" width="100" height="132">
    `
}