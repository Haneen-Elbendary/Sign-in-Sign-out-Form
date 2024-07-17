// get html elements
// index.html
let userName = document.querySelector("#name");
let password = document.querySelector("#password");
let btn = document.querySelector("#btn");
let form = document.getElementsByTagName("form")[0];
let error = document.querySelector(".error");

if (
  window.localStorage.getItem("name") &&
  window.localStorage.getItem("password")
) {
  window.location.href = "welcome.html";
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let userNameValue = userName.value.trim();
  let passwordValue = password.value.trim();
  if (userNameValue !== "Haneen" || passwordValue !== "1234") {
    error.innerHTML = `invalid Username or password`;
  } else {
    error.innerHTML = "";
    window.localStorage.setItem("name", userNameValue);
    window.localStorage.setItem("password", passwordValue.toString());
    form.submit();
  }
});
