const books = [
  {
    "id": 1,
    "title": "Node Basics",
    "author": "John Doe",
    "category": "Programming"
  },
  {
    "id": 2,
    "title": "Express Essentials",
    "author": "Jane Smith",
    "category": "Web Dev"
  }
];

exports.getAll = (req, res) => res.json(books);

exports.getById = (req, res) => {
  const item = books.find(i => i.id == req.params.id || i.bookId == req.params.id);
  if (!item) return res.status(404).send("Book not found");
  res.json(item);
};

exports.createNew = (req, res) => {
  const newItem = { id: books.length + 1, ...req.body };
  books.push(newItem);
  res.status(201).json(newItem);
};
