
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
      list[i].style.display = ('');
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

  let numPages = Math.ceil(list.length/numItems); //gets the number of pages needed
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

//highlights the current page
    if (link.textContent == 1) {
      link.className = 'active'
    };

    link.addEventListener('click', (e) => {
      const currentPage = e.target.textContent;
      const a = document.querySelectorAll('a');
      showPage(list, currentPage);
      for (let i = 0; i < a.length; i++) {
        a[i].className = '';
      }
      e.target.className = 'active';
    });
  }
};

//call function for the pagination of the students list
appendPageLinks(studentList);


//student search
const divSearch = document.createElement('div');
const input = document.createElement('input');
const searchButton = document.createElement('button');
const studentName = document.getElementsByTagName('h3');

divSearch.className = ('student-search');
input.placeholder = "Search for students...";
searchButton.textContent = 'Search';

document.querySelector('.page-header').appendChild(divSearch);
divSearch.appendChild(input);
divSearch.appendChild(searchButton);

//create and hide the "no results" message
noResults = document.createElement('h2');
noResults.textContent = 'Sorry, no results have been found.';
divPage.appendChild(noResults);
noResults.style.display = ('none');

//function filters the list and hides the rest of the items
function searchStudent() {

  noResults.style.display = ('none');
  const filteredList = [];
  for (let x = 0; x < studentList.length; x++) {

    if (studentName[x].innerHTML.includes(input.value.toLowerCase())) {
      studentList[x].style.display = ('')
      filteredList.push(studentName[x].parentNode.parentNode);
    }
      else {
        studentList[x].style.display = ('none');
      }
  }

//show "no results" message if there is no matched item
  if (filteredList.length == 0) {
    noResults.style.display = ('');
  }

  reset();
  showPage(filteredList, 1);
  appendPageLinks(filteredList);
};

input.addEventListener('keyup', (e) => {
    e.preventDefault();
    if (input.value != '') {
       searchStudent();
    } else {
       reset();
       showPage(studentList, 1);
       appendPageLinks(studentList)
    }
 });

searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  searchStudent();
});
