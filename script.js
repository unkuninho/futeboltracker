function redirectToTwitter(partida, imagem) {
  var mensagem = "Acabou de assistir a partida " + partida;
  var imagemUrl = window.location.href + imagem;
  var tweetText = mensagem + " " + imagemUrl;

  var tweetUrl = "https://twitter.com/compose/tweet?text=" + encodeURIComponent(tweetText);
  
  window.open(tweetUrl, "_blank");
}
