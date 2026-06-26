const books = [
  {
    title: "Cien años de soledad",
    authorName: "Gabriel García Márquez",
    releaseYear: 1967,
  },
  {
    title: "El nombre de la rosa",
    authorName: "Umberto Eco",
    releaseYear: 1980,
  },
  { title: "1984", authorName: "George Orwell", releaseYear: 1949 },
  {
    title: "El principito",
    authorName: "Antoine de Saint-Exupéry",
    releaseYear: 1943,
  },
];

function sortByYear(libro1, libro2) {
  if (libro1.releaseYear < libro2.releaseYear) {
    return -1;
  } else if (libro1.releaseYear === libro2.releaseYear) {
    return 0;
  } else {
    return 1;
  }
}

const filteredBooks = books.filter((libro) => libro.releaseYear <= 1950);
filteredBooks.sort(sortByYear);
