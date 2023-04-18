function openSignUp() {
  //   let overLay = document.querySelector(".overlay");
  let formSignUp = document.querySelectorAll(".form-signup");

  for (let element of formSignUp) {
    element.classList.toggle("active");
  }
  overLay.classList.toggle("active");
  console.log("Click Join Us");
}

const joinUs = document.querySelector("#joinus");
joinUs.addEventListener("click", openSignUp);
