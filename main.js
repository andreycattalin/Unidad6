const divPrincipal = document.getElementById("gatitos");

divPrincipal.classList.add("grid", "grid-cols-2", "md:grid-cols-3", "lg:grid-cols-4", "gap-4", "p-4");

function mostrarGatitos() {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
        .then(response => response.json())
        .then(data => {
            console.log(data);

            data.forEach(gato => {
                const imgContainer = document.createElement("div");
                imgContainer.classList.add("bg-white", "rounded-lg", "shadow-lg", "overflow-hidden", "p-2", "transition", "transform", "hover:scale-105");
                
                const imgElement = document.createElement("img");
                imgElement.src = gato.url;
                imgElement.alt = "Gatito";
                imgElement.classList.add("w-full", "h-48", "object-cover", "rounded-md");
                
                imgContainer.appendChild(imgElement);
                divPrincipal.appendChild(imgContainer);
            });
        })
        .catch(error => {
            console.error(error);
        });
}

mostrarGatitos();
