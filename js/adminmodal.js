//read current courses.json
const jsonRequest = new Request("../json/courses.json");

const courses = [];

class Course {
  constructor(input) {
    this.courseName = input.courseName;
    this.courseNumber = input.courseNumber;
    this.image = input.image;
    this.learningPath = input.learningPath;
    this.contents = input.contents;
    this.prerequisites = input.prerequisites;
    this.teacher = input.teacher;
    this.averagescore = input.averagescore;
    this.courseLength = input.courseLength;
  }
}

  fetch(jsonRequest)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      const course = new Course(data[i]);
      courses.push(course);
    }
  })
  .catch(console.error);

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

// When the user clicks on <span> (x), close the modal
//save modal data
//create Course object
//save courses.json
span.onclick = function() {
  var modalCourseName = document.getElementById('courseName').value;
  var modalCourseNumber = document.getElementById('courseNumber').value;
  var modalContents = document.getElementById('contents').value;
  var modalCourseLength = document.getElementById('courseLength').value;
  modal.style.display = "none";
  //create Course object
  const modalCourse = new Course(modalCourseName, modalCourseNumber, "Klassrum", modalContents, "NA", "NA", "NA", modalCourseLength);
  courses.push(modalCourse);
  // save data from modal to local storage
  var coursesLocalStorage=courses;
  localStorage.setItem("myAddedCourses", JSON.stringify(coursesLocalStorage));
  window.location.href="admin.html";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
