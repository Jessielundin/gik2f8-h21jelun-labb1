const BookListItem = (book) => {
  let html = `<li id="${book.id}"
                onmouseover="bookDetailWindow(this)" 
                onmouseout="hideDetailWindow(this)"
                class="book-list__item mb-2 mx-2 last:mb-0 p-3 last:border-b-0 border-b border-amber-700 cursor-pointer">
              ${book.author} - ${book.title}    
              </li>`;
  return html;
};
