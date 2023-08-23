import React from 'react'
import BookDetails from '../Book/BookDetails';

const BookList = () => {
    const books = [
        { id: 1, img: "https://bookshelf.themerex.net/wp-content/uploads/2020/05/product-05-copyright.jpg", title: 'Designer cookbook', author: 'Author 1', year: 2020 },
        { id: 2, img: "https://bookshelf.themerex.net/wp-content/uploads/2020/05/product-06-copyright.jpg", title: 'Garden Design', author: 'Author 2', year: 2018 },
        { id: 3, img: "https://bookshelf.themerex.net/wp-content/uploads/2020/05/product-03-copyright.jpg", title: "Everybody's fool", author: 'Author 3', year: 2022 },
        // Add more books if you'd like
    ];
    return (
        <div>
            {
                books.map((val) => (
                    <div>
                        <BookDetails val={val} />
                    </div>
                ))
            }
        </div>
    )
}

export default BookList