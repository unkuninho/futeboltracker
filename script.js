function redirectToTwitter(partida) {
  var mensagem = "Acabou de assistir a partida " + partida;

  // Abra a página de composição do tweet com a mensagem
  var tweetUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(mensagem);
  
  window.open(tweetUrl, "_blank");
}
