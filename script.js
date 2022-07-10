const wrapper = document.querySelector(".wrapper"),
  imageElm = document.querySelector(".qr-code img"),
  inputElm = document.querySelector("input"),
  buttonElm = document.querySelector("button");

function btnClickHandler() {
  if (inputElm.value) {
    const userValue = inputElm.value;
    const imageApi = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${userValue}`;
    imageElm.src = imageApi;
    imageElm.onload = () => {
      wrapper.classList.add("active");
    };
  }
}
function inputHandler(e) {
  e.key === "Enter" && btnClickHandler();
  !e.target.value && wrapper.classList.remove("active");
}
window.onload = () => inputElm.focus();
inputElm.onkeyup = inputHandler;
buttonElm.onclick = btnClickHandler;
