const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: false,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// /* Destructuring */

// const book = getBook(3);
// book;

// // const title = book.title;
// // const author = book.author;

// const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
//   book;
// book;
// console.log(author, title, genres);

// // const primaryGenre = genres[0];
// // const secondaryGenre = genres[1];

// /* 19.A) Rest Operator */
// const [primaryGenre, secondaryGenre, ...otherGenres] = genres; // must be at the end of the destructuring pattern

// console.log(primaryGenre, secondaryGenre, otherGenres);

// /* 19.B) Spread Operator */
// const newGenres = [genres, "epic fantasy"];
// newGenres;
// // Not what we want, it created an array within an array.

// const newGenres2 = [...genres, "epic fantasy"];
// newGenres2;

// const updatedBook = {
//   ...book,
//   // Adding a new property
//   moviePublicationDate: "2001-12-19",
//   // Overwriting an existing property
//   // pages: 1210,
// };
// updatedBook;

// /* 20. Template Literals */

// const summary = `${title} is a ${pages}-page long book, was written by ${author}, and published in ${
//   publicationDate.split("-")[0]
// }. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie.`;
// summary;

// /* 21. Ternaries */
// const pagesRange = pages > 1000 ? "over a thousand" : "1000 or less";
// pagesRange;
// console.log(`The book has ${pagesRange} pages.`);

// /* 22. Arrow Functions */
// // old way (Function Declaration)
// // function getYear(str) {
// //   return str.split("-")[0];
// // }

// // new way (Function Expression)
// const getYear = (str) => str.split("-")[0];

// console.log(getYear(publicationDate));

// /* Short Circuiting and Logical Operators */
// /* Short circuiting means that the first value is taken and the remainder of the logic is ignored */
// console.log(true && "Some String"); //no short circuiting
// console.log(false && "Some String"); //short circuited
// console.log(hasMovieAdaptation && "This book has a movie");

// // falsy: 0, '', null, undefined
// console.log("Ryan" && "Some String");
// console.log(0 && "Some String");

// console.log(true || "Some String"); // short circuited
// console.log(false || "Some String");

// console.log(book.translations.spanish);

// const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
// spanishTranslation;

// // console.log(book.reviews.librarything.reviewsCount);
// // // Unintended consequences of short circuiting
// // const countWrong = book.reviews.librarything.reviewsCount || "no data";
// // countWrong;

// // // Knowledge Coalescing Operator fixes this problem
// // const count = book.reviews.librarything.reviewsCount ?? "no data";
// // // ignores 0 or empty strings
// // count;

// /* 24. Optional Chaining Operator */
// function getTotalReviewCount(book) {
//   // Use question mark after object and before property
//   // Knowledge coalescing operator used to give 0 instead of NaN
//   const goodreads = book.reviews?.goodreads?.reviewsCount ?? 0;
//   const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
//   return goodreads + librarything;
// }

// getTotalReviewCount(book);

/* 25. map method */
// Basic example
// const x = [1, 2, 3, 4, 5].map((el) => el * 2);
// console.log(x);

// const books = getBooks();
// const titles = books.map((book) => book.title);
// titles;

// const essentialData = books.map((book) => ({
//   title: book.title,
//   author: book.author,
// }));
// essentialData;

// /* Filter Method */
// const longBooksWithMovie = books
//   .filter((book) => book.pages > 500)
//   .filter((book) => book.hasMovieAdaptation);
// console.log(longBooksWithMovie.length);

// const adventureBooks = books
//   .filter((books) => books.genres.includes("adventure"))
//   .map((book) => book.title);
// adventureBooks;

// /* 27. Reduce method */
// // reduce the entire array to a single value
// // acc variable = "accumulator value"; starting value
// const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
// pagesAllBooks;

// /* 28. Array Sort Method */
// // // simple example
// const arr = [3, 7, 1, 9, 6];
// // // ascending, use a-b; descending, use b-a.
// // const sorted = arr.sort((a, b) => a - b);
// // sorted;
// // // note that this mutates the original array
// // arr;
// // // We usually don't want that, so we need a copy first.
// // // use slice() first
// const sorted = arr.slice().sort((a, b) => a - b);
// arr;
// sorted;

// const sortedByPages = books
//   .slice()
//   .sort((a, b) => b.pages - a.pages)
//   .map((book) => book.title);
// sortedByPages;

// /* 29. Working with Immutable Arrays */
// // 1) Add a book object to array
// const newBook = {
//   id: 6,
//   title: "Harry Potter and the Chamber of Secrets",
//   author: "J.K. Rowling",
// };

// const booksAfterAdd = [...books, newBook];
// booksAfterAdd;

// // 2) Delete book object from array
// // filter makes the array shorter
// const booksAfterDelete = booksAfterAdd.filter((book) => book.id != 3);
// booksAfterDelete;

// // 3) Update a book object in the array
// // map creates an array of same length
// const booksAfterUpdate = booksAfterDelete.map((book) =>
//   book.id === 1 ? { ...book, pages: 1234 } : book
// );
// booksAfterUpdate;

// /* 30. Asynchronous JavaScript: Promises */
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// // This will be printed first because it is not part of the Promise.
// console.log("Second Console Log");

/* 31 Async/Await */
// Cleaner than using .then() handlers
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  console.log("Function \n", data);

  return data;
}

// Note that you will still need to handle the returned promise when using async functions (eg. make another async function or the .then() handler)
const todos = getTodos();
console.log("First \n", todos);

const todos2 = getTodos().then((resp) => console.log("Second \n", resp));
