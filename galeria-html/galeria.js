const imagensArmazenar = document.querySelectorAll("img");
//Salva as imagens da galeria no cache do navegador, reduzindo o consumo de banda larga.
caches.open("cache-img-galeria").then(cache => {
    imagensArmazenar.forEach(img => {
        const url = img.src;
        fetch(url).then(response => {
            cache.put(url, response)
        })
    })
})