let btnNoticia = document.querySelector('#pegarNoticias');
let noticias = "";
let container = document.querySelector('.row');

btnNoticia.onclick= ()=>{
    // fazendo chamada no API
    fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=39e73172465f417aac188fa8404c9ba6')
    .then(resposta => resposta.json())
    .then(listaNoticias => {
        //console.log(listaNoticias)
        
        listaNoticias.articles.forEach((noticia, index) => {
            let card = `
            <div class ="col-md-3 p-3 mt-3">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${noticia.urlToImage}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${noticia.title}</h5>
                        <p class="card-text">${noticia.description}</p>
                        <a href="${noticia.url}" class="btn btn-primary">Link da Noticia</a>
                    </div>
                </div>
            </div>
            `;

            noticias += card
        });

        container.innerHTML = noticias

    })
}
