interface Book {
  id: string;
  title: string;
  author: Author;
  cover: string; // URL
  description: string;
  genres: string[];
  parts: string[];
}

interface Author {
  id: string;
  name: string;
  bio: string;
}
