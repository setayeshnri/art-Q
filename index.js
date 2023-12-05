const startButton = document.querySelector("#logo_btn");
const popup = document.querySelector("#info");
const closePopupButton = document.querySelector("#close_btn");
startButton.onclick = function () {
  popup.style.display = "block";
};
closePopupButton.onclick = function () {
  popup.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
};
