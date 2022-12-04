const container = document.querySelector('.container');

const api = fetch(`https://gogoanime.consumet.org/recent-release`)
.then(data => data.json())
.then(resorce => {
    for(let ani of resorce){
        console.log(resorce)
        recebeDados(ani.animeImg,ani.animeTitle )
        
    }
})

function recebeDados(img, title){
    const img1 = document.createElement('img');
    const titulo = document.createElement('span')
    titulo.setAttribute('class', 'tituloPoster')
    img1.setAttribute('src', img)

    titulo.innerHTML = title
    img1.setAttribute('class', 'poster')

    criaElemento(img1, titulo)
}

function criaElemento(poster, title){
    const posterDiv = document.createElement('div')
    posterDiv.setAttribute('class', 'post')
    posterDiv.appendChild(poster)
    posterDiv.appendChild(title)

    container.appendChild(posterDiv)
    
}