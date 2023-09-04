import React, { useEffect } from 'react';

const BookDataLoader = ({ setBooks }) => {
  useEffect(() => {
    // Simulate fetching book data
    const fetchBookData = async () => {
      try {
        // Replace this with your actual API call or data fetching logic
        const response = await fetch('your-api-endpoint-here');
        const data = await response.json();

        // Update the books state in the BookList component with the fetched data
        setBooks(data.books); // Assuming data contains an array of books
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };

    fetchBookData();
  }, [setBooks]);

  return (
    <div>BookDataLoader</div>
  );
};

export default BookDataLoader;
