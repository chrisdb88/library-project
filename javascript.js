
const childClone = document.querySelector('.gridChild').cloneNode(true);
document.querySelector('.gridChild').remove()

const bookGrid = document.querySelector(".bookGrid")
const bookForm = document.querySelector("#bookForm")
const bookModal = document.querySelector(".bookModal")
const addButton = document.querySelector(".addButton")
const cancelButton = document.querySelector('.cancelButton')
const clearButton = document.querySelector('.clearButton')
const deleteModal = document.querySelector('.deleteModal')
const deleteCancel = document.querySelector('.deleteCancel')
const deleteButton = document.querySelector('.deleteButton')

let focusedChild
let focusedObject

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

    newChild.querySelector('.deleteChild').addEventListener('click', () => {
        focusedChild = document.querySelector(`#${this.identify}`)
        console.log(focusedChild)
        focusedObject = this
        deleteModal.showModal()
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

    // v Validation v

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

deleteCancel.addEventListener('click', function() {
    deleteModal.close()
    focusedChild = undefined
    focusedObject = undefined
})

const updateIndex = function(item) {
    newID = `book${bookCollection.indexOf(item)}`
    item.id = newID
    item.identify = newID
}

deleteButton.addEventListener('click', function() {
    focusedChild.remove()
    bookCollection.splice(focusedObject, 1) 
    bookCollection.forEach(updateIndex)
    newBookPos--
    focusedChild = undefined
    focusedObject = undefined
    deleteModal.close()
})




