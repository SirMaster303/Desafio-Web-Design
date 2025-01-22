// Modal de vídeo
const videoModal = document.getElementById('video-modal');
const openVideo = document.getElementById('open-video');
const closeVideo = document.getElementById('close-video');
const iframe = videoModal.querySelector('iframe'); // Seleciona o iframe do vídeo

// Abre o modal ao clicar no botão "Assistir Apresentação"
openVideo.addEventListener('click', (e) => {
    e.preventDefault();
    videoModal.classList.add('active');
});

// Fecha o modal e pausa o vídeo ao clicar no botão de fechar
closeVideo.addEventListener('click', () => {
    videoModal.classList.remove('active');
    pauseVideo();
});

// Fecha o modal e pausa o vídeo ao clicar fora do conteúdo
videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        videoModal.classList.remove('active');
        pauseVideo();
    }
});

// Função para pausar o vídeo
function pauseVideo() {
    const src = iframe.src; // Pega o URL do iframe
    iframe.src = '';        // Remove o URL para parar o vídeo
    iframe.src = src;       // Restaura o URL para que o vídeo possa ser reproduzido novamente
}
