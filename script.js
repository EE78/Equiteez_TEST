const modal = document.getElementById("signUpModal");
const signBtn = document.getElementById("openModal");
const signSpan = document.getElementsByClassName("closeModal")[0];
signBtn.onclick = function () {
  modal.style.display = "block";
};
signSpan.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const headerModal = document.getElementById("headerModal");
const headerModalBtn = document.getElementById("openHeaderModal");
const headerSpan = document.getElementsByClassName("closeHeaderModal")[0];
headerModalBtn.onclick = function () {
  headerModal.style.display = "block";
};
headerSpan.onclick = function () {
  headerModal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == headerModal) {
    headerModal.style.display = "none";
  }
};
