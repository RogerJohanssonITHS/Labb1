const btn_get = document.querySelector('#btn_get');
//const btn_check = document.querySelector('#btn_check');
btn_get.addEventListener('click', (event) => {
    let checkboxes = document.querySelectorAll('input[name="learningpath"]:checked');
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    alert(values);
});

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

/* function checkAll() {
    check();
    this.onclick = uncheckAll;
} */

/* function uncheckAll() {
    check(false);
    this.onclick = checkAll;
} */


