// display controller

export const displayBooks = document.querySelector('#display-list');
export const displayForm = document.querySelector('#display-form');
export const contact = document.querySelector('#contact');
export const displayContact = document.querySelector('#display-contact');
export const container = document.querySelector('.container');
export const addBookList = document.querySelector('#form');
export const formSubmit = document.querySelector('#add-book');
export const separator = document.querySelector('.separator');
const bookItems = document.querySelector('#book-list');
const sectionTitle = document.querySelector('#section-title');

export const displayFormonly = () => {
  addBookList.style.display = 'flex';
  sectionTitle.style.display = 'none';
  bookItems.style.display = 'none';
  contact.style.display = 'none';
  separator.style.display = 'none';
};
export const displayBookListonly = () => {
  addBookList.style.display = 'none';
  contact.style.display = 'none';
  sectionTitle.style.display = 'block';
  bookItems.style.display = 'flex';
};

contact.innerHTML = `<h2>
        Contact information
        </h2>
        <p> Do you have any questions or you just want to say "Hello"
          <br>You can reach out to us!
          </p>
        <ul>
          <li>Our email:mail@mail.com</li>
          <li>Our Phone number:004386534422</li>
          <li>Our address:Streetname 22,88273 Islamabad,Pakistan </li>
        </ul>`;

export function displayContactonly() {
  container.style.backgroundColor = '#ffa833';
  addBookList.style.display = 'none';
  sectionTitle.style.display = 'none';
  bookItems.style.display = 'none';
  contact.style.display = 'flex';
  separator.style.display = 'none';
}
