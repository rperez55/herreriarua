let deferredPrompt;
const btnInstalar = document.getElementById('btnInstalar');

window.addEventListener('beforeinstallprompt', (e) => {
  // Previene que aparezca la barra de información automática en navegadores móviles
  e.preventDefault();
  deferredPrompt = e;
  // Muestra el botón
  btnInstalar.style.display = 'block';
});

btnInstalar.addEventListener('click', (e) => {
  // Oculta el botón
  btnInstalar.style.display = 'none';
  // Muestra el prompt de instalación nativo
  deferredPrompt.prompt();
  // Espera la respuesta del usuario
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      console.log('Usuario aceptó instalar');
    }
    deferredPrompt = null;
  });
});
