function openClose() {
  //   let menuState = document.querySelector(".nav-item");
  //   menuState.classList.toggle("active");
  let overLay = document.querySelector(".overlay");
  let iconChange = document.querySelector(".logo-hamburger");
  let menuState = document.querySelectorAll(".nav-item");
  console.log(iconChange.innerText);
  for (let element of menuState) {
    element.classList.toggle("active");
  }
  overLay.classList.toggle("active");
  if (overLay.classList.contains("active")) {
    iconChange.innerText = "close";
  } else {
    iconChange.innerText = "menu";
  }
}
const hamburgerBtn = document.querySelector("#btn-menu");
hamburgerBtn.addEventListener("click", openClose);
