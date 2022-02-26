

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal and remove courses list
span.onclick = function() {
  modal.style.display = "none";
  var myList = document.getElementById("myCoursesInList");
  myList.remove();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//read fields from modal.

function saveModalData() { 
  document.getElementById('txtNmeComp').value = document.getElementById('courseName').value;
  //document.getElementById('txtAdrComp').value = document.getElementById('TextArea2').value; 
  //document.getElementById('txtConctComp').value = document.getElementById('TextArea3').value;
  alert("tjoho");
}