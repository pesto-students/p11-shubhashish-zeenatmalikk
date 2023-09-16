import React, { useState } from 'react'
import styles from "./stylesheet.module.css"
import BookDataLoader from '../DataLoader/BookDataLoader'
const BookDetails = ({ singleBook, books, setBooks }) => {
    const { img = '', title = '', year = '', author = '' } = singleBook
    const [showDetails, setShowDetails] = useState(false);
    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };
    const handleDelete = (bookId) => {
        const updatedBooks = books.filter(book => book.id !== bookId);
        setBooks(updatedBooks);
    };
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.card}>
                    <img src={img} alt='' className={styles.image} />
                    <div>
                        <h3>{title}</h3>
                        <p>Author: {author}</p>
                        <p>Year: {year}</p>
                        <button onClick={toggleDetails}>
                            {showDetails ? 'Hide Details' : 'Show Details'}
                        </button>
                        <button onClick={() => handleDelete(val.id)}>Delete</button>
                        {showDetails && (
                            <div className="additional-details">
                                {/* Render additional details here */}
                                <p>Description: Lorem ipsum dolor sit amet...</p>
                                <p>Genre: Fiction</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
                    <BookDataLoader  />
        </div>
    )
}

export default BookDetails