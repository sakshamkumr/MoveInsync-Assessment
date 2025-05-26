const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');
require('dotenv').config();

app.use(express.json());
app.use('/api/inventorys', require('./routes/inventoryRoutes'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => console.log('Inventory Service running on port ' + PORT));
