// welcome.html
let hello = document.querySelector(".hello");
let btn2 = document.querySelector("#btn2");
hello.innerHTML = `Hello,${window.localStorage.getItem("name")}`;
btn2.addEventListener("click", () => {
  window.localStorage.clear();
  window.location.href = "index.html";
});
