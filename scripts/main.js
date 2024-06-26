fetch(`https://randomfox.ca/floof`)
    .then(response => response.json())
    .then(
        (convertedData) => {
            const foxImgEl =document.querySelector("#fox")
            foxImgEl.src = convertedData.image
        }
    )

const getTheCat = async() => {
    const response = await fetch(`http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false`)
    convertedData = await response.json()

    const catImgElement = document.querySelector("#cat")
    catImgElement.src = convertedData[0]
}

getTheCat()

// fetch(`http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false`)
// .then (response => response.json())
// then(convertedData => {
//     const catImgEl = document.querySelector("#cat")
//     catImgEl.src = convertedData[0]
// });