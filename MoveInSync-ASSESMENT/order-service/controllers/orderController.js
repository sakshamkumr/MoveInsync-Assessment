const orders = [
  {
    "id": 1,
    "userId": 1,
    "bookId": 2,
    "quantity": 1
  },
  {
    "id": 2,
    "userId": 2,
    "bookId": 1,
    "quantity": 3
  }
];

exports.getAll = (req, res) => res.json(orders);

exports.getById = (req, res) => {
  const item = orders.find(i => i.id == req.params.id || i.bookId == req.params.id);
  if (!item) return res.status(404).send("Order not found");
  res.json(item);
};

exports.createNew = (req, res) => {
  const newItem = { id: orders.length + 1, ...req.body };
  orders.push(newItem);
  res.status(201).json(newItem);
};
