const divPrincipal = document.getElementById("gatitos");


function mostrarGatitos() {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    .then(response => response.json())
    .then(data => {
        console.log(data);

        data.forEach(gato => {
            divPrincipal.innerHTML += `<img src="${gato.url}" alt="" srcset="">`
        });
    })
    .catch(error => {
        console.error(error);
    });
}

mostrarGatitos();