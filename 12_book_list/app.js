class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book){
        const list = document.getElementById('book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href = "#" class = "delete">X<a></td>
        `;
        list.appendChild(row);
    }
    deleteBook(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    }
    showAlert(message, className){
        const div = document.createElement('div');
        div.className = `alart ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);
        
        setTimeout(function(){
            div.remove();
        }, 3000);
    }
}

class Store{
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        }else{
            books = JSON.parse(localStorage.getItem('books')) ;
        }
        return books;
    }
    static displayBooks(){
        const books = Store.getBooks();
        const ui = new UI();
        books.forEach(function(book){
            ui.addBookToList(book);
        });
    }
    static addBook(book){
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem("books", JSON.stringify(books));
    }
    static removeBook(isbn){
        const books = Store.getBooks();
        books.forEach(function(book, index){
            if(book.isbn === isbn){
                books.splice(index,1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}

function loadEventHandlers(){
    document.addEventListener('DOMContentLoaded', Store.displayBooks);

    const btnAdd = document.querySelector(".book-add");
    btnAdd.addEventListener("click", handleSubmit);

    const lstBook = document.querySelector("#book-list");
    lstBook.addEventListener('click', handleDelete);
}

function handleDelete(e){
    e.preventDefault();
    const ui = new UI();
    //console.log(e.target.parentElement); // X 버트
    //console.log(e.target.parentElement.previousElementSibling); // <td>ISBN</td> 얻어온다.
    //console.log(e.target.parentElement.previousElementSibling.textContent); // ISBN값을 얻어온다.
    const valIsbn = e.target.parentElement.previousElementSibling.textContent;
    ui.deleteBook(e.target);
    ui.showAlert('Book Removed!', 'success');
    Store.removeBook(valIsbn);
}

function handleSubmit(){
    const objTitle = document.getElementById("title");
    const objAuthor = document.getElementById("author");
    const objIsbn = document.getElementById("isbn");

    const ui = new UI();
    const book = new Book(objTitle.value, objAuthor.value, objIsbn.value);
    if(book.title === '' || book.author === '' || book.isbn ==='')
    {
        console.log("Please fill in all fields.");
        ui.showAlert("Please fill in all fields.", 'error');
    }
    else{
        ui.addBookToList(book);
        ui.showAlert('Book Added!', 'success');
        Store.addBook(book);
        objTitle.value = objAuthor.value =  objIsbn.value = ""; 
    }    
}

function init(){
    loadEventHandlers();
    console.log("init" + Math.random());
}
init();
