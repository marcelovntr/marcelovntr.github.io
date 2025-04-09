

    HTML CSS JS 

    Result
    Skip Results Iframe

// script.js

/* 
   Utilizamos jQuery para facilitar a manipulação do DOM e adicionar interatividade.
   Comentários no código ajudam na manutenção e entendimento futuro.
*/

$(document).ready(function () {
  // Toggle do menu responsivo (hamburger)
  $("#hamburger").click(function () {
    $(".nav-links").slideToggle(300); // Efeito de slide para exibir ou ocultar os itens do menu
  });

  // Animação de rolagem suave para âncoras
  $('a[href^="#"]').on("click", function (event) {
    var target = $(this.getAttribute("href"));
    if (target.length) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: target.offset().top - 50
        },
        800
      );
    }
  });

  // Animação simples no botão CTA: alteração de opacidade ao passar o mouse
  $(".cta-button").hover(
    function () {
      $(this).css("opacity", "0.9");
    },
    function () {
      $(this).css("opacity", "1");
    }
  );
});

