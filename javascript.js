
const childClone = document.querySelector('.gridChild').cloneNode(true);
document.querySelector('.gridChild').remove()

const bookGrid = document.querySelector(".bookGrid")
const bookForm = document.querySelector("#bookForm")
const bookModal = document.querySelector(".bookModal")
const addButton = document.querySelector(".addButton")
const cancelButton = document.querySelector('.cancelButton')
const clearButton = document.querySelector('.clearButton')

bookGrid.appendChild(childClone)

const bookCollection = [];

let newBookPos = 0;

function constructBook(author, title, pages, read) {
    
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read

    this.pos = newBookPos
    this.identify = `book${this.pos}`

    const newChild = childClone.cloneNode(true)

    newChild.className = "gridChild"
    newChild.id += this.identify

    newChild.querySelector('.authorInfo').textContent = author;
    newChild.querySelector('.titleInfo').textContent = title;
    newChild.querySelector('.pagesInfo').textContent = pages;

    if (this.read === false) {
        newChild.querySelector('.readStatus').textContent = "No";
        newChild.querySelector('.toggleReadButton').style.backgroundColor = "rgb(255, 68, 68)";
    } else if (this.read === true) {
        newChild.querySelector('.readStatus').textContent = "Yes";
        newChild.querySelector('.toggleReadButton').style.backgroundColor = "rgb(150, 255, 150)";
    }

    newChild.querySelector('.toggleReadButton').addEventListener('click', () => {
        if (this.read === false) {
            this.read = true
            newChild.querySelector('.readStatus').textContent = "Yes";
            newChild.querySelector('.toggleReadButton').style.backgroundColor = "rgb(150, 255, 150)";
        } else if (this.read === true) {
            this.read = false
            newChild.querySelector('.readStatus').textContent = "No";
            newChild.querySelector('.toggleReadButton').style.backgroundColor = "rgb(255, 68, 68)";
        }
    })

    bookGrid.appendChild(newChild)
    
    newBookPos++

    this.delete = function() {
        const thisElement = document.getElementById(this.identify)
        thisElement.remove()
    }
    bookCollection.push(this)
}

addButton.addEventListener("click", function() {
    bookModal.showModal()
})

cancelButton.addEventListener("click", function() {
    bookModal.close()
})

const authorInput = document.querySelector("#author")
const titleInput = document.querySelector("#title")
const pagesInput = document.querySelector("#pages")
const readInput = document.querySelector("#read")

bookForm.addEventListener("submit", function(e) {

    e.preventDefault()
    let pagesToNumber = Number(pagesInput.value)

    if ((typeof authorInput.value === "string" && authorInput.value.length >= 1 && authorInput.value.length <= 20)
        && (typeof titleInput.value === "string" && titleInput.value.length >= 1 && titleInput.value.length <= 20)
        && (typeof pagesInput.value === "string" && pagesToNumber >= 1 && pagesToNumber <= 99999)
        && (typeof readInput.checked === "boolean") && (readInput.checked === true || readInput.checked === false)) 
        {
            constructBook(authorInput.value, titleInput.value, pagesInput.value, readInput.checked)
            bookModal.close()
            bookForm.reset()
        } else {
            console.log("ERROR: Invalid input!")
        }
})

clearButton.addEventListener('click', function() {
    bookForm.reset()
})








