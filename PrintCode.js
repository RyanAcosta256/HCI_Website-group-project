function logOut()
{
	window.location.href = "./index.html";
}
function finalPage()
{
	window.location.href = "./final.html";
}
function addMore()
{
	window.location.href = "./addfiles.html";
}
function changeImage() {
    var colorDropdown = document.getElementById("color");
    var image = document.querySelector(".placeholderimage");

    if (colorDropdown.value === "baw") {
        image.src = "landscapebw.jpeg";
    } else {
        image.src = "landscapecolor.jpeg";
    }
}
function changeLayout() {
	if (!document.getElementById("document").classList.contains("change")) {
		document.getElementById("document").classList.add("change");
		document.getElementById("placeholderimg").classList.add("change");
	} else {
		document.getElementById("document").classList.remove("change");
		document.getElementById("placeholderimg").classList.remove("change");
	}
}
