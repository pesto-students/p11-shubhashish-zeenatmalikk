import { useMemo } from 'react';

const useBookSorter = (books, sortBy) => {
    // Use useMemo to memoize the sorted list and optimize performance
    const sortedBooks = useMemo(() => {
        // Clone the books array to avoid mutating the original array
        const clonedBooks = [...books];

        // Sort the clonedBooks array based on the sorting criteria
        switch (sortBy) {
            case 'title-asc':
                return clonedBooks.sort((a, b) => a.title.localeCompare(b.title));
            case 'title-desc':
                return clonedBooks.sort((a, b) => b.title.localeCompare(a.title));
            case 'author-asc':
                return clonedBooks.sort((a, b) => a.author.localeCompare(b.author));
            case 'author-desc':
                return clonedBooks.sort((a, b) => b.author.localeCompare(a.author));
            case 'year-asc':
                return clonedBooks.sort((a, b) => a.year - b.year);
            case 'year-desc':
                return clonedBooks.sort((a, b) => b.year - a.year);
            default:
                // If no valid sorting criteria is provided, return the original array
                return clonedBooks;
        }
    }, [books, sortBy]);

    return sortedBooks;
};

export default useBookSorter;
