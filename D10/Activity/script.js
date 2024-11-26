
class Book{
    constructor(title=String,author=String,genre=String,availability=Boolean){
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.availability = availability;
    }

    function borrowBook(availability) {
            
    }

    this.returnBook = function() {
        console.log(title);
    }

    this.displayInfo = function() {
        console.log(title);
    }
}


const book = new Book('test');

book.borrowBook();