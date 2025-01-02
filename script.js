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

myLibrary.forEach(book => {

    let eleTR = document.createElement("tr")
    book.forEach(element =>  {
        let eleTD = document.createElement("td")
        td.textContent = element
        eleTR.appendChild(td)
    })

    divLibrary.appendChild(eleTR)

    let eleBook = document.createElement("p")
    eleBook.textContent = book.info()
    divLibrary.appendChild(eleBook)
})


