
const bookGrid = document.querySelector(".bookGrid")

const bookCollection = [];

let newBookPos = 0;

function constructBook(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read
    
    this.toggleRead = function() {
        if (this.read === false) {
            this.read = true
        } else if (this.read === true) {
            this.read = false
        }
    }

    this.pos = newBookPos
    this.identify = `book${this.pos}`

    const newChild = document.createElement("div")

    newChild.className = "gridChild"
    newChild.id += this.identify

    bookGrid.appendChild(newChild)

    newBookPos++

    this.delete = function() {
        const thisElement = document.getElementById(this.identify)
        thisElement.remove()
    }
}