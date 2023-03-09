const logIn = document.getElementById("form_lodIn");
const SingUp = document.getElementById("form_SingUp");
document.getElementById("bt_SingUp").addEventListener("click", () => {
    SingUp.style.display = "none";
    logIn.style.display = "block";
});
document.getElementById("bt_LogIn").addEventListener("click", () => {
    logIn.style.display = "none";
    SingUp.style.display = "block";
});
