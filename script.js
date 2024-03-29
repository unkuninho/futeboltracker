window.addEventListener("load", function() {
    // Array de informações das partidas
    var partidas = [
        { data: new Date("2024-05-14"), time1: "Internacional", time2: "Bahia", campeonato: "Campeonato Brasileiro", poster: "poster1.jpg", imagem_twitter: "partida1.jpg" },
        { data: new Date("2024-05-14"), time1: "Cruzeiro", time2: "Botafogo", campeonato: "Campeonato Brasileiro", poster: "poster2.jpg", imagem_twitter: "partida2.jpg" },
        { data: new Date("2024-05-14"), time1: "Vitória", time2: "Palmeiras", campeonato: "Campeonato Brasileiro", poster: "poster3.jpg", imagem_twitter: "partida3.jpg" },
        { data: new Date("2024-05-14"), time1: "Fluminense", time2: "Bragantino", campeonato: "Campeonato Brasileiro", poster: "poster4.jpg", imagem_twitter: "partida4.jpg" },
        { data: new Date("2024-05-14"), time1: "Vasco da Gama", time2: "Grêmio", campeonato: "Campeonato Brasileiro", poster: "poster5.jpg", imagem_twitter: "partida5.jpg" },
        { data: new Date("2024-05-14"), time1: "Corinthians", time2: "Atlético-MG", campeonato: "Campeonato Brasileiro", poster: "poster6.jpg", imagem_twitter: "partida6.jpg" },
        { data: new Date("2024-05-14"), time1: "São Paulo", time2: "Fortaleza", campeonato: "Campeonato Brasileiro", poster: "poster7.jpg", imagem_twitter: "partida7.jpg" },
        { data: new Date("2024-05-14"), time1: "Athletico-PR", time2: "Cuiabá", campeonato: "Campeonato Brasileiro", poster: "poster8.jpg", imagem_twitter: "partida8.jpg" },
        { data: new Date("2024-05-14"), time1: "Atlético-GO", time2: "Flamengo", campeonato: "Campeonato Brasileiro", poster: "poster9.jpg", imagem_twitter: "partida9.jpg" },
        { data: new Date("2024-05-14"), time1: "Criciúma", time2: "Juventude", campeonato: "Campeonato Brasileiro", poster: "poster10.jpg", imagem_twitter: "partida10.jpg" }
    ];

    // Cria o container para as partidas
    var partidasContainer = document.createElement('div');
    partidasContainer.classList.add('partidas-container');
    document.body.appendChild(partidasContainer);

    // Loop sobre as partidas
    partidas.forEach(function(partida, index) {
        // Cria o elemento para a partida
        var partidaElement = document.createElement('div');
        partidaElement.classList.add('partida');
        partidasContainer.appendChild(partidaElement);

        // Cria e adiciona a data da partida
        var dataPartidaElement = document.createElement('p');
        dataPartidaElement.innerHTML = 'Data da Partida: <span class="dataPartida">' + partida.data.toLocaleDateString("pt-BR") + '</span>';
        partidaElement.appendChild(dataPartidaElement);

        // Cria e adiciona o campeonato
        var campeonatoElement = document.createElement('p');
        campeonatoElement.innerHTML = 'Campeonato: <span class="campeonato">' + partida.campeonato + '</span>';
        partidaElement.appendChild(campeonatoElement);

        // Cria e adiciona a imagem do poster
        var imgElement = document.createElement('img');
        imgElement.src = partida.poster;
        imgElement.alt = 'Poster da Partida ' + (index + 1);
        partidaElement.appendChild(imgElement);

        // Cria e adiciona o botão de compartilhamento do Twitter
        var btnCompartilharTwitter = document.createElement('button');
        btnCompartilharTwitter.classList.add('compartilharTwitter');
        btnCompartilharTwitter.textContent = 'Compartilhar no Twitter';
        partidaElement.appendChild(btnCompartilharTwitter);

        // Adiciona um evento de clique ao botão de compartilhamento do Twitter
        btnCompartilharTwitter.addEventListener("click", function() {
            // URL da imagem para o Twitter
            var urlImagemTwitter = partida.imagem_twitter;
            
            // Texto do tweet
            var textoTweet = "Acabei de assistir ao jogo entre " + partida.time1 + " x " + partida.time2 + " no " + partida.campeonato + "! ⚽ @futeboltracker";

            // Chamada à função para postar no Twitter
            window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(textoTweet), "_blank");
        });
    });
});
