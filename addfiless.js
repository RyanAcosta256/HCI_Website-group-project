function logOut()
{
	window.location.href = "./index.html";
}
function goToPrintSettings()
{
  if (document.getElementById("submit").classList.contains("confirmed")) {
    window.location.href = "./printsettings.html";
  }
}
function addBalance(value) {
    var currentValue = document.getElementById('dollarvalue').textContent;
    var currentBalance = parseFloat(currentValue.substring(1));
    var enteredValue = parseFloat(value);
    if (!isNaN(enteredValue) && enteredValue > 0) {
        var newBalance = currentBalance + enteredValue;
        var newBalanceString = '$' + newBalance.toFixed(2);
        document.getElementById('dollarvalue').textContent = newBalanceString;
        document.getElementById('balanceInput').value = '';
    }
}
document.getElementById("moneyForm").addEventListener('submit', function(event) {
    event.preventDefault();
    addBalance(document.getElementById("balanceInput").value);
  });
  function addFiles() {
    const fileInput = document.getElementById("fileInput");
    fileInput.click();
    const dropSquare = document.getElementById("drop_zone");
    dropSquare.classList.add("confirmed");
    document.getElementById("filetext").classList.add("confirmed");
    document.getElementById("guideText").classList.add("confirmed");
    document.getElementById("submit").classList.add("confirmed");
    document.getElementById("totalcost").textContent = "Total Cost: $1.50";

  }
function deleteFile() {
  const dropSquare = document.getElementById("drop_zone");
  dropSquare.classList.remove("confirmed");
  document.getElementById("filetext").classList.remove("confirmed");
  document.getElementById("guideText").classList.remove("confirmed");
  document.getElementById("submit").classList.remove("confirmed");
  document.getElementById("totalcost").textContent = ("Total Cost: $0.00");
}
function dropHandler(ev) {
  if (!document.getElementById("submit").classList.contains("confirmed")) {
    ev.preventDefault();
    addFiles();
    if (ev.dataTransfer.items) {
      [...ev.dataTransfer.items].forEach((item, i) => {
        if (item.kind === "file") {
          const file = item.getAsFile();
          console.log(`… file[${i}].name = ${file.name}`);
        }
      });
    } else {
      [...ev.dataTransfer.files].forEach((file, i) => {
        console.log(`… file[${i}].name = ${file.name}`);
      });
    }
  }
}
function dragOverHandler(ev) {
  ev.preventDefault();
}
