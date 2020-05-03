



let list = document.querySelector('.student-list');
let studentItem = list.children;
divPage = document.querySelector('.page');
const numItems = 10;




var showPage = (page) => {

  let indexFirst = (page * numItems) - numItems;
  let indexLast = (page * numItems) - 1;

  for (let i = 0; i < list.childElementCount; i++) {
    if (i >= indexFirst && i <= indexLast) {
      list.children[i].style.display = ('block');
    }
      else {
        list.children[i].style.display = ('none');
      }
  }
};


showPage(1);



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
    let pageNumber = document.createTextNode(i);
    ul.appendChild(li);
    li.appendChild(link);
    link.appendChild(pageNumber);



    link.addEventListener('click', () => {
      showPage(i);
    })
  }
};

appendPageLinks();
