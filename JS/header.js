document.addEventListener('DOMContentLoaded', function () {
    var header = document.getElementById('myHeader');
  
    // Adiciona a classe 'initial' ao carregar a página
    header.classList.add('initial');
  
    window.addEventListener('scroll', function () {
      // Adiciona a classe 'scrolled' quando a página é rolada
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
        header.classList.remove('initial');
      } else {
        header.classList.remove('scrolled');
        header.classList.add('initial');
      }
    });
  });
  