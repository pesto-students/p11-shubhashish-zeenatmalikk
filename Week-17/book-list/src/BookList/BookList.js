import React from 'react'
import BookDetails from '../Book/BookDetails';
import BookForm from '../BookForm/BookForm';
import { useState } from 'react';
import useBookFilter from '../customHook/BookFilter';
import { useTheme } from '../ThemeContext/ThemeContext';
import styles from './BookList.module.css';
import useBookSorter from '../BookSorter/useBookSorter';

const BookList = () => {
  const [books, setBooks] = useState([
    { id: 1, img: "https://bookshelf.themerex.net/wp-content/uploads/2020/05/product-05-copyright.jpg", title: 'Designer cookbook', author: 'Author 1', year: 2020 },
    { id: 2, img: "https://bookshelf.themerex.net/wp-content/uploads/2020/05/product-06-copyright.jpg", title: 'Garden Design', author: 'Author 2', year: 2018 },
    { id: 3, img: "https://bookshelf.themerex.net/wp-content/uploads/2020/05/product-03-copyright.jpg", title: "Everybody's fool", author: 'Author 3', year: 2022 },
    // Add more books if you'd like
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('title-asc');
  const sortedBooks = useBookSorter(books, sortBy);
  const filteredBooks = useBookFilter(books, searchTerm);

  const { theme } = useTheme();

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  return (
    <div className={theme === 'light' ? styles.lightTheme : styles.darkTheme}>
      <BookForm addBook={addBook} />
      <select
        id="sort-select"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="title-asc">Title (A-Z)</option>
        <option value="title-desc">Title (Z-A)</option>
        <option value="author-asc">Author (A-Z)</option>
        <option value="author-desc">Author (Z-A)</option>
        <option value="year-asc">Year (Oldest First)</option>
        <option value="year-desc">Year (Newest First)</option>
      </select>
      {filteredBooks?.length === 0 ? (
        <p>The book list is currently empty.</p>
      ) : (
        sortedBooks?.map((val) => (
          <div key={val.id}>
            <BookDetails books={books} setBooks={setBooks} val={val} />
          </div>
        ))
      )}
    </div>
  )
}

export default BookList