import React from 'react'
import BookDetails from '../Book/BookDetails';
import BookForm from '../BookForm/BookForm';
import { useState } from 'react';

const BookList = () => {
    const [books, setBooks] = useState([
        { id: 1, img: "https://bookshelf.themerex.net/wp-content/uploads/2020/05/product-05-copyright.jpg", title: 'Designer cookbook', author: 'Author 1', year: 2020 },
        { id: 2, img: "https://bookshelf.themerex.net/wp-content/uploads/2020/05/product-06-copyright.jpg", title: 'Garden Design', author: 'Author 2', year: 2018 },
        { id: 3, img: "https://bookshelf.themerex.net/wp-content/uploads/2020/05/product-03-copyright.jpg", title: "Everybody's fool", author: 'Author 3', year: 2022 },
        // Add more books if you'd like
      ]);
    const addBook = (newBook) => {
        setBooks([...books, newBook]);
    };
    
    return (
        <div>
            <BookForm addBook={addBook} />
            {books.length === 0 ? (
        <p>The book list is currently empty.</p>
      ) : (
        books.map((val) => (
          <div key={val.id}>
            <BookDetails books={books} setBooks={setBooks} val={val} />
          </div>
        ))
      )}
        </div>
    )
}

export default BookList