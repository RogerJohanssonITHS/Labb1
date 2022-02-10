const jsonRequest = new Request("../json/courses.json");


const courses = [];

class Course {
    constructor(input) {
      this.courseName = input.courseName;
      this.image = input.image;
      this.learningPath = input.learningPath;
      this.contents = input.contents;
      this.prerequisites = input.prerequisites;
      this.teacher = input.teacher;
      this.averagescore = input.averagescore;

    }
  }

  fetch(jsonRequest)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      const course = new Course(data[i]);
      courses.push(course);
    }
    //createCourseList(courses);
  })
  .catch(console.error);

//creates table with course info from the filtered list
function displayFilteredCourseList() {
    var isItCreated = document.getElementById("myFilteredCourseList");
    if(isItCreated){
        return;
    }
    //Which learningPath checkboxes are checked?
    //var x = document.getElementById("myCheck").checked;
    let div = document.createElement("div");
    div.id = "myFilteredCourseList";
    document.body.appendChild(div);
    for (let i = 0; i < courses.length; i++) {
        const course = courses[i];

        //add course image and course description
        div.innerHTML += `<table width = "600px"><tr><td><img src="../images/${course.image.imageName}" alt="${course.image.imageAltText}"
        title="${course.image.imageTitle}" width="200" height="125"></td><td><p>${course.contents}<br>
        Lärare: ${course.teacher.firstName} ${course.teacher.lastName}</p></td></tr></table>`

        //loop over learningPath and add checkboxes
        for (let j  = 0; j   < course.learningPath.length; j++) {
            const element = course.learningPath[j];
            div.innerHTML += `<input class="input-second" type="checkbox" id="${element}" name="${element}" value="klassrum"> ${element}`             
        }
        //add a divider
        div.innerHTML += `<br><br><br>`


    }
}


function clearList() {
    var myList = document.getElementById("myFilteredCourseList");
    myList.remove();
}

function sortList(){

}
