const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');
require('dotenv').config();

app.use(express.json());
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log('Order Service running on port ' + PORT));
