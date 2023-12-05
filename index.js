var modal = document.querySelector("#info");
var openBtn = document.querySelector("#logo_btn");

var closeBtn = document.querySelector("#close_btn");

openBtn.onclick = function () {
  modal.style.display = "block";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
