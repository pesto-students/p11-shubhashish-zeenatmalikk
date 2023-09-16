import React, { useEffect } from 'react';

const BookDataLoader = () => {
  const [books, setBooks] = useState([
    { id: 1, img: "https://bookshelf.themerex.net/wp-content/uploads/2020/05/product-05-copyright.jpg", title: 'Designer cookbook', author: 'Author 1', year: 2020 },
    { id: 2, img: "https://bookshelf.themerex.net/wp-content/uploads/2020/05/product-06-copyright.jpg", title: 'Garden Design', author: 'Author 2', year: 2018 },
    { id: 3, img: "https://bookshelf.themerex.net/wp-content/uploads/2020/05/product-03-copyright.jpg", title: "Everybody's fool", author: 'Author 3', year: 2022 },
    // Add more books if you'd like
  ]);
  useEffect(() => {
    // Simulate fetching book data
    const fetchBookData = async () => {
      try {
        // Replace this with your actual API call or data fetching logic
        const response = await fetch('https://hapi-books.p.rapidapi.com/nominees/romance/2020');
        const data = await response.json();
console.log('dataBooks',data)
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
