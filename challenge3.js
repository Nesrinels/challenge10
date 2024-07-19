function averagePages(books) {
    const totalPages = books.map(book => book.pages).reduce((acc, curr) => acc + curr, 0);
    return totalPages / books.length;
}