

//get the DOM elements
const studentList = document.getElementsByClassName('student-item cf');
const studentItem = studentList.children;
const numItems = 10;
const divPage = document.querySelector('.page');
const pagination = document.createElement('div');
pagination.className = ("pagination");

// this function limits how many items will be shown each page

var showPage = (list, page) => {

  let indexFirst = (page * numItems) - numItems;
  let indexLast  = (page * numItems) - 1;

  for (let i = 0; i < list.length; i++) {
    if (i >= indexFirst && i <= indexLast) {
      list[i].style.display = ('block');
    }
      else {
        list[i].style.display = ('none');
      }
  }
};

//function to reset pagination for a different list
const reset = () => {
   pagination.innerHTML = '';
}

//calls function for the initial page
showPage(studentList, 1);

// create and add the links for the pagination
function appendPageLinks(list) {

  let numPages = Math.ceil(list.length/10); //gets the number of pages needed
  let ul = document.createElement('ul');

  divPage.appendChild(pagination);
  pagination.appendChild(ul);

  for (let i=1; i <= numPages; i++) {
    let li = document.createElement('li');
    let link = document.createElement('a');
    ul.appendChild(li);
    li.appendChild(link);
    link.href = '#';
    link.textContent = i;

//add funcionality to the page's buttons
    link.addEventListener('click', (e) => {
      showPage(list, i);
    })
  }
};

//call function for the pagination of the students list
appendPageLinks(studentList);


//student search
const divSearch = document.createElement('div');
const input = document.createElement('input');
const searchButton = document.createElement('button');
const studentName = document.getElementsByTagName('h3');
const filteredList = [];
divSearch.className = ('student-search');
input.placeholder = "Search for students...";
searchButton.textContent = 'Search';

document.querySelector('.page-header').appendChild(divSearch);
divSearch.appendChild(input);
divSearch.appendChild(searchButton);

//function filters the list and hides the rest of the items
function searchStudent() {
  for (let x = 0; x < studentList.length; x++) {
    if (studentName[x].innerHTML.includes(input.value.toLowerCase())) {
      studentList[x].style.display = ('block')
      filteredList.push(studentList[x].parentNode.parentNode);

    }
      else {
        studentList[x].style.display = ('none');

      }
  }

  reset();
  console.log(filteredList.length);
  showPage(filteredList, 1);
  appendPageLinks(filteredList);

};


searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  searchStudent();
});
