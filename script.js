function redirectToTwitter(partida) {
    var mensagem = "Acabou de assistir a partida " + partida;
    var imagem = "https://example.com/" + partida + ".jpg"; // Substitua example.com pelo local real da imagem
  
    var tweetUrl = "https://twitter.com/compose/tweet?text=" + encodeURIComponent(mensagem) + "&url=" + encodeURIComponent(imagem);
    
    window.open(tweetUrl, "_blank");
  }
  