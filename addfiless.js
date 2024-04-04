
function logOut()
{
	window.location.href = "./index.html";
}
function goToPrintSettings()
{
	window.location.href = "./printsettings.html";
}
function addBalance(){
             const balanceInput = document.getElementById('balanceInput');
            const balanceAmount = parseFloat(balanceInput.value);

            if (!isNaN(balanceAmount) && balanceAmount > 0) {
                console.log(`Adding balance: $${balanceAmount}`);
                const currentBalance = document.getElementById('balance');
                currentBalance.textContent = `Current Balance: $${balanceAmount}`;
                balanceInput.value = '';
            } else {
                alert('Please enter a valid positive number for the balance.');
            }
}
function addFiles(){ 
	const fileInput = document.getElementById('fileInput');
	fileInput.click(); // Trigger file input click event to open file selection dialog
	}

	// Event listener for file input change
	document.getElementById('fileInput').addEventListener('change', handleFileSelect);

function handleFileSelect(event) {
	const files = event.target.files;
	console.log('Selected files:', files);
   
	// Addfile handling logic here
	// Display the names of the selected files
	const fileList = document.getElementById('fileList');
	fileList.innerHTML = ''; // Clear previous file list
	for (let i = 0; i < files.length; i++) {
        	const fileName = files[i].name;
        	const listItem = document.createElement('li');
       		listItem.textContent = fileName;
		fileList.appendChild(listItem);
		}
}
function dropHandler(ev) {
  console.log("File(s) dropped");

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();

  if (ev.dataTransfer.items) {
    // Use DataTransferItemList interface to access the file(s)
    [...ev.dataTransfer.items].forEach((item, i) => {
      // If dropped items aren't files, reject them
      if (item.kind === "file") {
        const file = item.getAsFile();
        console.log(`… file[${i}].name = ${file.name}`);
      }
    });
  } else {
    // Use DataTransfer interface to access the file(s)
    [...ev.dataTransfer.files].forEach((file, i) => {
      console.log(`… file[${i}].name = ${file.name}`);
    });
  }
}
function dragOverHandler(ev) {
  console.log("File(s) in drop zone");

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();
}
