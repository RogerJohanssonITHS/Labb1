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
  
//list course and learning path with check box.
//use local storage variable b
// course name    learning path    checkbox

var receivedValues = localStorage.getItem("myValue");
var useForList = JSON.parse(receivedValues);
alert("The Value Received is " + useForList);

/* let div = document.createElement("div");
div.id = "myCoursesInCart";
document.body.appendChild(div);
for (let i = 0; i < useForList.length; i++) {
  //const course = courses[i];
  div.innerHTML += `${useForList[i]}`;
  div.innerHTML += `<input class="input-second" type="checkbox" id="tabort" name="${useForList[i]}" value="${useForList[i]}">Ta bort`;
} */



var node = document.createElement("li");
var textnode = document.createTextNode("");
//node.appendChild(textnode);
//document.getElementById("myCoursesInList").appendChild(node);
for (let i = 0; i < useForList.length; i++) {
  //const course = courses[i];
  textnode = document.createTextNode(`${useForList[i]}`);
  node = document.createElement("li");
  node.innerHTML += `<input class="input-second" type="checkbox" id="tabort" name="${useForList[i]}" value="${i}">Ta bort&nbsp&nbsp`;
  node.appendChild(textnode);
  
  document.getElementById("myCoursesInList").appendChild(node);
  //div.innerHTML += `${useForList[i]}`;
  //div.innerHTML += `<input class="input-second" type="checkbox" id="tabort" name="${useForList[i]}" value="${useForList[i]}">Ta bort`;
}
//const textnode = document.createTextNode("Water");
//node.appendChild(textnode);
//document.getElementById("myCoursesInCart").appendChild(node);

var resetValue = 0;
localStorage.setItem("myValue", resetValue);




function refreshList() {
  //function to remove courses from cart where Ta bort is selected
  var myList = document.getElementById("myCoursesInList");
  let valuesCoursesInCart = [];
  //find checkboxes
  //let valuesCoursesInCart = [];
  let checkboxesCoursesInCart = document.querySelectorAll('input[id="tabort"]:checked');  // #tabort:checked

    checkboxesCoursesInCart.forEach((checkbox) => {
      valuesCoursesInCart.push(checkbox.value);
  });
    //checkboxesCoursesInCart[i].remove();
    //checkboxesCoursesInCart[i].parentNode.removeChild(checkboxesCoursesInCart[i]);
    //var itemToRemove = document.getElementById(checkboxesCoursesInCart[i]);
    //itemToRemove.parentNode.removeChild(itemToRemove);
    //document.getElementById(checkboxesCoursesInCart[i]).innerHTML = '';
    //document.getElementById('myList').innerHTML = '';
    //var ulElem = document.getElementById('myList');
    for (let j = 0; j < valuesCoursesInCart.length; j++) {
      const element = valuesCoursesInCart[j];
      myList.removeChild(myList.childNodes[element])
    }
    
    //myList.removeChild(myList.childNodes[0])

  //compare value from checkbox and id. If matches, remove.
  

  //myList.remove();
}

/* function removeItem(item){
  var itemToRemove = document.getElementById(item);
  itemToRemove.parentNode.removeChild(itemToRemove);
} */

/* const myNodelist = document.querySelectorAll("p");
for (let i = 0; i < myNodelist.length; i++) {
  myNodelist[i].style.color = "red";
} */


/* function rem() {
  var list = document.getElementById('div'),
      items = Array.prototype.slice.call(list.childNodes),
      item;
  while (item = items.pop()) {
      if (item.firstChild && item.firstChild.checked) {
          list.removeChild(item);
      }
  }
} */


