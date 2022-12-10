'use strict';

let bookList = [];

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

searchField.addEventListener('keyup', (e) =>
  renderBookList(
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
);

function renderBookList(bookList) {
  const existingElement = document.querySelector('.book-list');

  const root = document.getElementById('root');

  existingElement && root.removeChild(existingElement);
  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));
}

/* Här börjar min kod för Labb 1 */
var div = document.createElement('div');

/* funktion som visar bok detaljer */ 
function bookDetailWindow(x){
  let book  
  x.addEventListener('mouseenter',(e) =>
  
  fetch('https://gik2f8-labs.herokuapp.com/books/'+e.target.id)
    .then((response) => response.json())
    .then((data) => {
      book = data;
      div.innerHTML = `<div class="detailWindow w-1/3 h-48 bg-amber-100 rounded-lg float-right fixed">
                <ul class="float-left ml-4 mt-4">
                    <p class="font-serif font-semibold text-lg">Bokinformation</p>
                    <li class="font-serif"><strong>Id:</strong> ${book.id}</li>
                    <li class="font-serif"><strong>Title:</strong> ${book.title}</li>
                    <li class="font-serif"><strong>Author:</strong> ${book.author}</li>
                    <li class="font-serif"><strong>Pages:</strong> ${book.pages}</li>
                    <li class="font-serif"><strong>Release date:</strong> ${book.releaseDate}</li>
                </ul>
                <div class="mt-4 mr-4 relative float-right">
                <img class="max-h-40 text-center font-serif" src="${book.coverImage}" alt="Ingen bild">
                </div>
                </div>`;
    }),
    document.body.appendChild(div)
  );
}

/* Göm rutan när musen lämnar ett bokresultat */
function hideDetailWindow(x) {
  x.addEventListener('mouseleave',() =>  
  document.body.appendChild(div),
  div.innerHTML = `<div hidden "></div>`
  );
}