const fs = require('fs');
const Twit = require('twit');

// Configure as credenciais da API do Twitter
const T = new Twit({
    consumer_key: 'ceXukIrVEbB8LcnCXwU51GFeb',
    consumer_secret: 'zR9sQhKut5eDnJZaVvlSUD24iWFPAUY5r2mkF2rg6lDvvrLkE0',
    access_token: '1721317413164085249-uBSe3bDOsPH85DIWfprgy2dYdTZP97',
    access_token_secret: 'F1SKesRcGxGcLOOoE3XT2sfbNkiLPcJXwnMz78dZWDcK2',
    timeout_ms: 60 * 1000, // timeout de solicitação de API de 60 segundos
});

// Caminho para a imagem que você deseja anexar
const imagePath = 'D:/Dados/Kunin - 2024/Projeto - Futebol Star/Poster jogo/partida_vista/partida1.jpg';

// Lê a imagem do arquivo
const imageData = fs.readFileSync(imagePath, { encoding: 'base64' });

// Posta um tweet com a imagem anexada
T.post('media/upload', { media_data: imageData }, (err, data, response) => {
    if (err) {
        console.error('Erro ao fazer upload da imagem:', err);
    } else {
        const mediaIdStr = data.media_id_string;
        const params = { status: 'Acabei de assistir a partida pelo @futeboltracker', media_ids: [mediaIdStr] };

        T.post('statuses/update', params, (err, data, response) => {
            if (err) {
                console.error('Erro ao postar o tweet:', err);
            } else {
                console.log('Tweet postado com sucesso:', data.text);
            }
        });
    }
});
