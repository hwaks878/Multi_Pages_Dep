function closeForgot() {
  let overLay = document.querySelector(".overlay-forgot");
  let iconChange = document.querySelector(".logo-close");
  let showForgot = document.querySelector(".forgot-password-modal");
  overLay.classList.toggle("active");
  showForgot.classList.toggle("active");

  //   console.log("close clicked");
}

const forgotForm = document.querySelector(".forgot-pass-new");
forgotForm.addEventListener("click", closeForgot);
const btnClose = document.querySelector("#btn-close");
btnClose.addEventListener("click", closeForgot);
