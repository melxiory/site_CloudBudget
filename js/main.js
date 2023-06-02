/* Установите ширину боковой навигации в 250 пикселей, а левое поле содержимого страницы в 250 пикселей и добавьте черный цвет фона в тело */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("myCanvasNav").style.width = "100%";
  document.getElementById("myCanvasNav").style.opacity = "0.8";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Установите ширину боковой навигации равным 0, левое поле содержимого страницы-равным 0, а цвет фона тела белым */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("myCanvasNav").style.width = "0";
  document.getElementById("myCanvasNav").style.opacity = "0";
  document.body.style.backgroundColor = "white";
}