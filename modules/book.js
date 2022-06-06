import { makeaddButtonTemplate, booksContainer } from './bookTemplate.js';

let bookCollection = [];

export default class Book {
  constructor(title, author, index) {
    this.title = title;
    this.author = author;
    this.index = index;
  }

  static addButton(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const index = Math.random() * 10;

    const newBook = new Book(title, author, index);

    // add new book to the dom
    makeaddButtonTemplate(newBook.title, newBook.author, newBook.index);

    bookCollection.push(newBook);
    // add new book to local storage
    localStorage.setItem('books', JSON.stringify(bookCollection));

    booksContainer.classList.remove('disappear');
    // clear the inputs
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';

    /* REMOVE FUNCTION */
    const remove = () => {
      const seperator = document.getElementById('seperator');
      const bookCard = document.getElementById(`${newBook.index}`);
      bookCard.remove();
      seperator.remove();
      bookCollection = bookCollection.filter((element) => element !== newBook);
      localStorage.setItem('books', JSON.stringify(bookCollection));
    };

    document.getElementById(`${newBook.index}`).addEventListener('click', remove);
  }
}
