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


  //if new courses have been added, use local storage variable
/*   if (localStorage.getItem("myAddedCourses").length !== null) {
    courses = JSON.parse("myAddedCourses", Course);
    alert(courses);
  } */
  if (localStorage.getItem("myAddedCourses") !== null) {
    //courses = JSON.parse("myAddedCourses", Course);
    //alert(courses);
  }


  window.localStorage.removeItem("myAddedCourses");

  //prepare button move to cart
  let btn_movetocart = document.createElement("button");
  btn_movetocart.className = "button";
  btn_movetocart.id = "btn_movetocart"
  btn_movetocart.innerHTML = "Lägg i kundvagn";
  
  btn_movetocart.onclick = function () {
    //move course name and learning path selection to cart
    //const btn_movetocart = document.querySelector('#btn_movetocart');
    const learningPaths = ["Klassrum", "Distans", "On demand"];
    let valuesFilteredList = [];
    let checkboxesFilteredList = document.querySelectorAll('input[name="Klassrum"]:checked');
    checkboxesFilteredList.forEach((checkbox) => {
          valuesFilteredList.push(checkbox.value);
      });
    checkboxesFilteredList = document.querySelectorAll('input[name="Distans"]:checked');
     checkboxesFilteredList.forEach((checkbox) => {
           valuesFilteredList.push(checkbox.value);
       });
    checkboxesFilteredList = document.querySelectorAll('input[name="On demand"]:checked');
    checkboxesFilteredList.forEach((checkbox) => {
          valuesFilteredList.push(checkbox.value);
       });
    //store course name and learning path in local storage
    var valuesForCart=valuesFilteredList;
    localStorage.setItem("myValue", JSON.stringify(valuesForCart));
    window.location.href="courses.html";
    
    //clear list
    clearList();
  };
  

  const btn_get = document.querySelector('#btn_get');
  btn_get.addEventListener('click', (event) => {
      let checkboxes = document.querySelectorAll('input[name="learningpath"]:checked');
      let values = [];
      checkboxes.forEach((checkbox) => {
          values.push(checkbox.value);
      });
      var isItCreated = document.getElementById("myFilteredCourseList");
      if(isItCreated){
          return;         
      }
       //Which learningPath checkboxes are checked?
      let div = document.createElement("div");
      div.id = "myFilteredCourseList";
      document.body.appendChild(div);
      for (let i = 0; i < courses.length; i++) {
        const course = courses[i];

        //select courses where at least one checkbox matches learningPath
        for (let j  = 0; j   < values.length; j++) {
          if (course.learningPath.includes(values[j])) {
              //add course image and course description
              div.innerHTML += `<table><tr><td><img src="../images/${course.image.imageName}" alt="${course.image.imageAltText}"
              title="${course.image.imageTitle}" width="200" height="125"></td><td><p>${course.contents}<br>
              Lärare: ${course.teacher.firstName} ${course.teacher.lastName}</p></td></tr></table>`

              //loop over learningPath and add checkboxes for all options; not just the selected checkboxes
              for (let j  = 0; j   < course.learningPath.length; j++) {
                const element = course.learningPath[j];
                div.innerHTML += `<input class="input-second" type="checkbox" id="${element}" name="${element}" value="${course.courseName}   ${element}"> ${element}`             
                }                
                break;
          }
      }
        //add a divider
        div.innerHTML += `<br><br>`
        //add button
        document.body.appendChild(btn_movetocart);

    }
  });


function clearList() {
    var myList = document.getElementById("myFilteredCourseList");
    var myCartBtn = document.getElementById("btn_movetocart");
    myList.remove();
    myCartBtn.remove();
    uncheckAll();
}

const btn_check = document.querySelector('#btn_clear');
btn_clear.onclick = uncheckAll;

function uncheckAll(checked = false) {
    const checkboxes = document.querySelectorAll('input[name="learningpath"]');
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    });
    var myList = document.getElementById("myFilteredCourseList");
    myList.remove();
}
