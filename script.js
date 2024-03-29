function redirectToTwitter(partida) {
  var mensagem = "Acabou de assistir a partida " + partida;
  var imagemUrl = "https://raw.githubusercontent.com/unkuninho/futeboltracker/main/fcbarcelonaxrealmadrid.jpg";

  // Abra a página de composição do tweet com a mensagem e a URL da imagem
  var tweetUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(mensagem) + "&url=" + encodeURIComponent(imagemUrl);
  
  window.open(tweetUrl, "_blank");
}
