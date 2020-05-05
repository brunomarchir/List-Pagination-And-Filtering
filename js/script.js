

//get the DOM elements

let list = document.querySelector('.student-list');
let studentItem = list.children;
divPage = document.querySelector('.page');
const numItems = 10;


// this function limits how many pages will be shown each page

var showPage = (page) => {

  let indexFirst = (page * numItems) - numItems;
  let indexLast = (page * numItems) - 1;

  for (let i = 0; i < list.childElementCount; i++) { //the "childElementCount" property was extracted from https://www.w3schools.com/jsref/prop_element_childelementcount.asp
    if (i >= indexFirst && i <= indexLast) {
      list.children[i].style.display = ('block');
    }
      else {
        list.children[i].style.display = ('none');
      }
  }
};

//call function for the initial page
showPage(1);

// create and add the links for the pagination

function appendPageLinks() {
  var numPages = Math.ceil(list.childElementCount/10); //gets the number of pages needed
  let pagination = document.createElement('div');
  let ul = document.createElement('ul');
  pagination.className = ("pagination");

  divPage.appendChild(pagination);
  pagination.appendChild(ul);



  for (let i=1; i <= numPages; i++) {
    let li = document.createElement('li');
    let link = document.createElement('a');
    ul.appendChild(li);
    li.appendChild(link);
    link.textContent = i;

//add funcionality to the page's buttons

    link.addEventListener('click', () => {
      showPage(i);
    })
  }
};

appendPageLinks();
