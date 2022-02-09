let person1 = {
    firstName: "Kalle",
    lastName: "Anka",
    birthDate: "1945-12-24"
}

let person2 = {
    firstName: "Janne",
    lastName: "Långben",
    birthDate: "1953-02-12"
}

let person3 = {
    firstName: "Benjamin",
    lastName: "Syrsa",
    birthDate: "1967-05-01"
}

let person4 = {
    firstName: "Konrad",
    lastName: "Kabat",
    birthDate: "1987-11-06"
}

const persons = [person1, person2, person3, person4];
/*
{
    "kurser": [
	{
        "namn": "Python som ersättare för JavaScript",
		"undervisningsform": ["klassrum", "distans", "on demand"],
		"innehåll": "Vi lär använda Python som skriptspråk för hemsidor.",
		"förkunskapskrav": ["Python 3.6+ på nybörjarnivå."],
		"lärare": [
			{"förnamn": "Kalle"},
			{"efternamn": "Anka"}
		],
		"medelbetyg": 3.4
	},
	{
        "namn": "Julia",
		"undervisningsform": ["klassrum", "distans"],
		"innehåll": "Julia kan bli nästa generation av Python. Vi lär oss språkets syntax och hur man kommer igång.",
		"förkunskapskrav": ["Python 3.6+ på avancerad nivå.", "Kompilerade språk - vad är det?"],
		"lärare": [
			{"förnamn": "Janne"},
			{"efternamn": "Långben"}
		],
		"medelbetyg": 3.9
	}
]
}
*/

//create test list with courses
let course1 = {
    courseName: "Brython",
    imageName: "Brython.png",
    learningPath: ["klassrum", "distans"],
    contents: "Vi lär oss använda Python som skriptspråk för hemsidor.",
    prerequisites: ["Python 3.6+ på nybörjarnivå."],
    teacher: 
        {firstName: "Kalle",
        lastName: "Anka"},
    averageScore: 3.4
}

let course2 = {
    courseName: "Julia",
    imageName: "Julia.svg",
    learningPath: ["klassrum", "distans", "on demand"],
    contents: "Julia kan bli nästa generation av Python. Vi lär oss språkets syntax och hur man kommer igång.",
    prerequisites: ["Python 3.6+ på avancerad nivå.", "Kompilerade språk - vad är det?"],
    teacher: 
        {firstName: "Janne",
        lastName: "Långben"},
    averageScore: 3.9
}

let course3 = {
    courseName: "COBOL",
    imageName: "COBOL.png",
    learningPath: ["on demand"],
    contents: "COBOL kommer att leva kvar länge och kompetens inom programmespråket börjar bli en bristvara.",
    prerequisites: [""],
    teacher: 
        {firstName: "Kajsa",
        lastName: "Anka"},
    averageScore: 4.6
}

let courses = [course1, course2, course3];

function createList() {
    var isItCreated = document.getElementById("myList");
    if(isItCreated){
        return;
    }
    let div = document.createElement('div');
    div.id = 'myList';
    document.body.appendChild(div);
    var todaysDate = new Date();
    for (let i = 0; i < persons.length; i++) {
        var personBirthDate = new Date(persons[i].birthDate);
        var personsAgeInYears = Math.trunc((todaysDate.getTime() - personBirthDate.getTime())/(1000*60*60*24*365));
        div.innerHTML += `<p>${persons[i].firstName} ${persons[i].lastName} is ${personsAgeInYears} years</p>`
    }
}
//creates table with course info
function createCourseList() {
    var isItCreated = document.getElementById("myList");
    if(isItCreated){
        return;
    }
    let div = document.createElement('div');
    div.id = 'myList';
    document.body.appendChild(div);
    var todaysDate = new Date();
    for (let i = 0; i < courses.length; i++) {
        //var personBirthDate = new Date(persons[i].birthDate);
        //var personsAgeInYears = Math.trunc((todaysDate.getTime() - personBirthDate.getTime())/(1000*60*60*24*365));
        div.innerHTML += `<input class="input" type="checkbox" id="klassrum" name="klassrum" value="klassrum"> Klassrum 
        <img src="../images/${courses[i].imageName}" alt="Brython logo" width="200" height="125"><p>${courses[i].courseName} ${courses[i].contents}
        Lärare: ${courses[i].teacher.firstName}</p>`
    }
}

function clearList() {
    //document.getElementById("myList").innerHTML="";
    var myList = document.getElementById("myList");
    myList.remove();
}

function sortList(){

}
