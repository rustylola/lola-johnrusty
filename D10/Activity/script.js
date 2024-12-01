function Book(){
    let title = new String();
    let author = new String();
    let genre = new String();
    let availability = new Boolean();

    this.borrowBook = function(availability) {
        if (availability)
            availability = false;
        
        console.log(availability);
        return availability;
    }

    this.returnBook = function(isReturn, availability) {
        if(isReturn)
            availability = false;
        console.log(availability);
        return availability;
    }

    this.displayInfo = function(title, author, genre, availability) {
        console.log(`Title: ${title} - Author: ${author} - Genre: ${genre} - Availability: ${availability}`);
    }
}

const book = new Book();

book.borrowBook(true);

function Library(){
    let books = [];
    
    this.addBook = (title, author, genre) => {
        const Book = {"title":title, "author":author, "genre":genre, "availability": true};
        books.push(Book);
    }

    this.searchBook = (title) => {
        Object.values(books).forEach(value => {
            if(value.title == title)
                console.log(`Title: ${value.title} - Author: ${value.author} - Genre: ${value.genre} - Availability: ${value.availability}`);
        });
    } 

    this.displayBooks = () => {
        Object.values(books).forEach(value => {
            console.log(`Title: ${value.title} - Author: ${value.author} - Genre: ${value.genre} - Availability: ${value.availability}`);
        });
    }
}

const library = new Library();
library.addBook('test','test','test');
library.addBook('One Piece','Oda','Adventure');
library.searchBook('One Piece');
library.displayBooks();
