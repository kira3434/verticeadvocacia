function toggleMenuLateral() {
  var menuLateral = document.querySelector('.menu-lateral');
  var iconeMenu = document.getElementById('icone-menu');

  // Verificar se a classe 'active' está presente
  var isActive = menuLateral.classList.contains('active');

  if (isActive) {
    // Remover classe 'active' para ocultar a div menu-lateral
    menuLateral.classList.remove('active');

    // Restaurar a imagem original do icone-menu
    iconeMenu.src = 'imagens/menu.png';
  } else {
    // Adicionar classe 'active' para exibir a div menu-lateral
    menuLateral.classList.add('active');

    // Alterar a imagem do icone-menu para a imagem desejada
    iconeMenu.src = 'imagens/close.png';
  }
}