const inventorys = [
  {
    "bookId": 1,
    "stock": 5
  },
  {
    "bookId": 2,
    "stock": 2
  }
];

exports.getAll = (req, res) => res.json(inventorys);

exports.getById = (req, res) => {
  const item = inventorys.find(i => i.id == req.params.id || i.bookId == req.params.id);
  if (!item) return res.status(404).send("Inventory not found");
  res.json(item);
};

exports.createNew = (req, res) => {
  const newItem = { id: inventorys.length + 1, ...req.body };
  inventorys.push(newItem);
  res.status(201).json(newItem);
};
