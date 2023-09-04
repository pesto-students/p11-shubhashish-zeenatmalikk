import { useMemo } from 'react';

const useBookFilter = (books, searchTerm) => {
  // Use useMemo to memoize the filtered list and optimize performance
  const filteredBooks = useMemo(() => {
    // If the searchTerm is empty, return the original list of books
    if (!searchTerm) {
      return books;
    }

    // Convert the searchTerm to lowercase for case-insensitive filtering
    const lowercaseSearchTerm = searchTerm.toLowerCase();

    // Filter the books based on the search term
    return books.filter((book) => {
      const { title = '', author = '', year = '' } = book;

      // Check if any of the book's properties contain the search term
      return (
        title.toLowerCase().includes(lowercaseSearchTerm) ||
        author.toLowerCase().includes(lowercaseSearchTerm) ||
        year.toString().includes(searchTerm)
      );
    });
  }, [books, searchTerm]);

  return filteredBooks;
};

export default useBookFilter;
