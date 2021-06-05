// window.location
console.log(location)

const currentUrl = new URL(location.href)
const listOfSearch = document.getElementById('listOfSearch')

for (let [key, value] of currentUrl.searchParams.entries()) {
    const li = document.createElement('li')
    li.innerText = `${key.toUpperCase()}: ${value}`
    listOfSearch.append(li)
}
