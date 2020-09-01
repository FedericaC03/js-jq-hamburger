//VARIABILI
var hamburger = $(".fa-bars");
var close = $(".fa-times");
var visible = false;

//GENERO UNA FUNZIONE PER MOSTRARE IL MENU PRINCIPALE CLICCANDO SULL'HAMBURGER
hamburger.click(
  function () {
    if (visible == false) {
      $(".hamburger-menu").fadeIn(1000);
      visible = true;
    }
  }
);

//GENERO UNA FUNZIONE PER NASCONDERE IL MENU PRINCIPALE CLICCANDO SULLA X
close.click(
  function () {
    if (visible == true) {
      $(".hamburger-menu").fadeOut(1000);
      visible = false;
    }
  }
);
