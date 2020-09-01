//OPZIONE 1
// VARIABILI
// var hamburger = $(".fa-bars");
// var close = $(".fa-times");
// var visible = false;
//
// //GENERO UNA FUNZIONE PER MOSTRARE IL MENU PRINCIPALE CLICCANDO SULL'HAMBURGER
// hamburger.click(
//   function () {
//     if (visible == false) {
//       $(".hamburger-menu").fadeIn(1000);
//       visible = true;
//     }
//   }
// );
//
// //GENERO UNA FUNZIONE PER NASCONDERE IL MENU PRINCIPALE CLICCANDO SULLA X
// close.click(
//   function () {
//     if (visible == true) {
//       $(".hamburger-menu").fadeOut(1000);
//       visible = false;
//     }
//   }
// );


//OPZIONE 2
//CREO LE VARIABILI
var close = $(".close")
var bars = $(".header-right");
var hamburger = $(".hamburger-menu");

//GENERO UNA FUNZIONE PER AGGIUNGERE LA CLASSE ACTIVE
bars.click(
  function () {
    hamburger.addClass("active");
    }
);

//GENERO UNA FUNZIONE PER RIMUOVERE LA CLASSE ACTIVE
close.click(
  function () {
    hamburger.removeClass("active");
  }
);
