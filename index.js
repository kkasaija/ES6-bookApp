import { displayControl, removeBook, addBook } from './modules/display.js';
import {
  displayBooks, displayForm, contact, displayContact,
  displayBookListonly, displayContactonly, displayFormonly,
} from './modules/views.js';

import { DateTime } from './modules/luxon.js';

const bookItems = document.querySelector('#book-list');
const sectionTitle = document.querySelector('#section-title');

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// display books
window.onload = displayControl.displayBooks();

// add books from form

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  // validate
  if (title === '' || author === '') {
    // eslint-disable-next-line no-alert
    alert('Please fill in all fields');
  } else {
    const book = new Book(title, author);
    sectionTitle.style.display = 'block';
    bookItems.style.display = 'flex';

    // add book to list
    displayControl.addBookToList(book);
    // add book to local storage

    addBook(book);
    // clear fields
    displayControl.clearFields();
  }
});
// remove book
document.querySelector('#book-list').addEventListener('click', (e) => {
  displayControl.deleteBook(e.target);

  // remove from displayControl
  removeBook();
});

// creating date section
const displayDate = document.querySelector('.date');

displayDate.innerHTML = `${DateTime.local().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS)}`;

contact.innerHTML = `<h2>
    Contact information
    </h2>
    <p> Do you have any questions or you just want to say "Hello"
      <br>You can reach out to us!
      </p>
    <ul>
      <li>yusufnviiri@gmail.com</li>
      <li>Our Phone number:+256777471583</li>
      <li>Our address:Kampala,Uganda </li>
    </ul>`;

displayBooks.addEventListener('click', displayBookListonly);

displayForm.addEventListener('click', displayFormonly);

displayContact.addEventListener('click', displayContactonly);
