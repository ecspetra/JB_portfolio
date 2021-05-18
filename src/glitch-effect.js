$(document).ready(function () {
  $(".main-screen__container__description__headline__text").append(
    "<div class='glitch-window'></div>"
  );
  $("h1.glitched").clone().appendTo(".glitch-window");
});
