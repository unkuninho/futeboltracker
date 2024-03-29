window.addEventListener("load", function() {
    // Array de informações das partidas
    var partidas = [
        { data: new Date("2024-05-14"), time1: "Internacional", time2: "Bahia", campeonato: "Campeonato Brasileiro", poster: "poster1.jpg" },
        { data: new Date("2024-05-14"), time1: "Cruzeiro", time2: "Botafogo", campeonato: "Campeonato Brasileiro", poster: "poster2.jpg" },
        { data: new Date("2024-05-14"), time1: "Vitória", time2: "Palmeiras", campeonato: "Campeonato Brasileiro", poster: "poster3.jpg" },
        { data: new Date("2024-05-14"), time1: "Fluminense", time2: "Bragantino", campeonato: "Campeonato Brasileiro", poster: "poster4.jpg" },
        { data: new Date("2024-05-14"), time1: "Vasco da Gama", time2: "Grêmio", campeonato: "Campeonato Brasileiro", poster: "poster5.jpg" },
        { data: new Date("2024-05-14"), time1: "Corinthians", time2: "Atlético-MG", campeonato: "Campeonato Brasileiro", poster: "poster6.jpg" },
        { data: new Date("2024-05-14"), time1: "São Paulo", time2: "Fortaleza", campeonato: "Campeonato Brasileiro", poster: "poster7.jpg" },
        { data: new Date("2024-05-14"), time1: "Athletico-PR", time2: "Cuiabá", campeonato: "Campeonato Brasileiro", poster: "poster8.jpg" },
        { data: new Date("2024-05-14"), time1: "Atlético-GO", time2: "Flamengo", campeonato: "Campeonato Brasileiro", poster: "poster9.jpg" },
        { data: new Date("2024-05-14"), time1: "Criciúma", time2: "Juventude", campeonato: "Campeonato Brasileiro", poster: "poster10.jpg" }
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
            // URL base para o tweet
            var tweetUrl = "https://twitter.com/compose/tweet";

            // Texto do tweet
            var tweetText = "Acabei de assistir a partida " + partida.time1 + " x " + partida.time2 + " pelo " + partida.campeonato + " no @futeboltracker";

            // Abre a janela de compartilhamento do Twitter
            window.open(tweetUrl + "?text=" + encodeURIComponent(tweetText), "_blank");
        });
    });
});
