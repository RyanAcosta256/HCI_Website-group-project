function logIn()
{
	window.location.href = "./addfiles.html";
}
function validateUsername() {
				var username = document.getElementById("username").value;
				if (username.length !== 8) {
						document.querySelector(".usernameerror").classList.add("error");
						document.getElementById("username").parentNode.classList.add("error");
						return false;
				} else {
						document.querySelector(".usernameerror").classList.remove("error");
						document.getElementById("username").parentNode.classList.remove("error");
				}
				return true;
}
function validatePassword() {
				var password = document.getElementById("password").value;
				if (password.length !== 10 || password.indexOf('/') !== 4 || password.lastIndexOf('/') !== 7
				|| !isLetter(password.charAt(0)) || !isLetter(password.charAt(1)) || !isNumber(password.charAt(2)) ||
				!isNumber(password.charAt(3)) || !isNumber(password.charAt(5)) || !isNumber(password.charAt(6))
				|| !isNumber(password.charAt(8)) || !isNumber(password.charAt(9))) {
						document.querySelector(".passworderror").classList.add("error");
						document.getElementById("password").parentNode.classList.add("error");
						return false;
				} else {
					 document.querySelector(".passworderror").classList.remove("error");
					document.getElementById("password").parentNode.classList.remove("error");
				}
				return true;
}
function validateForm() {
    var isUsernameValid = validateUsername();
    var isPasswordValid = validatePassword();

    return isUsernameValid && isPasswordValid;
}
function isNumber(i) {
    return (i >= '0' && i <= '9');
}
function isLetter(i) {
  return ((i >= 'A' && i <= 'Z'));
}
var loginButton = document.querySelector('.login-button');
loginButton.addEventListener('click', function(e) {
    e.preventDefault();
    validateUsername();
		validatePassword();
});
