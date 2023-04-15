function openClose() {
  //   let menuState = document.querySelector(".nav-item");
  //   menuState.classList.toggle("active");
  let overLay = document.querySelector(".overlay");
  let menuState = document.querySelectorAll(".nav-item");
  for (let element of menuState) {
    element.classList.toggle("active");
  }
  overLay.classList.toggle("active");
}
document.querySelector("#btn-menu").addEventListener("click", openClose);
