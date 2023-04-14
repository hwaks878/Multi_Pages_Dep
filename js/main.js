function openClose() {
  //   let menuState = document.querySelector(".nav-item");
  //   menuState.classList.toggle("active");
  let menuState = document.querySelectorAll(".nav-item");
  for (let element of menuState) {
    element.classList.toggle("active");
  }
}
document.querySelector("#btn-menu").addEventListener("click", openClose);
