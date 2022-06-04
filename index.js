/* eslint-disable */
import { setDateTime } from './modules/date.js';
import Book from './modules/book.js';
import { makeaddButtonTemplate } from './modules/bookTemplate.js';

let storage = [];

const submitButton = document.getElementById('submit');

const formContainer = document.querySelector('.formContainer');
const bookContainer = document.querySelector('#books-container');
const contact = document.querySelector('.contact');
const addNew = document.querySelector('#add_new');
const ButtonContact = document.querySelector('#contact');
const BookList = document.querySelector('#book_list');

/* BOOK CLASS */

/*
populate page on initial load from local storage
------------------------------------------------
*/
storage = JSON.parse(localStorage.getItem('books')) || [];
if (storage.length > 0) {
  for (let i = 0; i < storage.length; i += 1) {
    makeaddButtonTemplate(storage[i].title, storage[i].author, storage[i].index);

    /* REMOVE FUNCTION */
    const removeButton = () => {
      const seperator = document.getElementById('seperator');
      const bookCard = document.getElementById(`${storage[i].index}`);
      bookCard.remove();
      seperator.remove();
      // seperator.parentNode.removeChild(seperator);
      localStorage.setItem('books', JSON.stringify(bookCollection));
    };

    document.getElementById(`${storage[i].index}`).addEventListener('click', removeButton);
  }
} else {
  formContainer.classList.remove('disappear');
}

submitButton.addEventListener('click', Book.addButton);

// Event listeners for toggling list, add, contact sections
addNew.addEventListener('click', () => {
  bookContainer.classList.add('disappear');
  contact.classList.add('disappear');
  formContainer.classList.remove('disappear');
});

ButtonContact.addEventListener('click', () => {
  bookContainer.classList.add('disappear');
  contact.classList.remove('disappear');
  formContainer.classList.add('disappear');
});

BookList.addEventListener('click', () => {
  bookContainer.classList.remove('disappear');
  contact.classList.add('disappear');
  formContainer.classList.add('disappear');
});

setInterval(setDateTime, 1000);