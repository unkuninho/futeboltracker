function redirectToTwitter(partida) {
    var mensagem = "Acabou de assistir a partida " + partida;
    var imagem = "https://github.com/unkuninho/futeboltracker/blob/main/fcbarcelonaxrealmadrid.jpg?raw=true"; // URL direto da imagem hospedada
  
    var tweetUrl = "https://twitter.com/compose/tweet?text=" + encodeURIComponent(mensagem) + "&url=" + encodeURIComponent(imagem);
    
    window.open(tweetUrl, "_blank");
}
