

function fetchData() {
    return fetch('https://hub.docker.com/r/morsh92/sf-b9.5.2')
     .then(response =>
        response.text().then(text => text.split(/\r|\n/)))
        
}

fetchData().then(arr => console.log(arr))