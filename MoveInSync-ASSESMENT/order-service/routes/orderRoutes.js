const express = require('express');
const router = express.Router();
const { getAll, getById, createNew } = require('../controllers/orderController');

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', createNew);

module.exports = router;
