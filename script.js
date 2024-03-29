function redirectToTwitter(partida, imagem) {
  var mensagem = "Acabou de assistir a partida " + partida;
  var imagemUrl = window.location.href + imagem;

  var tweetUrl = "https://twitter.com/compose/tweet?text=" + encodeURIComponent(mensagem) + "&url=" + encodeURIComponent(imagemUrl);
  
  window.open(tweetUrl, "_blank");
}
