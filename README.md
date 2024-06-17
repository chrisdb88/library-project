
Have an array called myLibrary which will store all books that are created.

Have a constructor function that constructs a book.

Have a function that adds books to myLibrary, after the creation of the book.

Have a function that loops through the myLibrary array, and displays books on the page.

You choose how the books are displayed, but a table, or a card display is recommended.

There will be a NEW BOOK button that will bring up a form to create a new book, requesting the information 
author, title, no of pages, read true false, and whatever else you want. The form can be a sidebar, modal, whatever.

A button on each book display to delete the whole book and remove it from the display.

A button to change each book's read status.

Extra: A limit on the number of books.


HTML:
1. floating add button at the top
2. grid scrolling container below that with a limit on the number of children
3. modal that appears after you press the add button


Two main functions, splice, push.

Have a listener for when the array changes, if something is deleted, do something, else end.

Have a unique identifying class for each grid child, that associates with it's array index, so like, 
book, then concatenate with the array index. You will need to dynamically update the class names when a book
gets deleted, but not when one gets added because it will always get added to the end. In this instance, I 
think forEach is appropriate. Just do forEach(assign the class to book, concatenate with index). The index
position and the dom positions will appear to dynamically change, but this will create issues in the future where there will be duplicate class names, because we didn't update the class names in association with the index position. In that case, the wrong book, or multiple books may be deleted.

When creating a new book, push it into the array.

When deleting a grid child, splice it from the array, then delete the object. Make sure to specify to only
remove the 1.





Normalize

html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }
  
  body {
    margin: 0;
  }
  
  main {
    display: block;
  }
  
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  
  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }
  
  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  
  a {
    background-color: transparent;
  }
  
  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }
  
  b,
  strong {
    font-weight: bolder;
  }
  
  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  
  small {
    font-size: 80%;
  }
  
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  
  sub {
    bottom: -0.25em;
  }
  
  sup {
    top: -0.5em;
  }
  
  img {
    border-style: none;
  }
  
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }
  
  button,
  input { /* 1 */
    overflow: visible;
  }
  
  
  button,
  select { /* 1 */
    text-transform: none;
  }
  
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  
  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }
  
  progress {
    vertical-align: baseline;
  }
  
  textarea {
    overflow: auto;
  }
  
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }
  
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  
  [type="search"] {
    /* -webkit-appearance: textfield; 1 */
    outline-offset: -2px; /* 2 */
  }
  
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  
  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }
  
  details {
    display: block;
  }

  summary {
    display: list-item;
  }
  
  template {
    display: none;
  }

/* -------------- ^ Normalize ^ --------------  */