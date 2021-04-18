let linksFilme = ["img/filmes/filme1.jpg", "img/filmes/filme2.jpg", "img/filmes/filme3.jpg", "img/filmes/filme4.jpg", 
                  "img/filmes/filme5.jpg", "img/filmes/filme6.jpg", "img/filmes/filme7.jpg", "img/filmes/filme8.jpg",
                  "img/filmes/filme9.jpg", "img/filmes/filme10.jpg"];

let filmesHref = ["https://www.themoviedb.org/movie/373571-godzilla-king-of-the-monsters", "https://www.themoviedb.org/movie/338762-bloodshot",
                  "https://www.themoviedb.org/movie/283566-evangelion-4-0", "https://www.themoviedb.org/movie/299536-avengers-infinity-war",
                  "https://www.themoviedb.org/movie/299534-avengers-endgame", "https://www.themoviedb.org/movie/775996-outside-the-wire",
                  "https://www.themoviedb.org/movie/399566-godzilla-vs-kong", "https://www.themoviedb.org/movie/791373-zack-snyder-s-justice-league", "https://www.themoviedb.org/movie/577922-tenet", "https://www.themoviedb.org/movie/412656-chaos-walking"];

let altsFilme = ["Godzilla 2: Rei dos monstros", "Bloodshot", "Evangelion 3.0 + 1.0", "Vingadores: Guerra Infinita", 
                 "Vingadores: Ultimato", "Zona de combate", "Godzilla Vs Kong", "Liga da Justiça Snyder's Cut",
                 "Tenet", "Ninguém escapa do ruído"];

let linksSeries = ["img/series/serie1.jpg", "img/series/serie2.jpg", "img/series/serie3.jpg", "img/series/serie4.jpg", 
                   "img/series/serie5.jpg", "img/series/serie6.jpg", "img/series/serie7.jpg", "img/series/serie8.jpg", 
                   "img/series/serie9.jpg", "img/series/serie10.jpg"];

let altsSeries = ["Falcão e o Soldado Invernal", "Flash", "Wandavision", "O Mandaloriano", "Stranger Things", "Rick And Morty",
                  "Futurama", "Doctor Who", "Arquivo X", "Star Wars: Guerra dos Clones"];

let linksDocs = ["img/documentarios/doc1.jpg", "img/documentarios/doc2.jpg", "img/documentarios/doc3.jpg", "img/documentarios/doc4.jpg", 
                 "img/documentarios/doc5.jpg", "img/documentarios/doc6.jpg", "img/documentarios/doc7.jpg", "img/documentarios/doc8.jpg", 
                 "img/documentarios/doc9.jpg", "img/documentarios/doc10.jpg"];

let altsDocs = ["Último Cruzeiro", "Educação Americana: Fraude e Privilégio", "Seremos História?", 
                "Crack: Cocaína, Corrupção e Conspiração", "Visita ao Inferno", "Seaspiracy: Mar Vermelho", "O Dilema das Redes", 
                "If It Bleeds We Can Kill It: The Making of \'Predator\'", "David Attenborough e Nosso Planeta", "The Story of Star Wars"];

//? Carroséis:
let carroselFilmes = document.getElementById("carroselFilmes"); 
let carroselSeries = document.getElementById("carroselSeries");
let carroselDocs = document.getElementById("carroselDocs");

//? Gerador dos filmes:
for(let i = 0; i<linksFilme.length; i++){
    //? Div do item:
    let divItemFilme = document.createElement("div");
    divItemFilme.className = "item";
    
    //? Imagens:
    let imgFilme = document.createElement("img");
    imgFilme.className = "box";
    imgFilme.src = linksFilme[i];
    imgFilme.alt = altsFilme[i];

    divItemFilme.appendChild(imgFilme);
    carroselFilmes.appendChild(divItemFilme);
}

//? Gerador das séries:
for(let i = 0; i<linksSeries.length; i++){
    let divItemSerie = document.createElement("div");
    divItemSerie.className = "item";

    let imgSerie = document.createElement("img");
    imgSerie.className = "box";
    imgSerie.src = linksSeries[i];
    imgSerie.alt = altsSeries[i];

    divItemSerie.appendChild(imgSerie);
    carroselSeries.appendChild(divItemSerie);
}

//? Gerador dos docs:
for(let i = 0; i<linksDocs.length; i++){
    let divItemDoc = document.createElement("div");
    divItemDoc.className = "item";

    let imgDoc = document.createElement("img");
    imgDoc.className = "box";
    imgDoc.src = linksDocs[i];
    imgDoc.alt = altsDocs[i];

    divItemDoc.appendChild(imgDoc);
    carroselDocs.appendChild(divItemDoc);
}