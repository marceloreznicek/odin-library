// SETUP
const myLibrary = []

function Book(title, author, page, isRead) {
    this.title = title
    this.author = author
    this.page = page
    this.isRead = isRead
}

function addBooktoLibrary(title, author, page, isRead) {
    myLibrary.push(new Book(title, author, page, isRead))
}

function createBookElement(book) {
    let eleBookContainer = document.createElement("div")
    eleBookContainer.classList.add("container-book")

    objDictFieldName.forEach(element => {
        let eleBookElement = document.createElement("div")
        eleBookElement.classList.add(element.class)
        eleBookElement.textContent = book[element.key]
        if (element.prefix !== undefined) {
            eleBookElement.textContent = element.prefix + book[element.key]}
        eleBookContainer.appendChild(eleBookElement)
    })

    let eleBookDelete = document.createElement("button")
    eleBookDelete.classList.add("book-delete")
    eleBookDelete.textContent = "Delete"
    eleBookDelete.addEventListener("click", (e) => deleteBook(e.target))

    eleBookContainer.appendChild(eleBookDelete)

    divLibrary.appendChild(eleBookContainer)
}


function createNewBook() {
    let newBook = new Book(
        document.querySelector("#title").value,
        document.querySelector("#author").value,
        document.querySelector("#pagecount").value,
        document.querySelector("#isRead").checked
    ) 

    createBookElement(newBook)

    // console.log(document.querySelector("#title").value)
}

function deleteBook(targetElement) {
    targetElement.parentElement.remove()

    // console.log(document.querySelector("#title").value)
}

addBooktoLibrary("The Hobbit", "J.R.R. Tolkien", 10, true);
addBooktoLibrary("Dune", "Frank Herbert", 10, true);
addBooktoLibrary("1984", "George Orwell", 10, true);
addBooktoLibrary("Foundation", "Isaac Asimov", 10, true);
addBooktoLibrary("Neuromancer", "William Gibson", 10, true);
addBooktoLibrary("The Name of the Wind", "Patrick Rothfuss", 10, true);
addBooktoLibrary("The Way of Kings", "Brandon Sanderson", 10, true);
addBooktoLibrary("American Gods", "Neil Gaiman", 10, true);
addBooktoLibrary("Good Omens", "Terry Pratchett", 10, true);
addBooktoLibrary("The Left Hand of Darkness", "Ursula K. Le Guin", 10, true);

Book.prototype.info = function() {
    return this.title + " - " + this.author + " - " + this.page  + " - " + this.isRead
}

console.table(myLibrary)
myLibrary.forEach(book => console.log(book.info()))

const divLibrary = document.querySelector("#library")

const objDictFieldName = [
    {key: "title", class: "book-name"},
    {key: "author", class: "book-author"},
    {key: "page", class: "book-page-count", prefix: "Pages: "},
    {key: "isRead", class: "book-is-read", prefix: "Read: "},
]


while (divLibrary.firstChild) {divLibrary.removeChild(divLibrary.firstChild)}

myLibrary.forEach(book => {createBookElement(book)})

// Main
document.querySelector("#add-new-book").addEventListener("click", createNewBook)
const initialDeleteButtons = document.querySelectorAll(".book-delete")

initialDeleteButtons.forEach((button) =>
    button.addEventListener("click", (e) => deleteBook(e.target)))

